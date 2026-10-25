-- 도트링크 홈페이지 상담 신청 (2026-10-25)
CREATE TABLE IF NOT EXISTS consults (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts TEXT NOT NULL,              -- 접수 시각 (UTC ISO)
  company TEXT NOT NULL,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  work TEXT NOT NULL,
  consent_at TEXT NOT NULL,      -- 개인정보 수집·이용 동의 시각
  ip TEXT,                       -- 부정 이용 방지(시간당 접수 제한)
  ua TEXT,
  notified INTEGER NOT NULL DEFAULT 0,  -- 텔레그램 알림 성공 1
  status TEXT NOT NULL DEFAULT '신규'
);
CREATE INDEX IF NOT EXISTS idx_consults_ip_ts ON consults (ip, ts);
