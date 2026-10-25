// POST /api/consult — 홈페이지 상담 신청 접수.
// D1(dotlink-leads.consults)에 먼저 저장하고, 대표 텔레그램으로 알린다. 알림이 실패해도 신청은 남는다.
// 비밀값: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (Pages secret)

const MAX = { company: 100, name: 50, contact: 100, work: 1000 };
const PER_IP_PER_HOUR = 5;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });

export async function onRequestPost({ request, env }) {
  let b;
  try { b = await request.json(); } catch { return json({ ok: false, error: 'bad_request' }, 400); }

  if (b.website) return json({ ok: true }); // 사람에게는 안 보이는 칸 — 채웠으면 봇

  const f = {};
  for (const [k, max] of Object.entries(MAX)) {
    const v = String(b[k] ?? '').trim();
    if (!v || v.length > max) return json({ ok: false, error: 'invalid_' + k }, 400);
    f[k] = v;
  }
  if (b.consent !== true) return json({ ok: false, error: 'consent_required' }, 400);

  const ip = request.headers.get('CF-Connecting-IP') || '';
  const now = new Date();
  const ts = now.toISOString();
  const hourAgo = new Date(now.getTime() - 3600e3).toISOString();
  const recent = await env.DB.prepare('SELECT COUNT(*) AS n FROM consults WHERE ip = ?1 AND ts > ?2').bind(ip, hourAgo).first();
  if (recent.n >= PER_IP_PER_HOUR) return json({ ok: false, error: 'too_many' }, 429);

  const ins = await env.DB.prepare(
    'INSERT INTO consults (ts, company, name, contact, work, consent_at, ip, ua) VALUES (?1, ?2, ?3, ?4, ?5, ?1, ?6, ?7)'
  ).bind(ts, f.company, f.name, f.contact, f.work, ip, (request.headers.get('User-Agent') || '').slice(0, 200)).run();
  const id = ins.meta.last_row_id;

  const kst = new Date(now.getTime() + 9 * 3600e3).toISOString().slice(0, 16).replace('T', ' ');
  const text = `[도트링크 상담 신청 #${id}]\n회사: ${f.company}\n이름: ${f.name}\n연락처: ${f.contact}\n업무: ${f.work}\n접수: ${kst} KST`;
  try {
    const r = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, disable_web_page_preview: true }),
    });
    if (r.ok) await env.DB.prepare('UPDATE consults SET notified = 1 WHERE id = ?1').bind(id).run();
  } catch { /* 저장은 끝났다 — 알림 실패는 notified=0 으로 남는다 */ }

  return json({ ok: true, id });
}
