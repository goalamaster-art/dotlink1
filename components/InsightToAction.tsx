
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, BarChart3, Globe2, X, Calendar, ArrowLeft, Clock, ArrowRight, FileText, MessageSquareQuote, Zap, TrendingUp, ShieldCheck, Target, ListChecks, Info, CheckCircle2, ChevronRight, BarChart } from 'lucide-react';
import { Reveal } from './Reveal';
import { HighTechLoader } from './Loading';

interface ReportData {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  summary: string;
  content: React.ReactNode;
  externalLink?: string;
  tags?: string[];
}

const REPORTS: ReportData[] = [
  {
    id: 'threads-series-1',
    category: 'Live Series',
    date: 'Daily Update',
    title: '[무역 문의, 이렇게 옵니다] 실전 바이어 인콰이어리 분석 리포트',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    summary: '스레드(@global_biznote)에서 연재 중인 실전 무역 데이터 분석 시리즈입니다. 실제 바이어가 전송한 인콰이어리를 해부하여 성공적인 매칭 포인트를 도출합니다.',
    externalLink: 'https://www.threads.com/@global_biznote',
    tags: ['바이어심리', 'RFQ대응', '실전데이터'],
    content: (
      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
              <MessageSquareQuote size={20} />
            </div>
            <h5 className="text-xl font-bold text-white">바이어 인콰이어리의 3단계 해부 로직</h5>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
              <span className="text-blue-500 font-black text-xs mb-3">STEP 01</span>
              <h6 className="text-white font-bold mb-3">시그널 감지 (Intent Detection)</h6>
              <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                단순한 "How much?" 문의와 구체적인 스펙(용량, 인증, 예상 물량)을 포함한 문의의 수주 확률은 약 4.2배 차이가 납니다. 바이어가 문장에 녹여낸 '페인 포인트'를 찾아야 합니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
              <span className="text-blue-500 font-black text-xs mb-3">STEP 02</span>
              <h6 className="text-white font-bold mb-3">신뢰 검증 (Trust Barrier)</h6>
              <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                바이어는 첫 대화에서 제조사의 생산 능력보다 '소통의 정확도'를 먼저 봅니다. 질문에 대한 직접적인 답변 누락은 즉각적인 이탈로 이어지며, 이는 데이터상으로 80% 이상의 드랍률을 보입니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
              <span className="text-blue-500 font-black text-xs mb-3">STEP 03</span>
              <h6 className="text-white font-bold mb-3">최종 매칭 (Strategic Fit)</h6>
              <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                제조사의 현재 CAPA와 바이어의 예상 성장이 일치하는지 확인합니다. 장기적인 파트너십 가능성을 타진하는 데이터 포인트(연간 예상 구매액 등)를 확보하는 단계입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20">
            <h5 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Zap size={20} className="text-blue-500" /> 실무 액션 가이드: 인콰이어리 전환율 극대화
            </h5>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h6 className="text-white font-bold text-sm mb-1">진성 바이어 필터링 자동화</h6>
                  <p className="text-xs text-gray-400 leading-relaxed">최근 거래 이력, 회사 웹사이트 정합성, 링크드인 프로필 연동 여부를 데이터베이스화하여 필터링합니다. 허위 문의에 소모되는 리소스를 70% 절감할 수 있습니다.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h6 className="text-white font-bold text-sm mb-1">Golden Hour (골든 아워) 대응 체계</h6>
                  <p className="text-xs text-gray-400 leading-relaxed">문의 접수 후 1시간 이내 대응 시 바이어의 피드백 확률이 35% 증가합니다. 국가별 시차에 따른 자동 응답 템플릿과 실무자 알림 시스템 구축이 선행되어야 합니다.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h6 className="text-white font-bold text-sm mb-1">CBM 기반 정밀 견적서 발송</h6>
                  <p className="text-xs text-gray-400 leading-relaxed">FOB 단가뿐만 아니라 컨테이너 적재 효율(CBM) 정보를 포함하여 바이어의 물류 계산 수고를 덜어주는 것이 강력한 셀링 포인트가 됩니다. 데이터가 풍부한 견적서가 신뢰도를 2배 높입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 italic">
          <h6 className="text-blue-400 font-bold text-sm mb-3">Analysis Summary</h6>
          <p className="text-sm text-gray-300 leading-relaxed">
            "스레드 실시간 연재 시리즈는 매일 수집되는 글로벌 바이어의 생생한 목소리를 분석합니다. 인콰이어리는 단순히 메일이 아니라, 시장이 보내는 구조화된 데이터입니다. 이를 해독하는 능력이 곧 귀사의 디지털 무역 경쟁력입니다."
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'blog-224164247470',
    category: 'K-Brand Strategy',
    date: '2024.06.24',
    title: '글로벌 시장의 중심, K-브랜드를 향한 바이어의 시선과 대응 전략',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    summary: '알리바바닷컴 내 한국 제품의 검색량은 매년 두 자릿수 성장을 기록 중입니다. K-브랜드 프리미엄을 실질적인 수출 성과로 바꾸는 브랜드 포지셔닝을 분석합니다.',
    tags: ['K-Brand', '프리미엄화', '시장점유율'],
    content: (
      <div className="space-y-10">
        <section>
          <h5 className="text-blue-400 font-bold flex items-center gap-2 mb-6"><Target size={20} /> K-Brand의 4대 핵심 소싱 매력도</h5>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <Zap size={18} className="text-blue-500" />
                <h6 className="text-white font-bold">Innovation & R&D (기술적 우위)</h6>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                글로벌 바이어들은 한국 제품을 '가장 트렌디하고 기술적으로 진보된 대안'으로 평가합니다. 특히 뷰티, 푸드, 소형 가전 분야에서 이러한 경향이 두드러지며, 알리바바 내 검색 필터 사용량에서 상위 5%를 유지하고 있습니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-4 mb-3">
                <ShieldCheck size={18} className="text-blue-500" />
                <h6 className="text-white font-bold">Quality Consistency (품질 안정성)</h6>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                중국산 저가 제품과 차별화되는 가장 큰 포인트는 '품질의 균일성'입니다. 바이어들은 리클레임(Reclaim) 비율이 현저히 낮은 한국 제조사의 공정 관리 데이터에 높은 점수를 부여하며, 이는 재구매율 40% 이상을 보장하는 핵심 지표입니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <ChevronRight size={18} className="text-blue-500" /> 브랜드 전략 수립 로드맵
              </h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> 상세페이지 로컬라이징 (문화권 대응)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> 글로벌 인증 마크(CE, FDA) 전면 배치
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> 제조 공정의 투명한 영상화 공개
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-blue-500" /> 현지 바이어 리뷰 및 성공 사례 데이터화
                </div>
              </div>
            </div>
            <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-500/20 flex flex-col justify-center text-center">
              <h6 className="text-blue-400 font-black text-xs mb-2 uppercase tracking-widest">Growth Metric</h6>
              <div className="text-4xl font-black text-white mb-2 tracking-tighter">240% ↑</div>
              <p className="text-xs text-gray-400">브랜드 인증 데이터를 보강한 스토어의 바이어 문의 증가율 (2024 상반기 기준)</p>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h6 className="text-white font-bold mb-4">Strategic Tip for K-Manufacturers</h6>
          <p className="text-sm text-gray-400 leading-relaxed">
            단순히 "한국산"임을 강조하는 단계를 넘어, 귀사만이 가진 독자적인 특허나 기술 공법을 '시각화' 하십시오. 바이어는 브랜드 명성보다는 '데이터로 검증된 품질'에 더 과감한 비용을 지불합니다.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'blog-224154835733',
    category: 'Marketing Efficiency',
    date: '2024.06.20',
    title: '디지털 B2B 마케팅: 고품질 바이어를 유입시키는 데이터 최적화 로직',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    summary: '노출량보다 중요한 것은 바이어의 퀄리티입니다. 타겟 키워드 분석과 광고 예산 배분을 통해 효율적인 B2B 퍼널을 구축하는 방법을 다룹니다.',
    tags: ['B2B마케팅', 'ROI최적화', '키워드분석'],
    content: (
      <div className="space-y-10">
        <section>
          <h5 className="text-blue-400 font-bold flex items-center gap-2 mb-8"><TrendingUp size={20} /> 고품질 바이어 유입을 위한 마케팅 엔진 설계</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h6 className="text-white font-bold mb-4 flex items-center gap-2"><BarChart size={18} className="text-blue-500" /> 1. 정밀 키워드 입찰 전략</h6>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                광범위한 키워드(예: "Cosmetic") 대신 구매 의도가 명확한 롱테일 키워드(예: "Vegan Serum OEM South Korea")에 집중하십시오. 클릭당 단가(CPC)는 30% 낮아지지만 문의 전환율(CVR)은 2.5배 상승합니다.
              </p>
              <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest border-t border-white/5 pt-4">Action: 키워드 데이터 주간 단위 필터링</div>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h6 className="text-white font-bold mb-4 flex items-center gap-2"><Zap size={18} className="text-blue-500" /> 2. AI 기반 타겟팅(P4P) 최적화</h6>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                알리바바의 머신러닝 시스템에 양질의 학습 데이터를 제공해야 합니다. 무분별한 클릭보다는 진성 바이어의 인콰이어리가 발생한 시간대와 국가 데이터에 가중치를 두어 광고 노출을 집중하십시오.
              </p>
              <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest border-t border-white/5 pt-4">Action: 국가별 활동 시간대 노출 비중 조절</div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-10 rounded-[2.5rem] border border-blue-500/20">
            <h5 className="text-white font-bold text-xl mb-6">Marketing Performance Blueprint</h5>
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm text-gray-400 font-medium">Click-Through Rate (CTR) 목표</span>
                <span className="text-lg font-bold text-white">4.5% 이상</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm text-gray-400 font-medium">Conversion Rate (CVR) 목표</span>
                <span className="text-lg font-bold text-white">12% 이상</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-sm text-gray-400 font-medium">Cost Per Inquiry (CPI) 절감 목표</span>
                <span className="text-lg font-bold text-blue-500">-25%</span>
              </div>
            </div>
          </div>
        </section>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h6 className="text-white font-bold mb-4">Conclusion & Insight</h6>
          <p className="text-sm text-gray-400 leading-relaxed">
            마케팅 데이터는 거짓말을 하지 않습니다. 유입되는 바이어의 국적과 구매 규모를 분석하여, 우리 제품에 가장 '열광하는' 시장을 찾아 광고 예산을 집중하는 것—이것이 리소스를 효율적으로 사용하는 유일한 방법입니다.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'blog-224153638439',
    category: 'Buyer Psychology',
    date: '2024.06.18',
    title: 'RFQ 응답의 기술: 바이어가 당신의 견적서를 선택하게 만드는 법',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad79?auto=format&fit=crop&q=80&w=1200',
    summary: '하루에도 수십 개의 견적서를 받는 바이어들에게 선택받기 위해서는 단순 가격 그 이상의 전략적 정보 배치가 필요합니다.',
    tags: ['견적전략', '바이어심리', '전환율'],
    content: (
      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-inner">
              <ListChecks size={24} />
            </div>
            <h5 className="text-2xl font-bold text-white">Winning Quote Checklist: 전략적 견적의 구성</h5>
          </div>
          
          <div className="space-y-4">
             <div className="group flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all">
                <div className="text-3xl font-black text-blue-500/40 group-hover:text-blue-500 transition-colors">01</div>
                <div>
                  <h6 className="text-lg font-bold text-white mb-2">바이어 요구사항의 정밀 미러링 (Mirroring)</h6>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    바이어가 문의에서 언급한 특정 단어(예: "Sustainable", "MOQ 500", "Custom Logo")를 견적서 첫 페이지에 그대로 사용하십시오. 이는 바이어로 하여금 "이 제조사는 내 비즈니스를 정확히 이해하고 있다"는 강렬한 첫인상을 줍니다.
                  </p>
                </div>
             </div>
             <div className="group flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all">
                <div className="text-3xl font-black text-blue-500/40 group-hover:text-blue-500 transition-colors">02</div>
                <div>
                  <h6 className="text-lg font-bold text-white mb-2">물류 및 통관 데이터의 선제적 제공</h6>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    대부분의 바이어는 수입 원가를 계산하는 데 많은 시간을 씁니다. 패킹 사이즈, 무게, 컨테이너 적재 수량, 예상 운송 기간(Lead Time)을 데이터 시트 형태로 첨부하십시오. 이 정보가 포함된 견적서는 그렇지 않은 견적서보다 회신율이 300% 높습니다.
                  </p>
                </div>
             </div>
             <div className="group flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all">
                <div className="text-3xl font-black text-blue-500/40 group-hover:text-blue-500 transition-colors">03</div>
                <div>
                  <h6 className="text-lg font-bold text-white mb-2">프로페셔널 컨설팅 제안 (Upselling)</h6>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    바이어가 요청한 제품 외에, 해당 국가 시장 데이터를 기반으로 인기가 급격히 상승 중인 '연관 제품'을 추천하십시오. 단순 판매자가 아닌 '시장 전문가'로서의 가치를 제안할 때 고단가 계약이 성사됩니다.
                  </p>
                </div>
             </div>
          </div>
        </section>

        <section className="p-10 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
             <h6 className="text-blue-500 font-bold mb-4 uppercase text-xs tracking-widest">Case Study</h6>
             <h5 className="text-white font-bold text-xl mb-4">A사: 견적서 구조 변경만으로 계약 전환율 240% 달성</h5>
             <p className="text-sm text-gray-400 leading-relaxed">
               기존의 엑셀 텍스트 위주 견적서에서 '제품 3D 렌더링 + 물류 데이터 시트 + 제조사 인증서'가 포함된 디지털 브로슈어 형태로 변환한 결과, 바이어들의 의사결정 속도가 평균 14일에서 4일로 단축되었습니다.
             </p>
          </div>
          <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center">
             <BarChart3 className="text-blue-500 w-16 h-16 animate-pulse" />
          </div>
        </section>
      </div>
    )
  }
];

const DetailView = ({ report, onClose }: { report: ReportData; onClose: () => void }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => { document.body.style.overflow = 'unset'; clearTimeout(timer); };
    }, []);

    return (
        <div className="fixed inset-0 z-[250] bg-[#050505] overflow-y-auto animate-in fade-in duration-300">
            {isLoading ? (
              <div className="min-h-screen flex items-center justify-center bg-black">
                <HighTechLoader message="Analyzing Deep Trade Intelligence..." />
              </div>
            ) : (
              <div className="relative min-h-screen">
                  {/* Hero Header for Detail */}
                  <div className="relative h-[45vh] md:h-[55vh] w-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-10"></div>
                      <img src={report.image} alt={report.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
                          <button onClick={onClose} className="bg-black/50 backdrop-blur px-5 py-2.5 rounded-full text-white text-sm font-bold border border-white/10 flex items-center gap-2 hover:bg-white/20 transition-all shadow-xl">
                             <ArrowLeft size={16} /> <span>Back to Library</span>
                          </button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-12 max-w-5xl mx-auto">
                          <div className={`inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 text-white ${report.category === 'Live Series' ? 'bg-blue-600 animate-pulse' : 'bg-blue-600'}`}>
                             {report.category}
                          </div>
                          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">{report.title}</h1>
                          <div className="flex flex-wrap gap-2">
                            {report.tags?.map(tag => (
                              <span key={tag} className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 shadow-lg">#{tag}</span>
                            ))}
                          </div>
                      </div>
                  </div>

                  {/* Body Content */}
                  <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
                      <div className="flex items-center gap-4 text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-8">
                         <Calendar size={14} /> <span>Publication: {report.date}</span>
                         <span className="w-1 h-1 rounded-full bg-blue-500 opacity-30"></span>
                         <Clock size={14} /> <span>Read Time: 8 min</span>
                      </div>
                      
                      <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-16 font-medium italic border-l-4 border-blue-600 pl-8">
                        "{report.summary}"
                      </p>
                      
                      <div className="p-1 md:p-2 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 mb-16 shadow-3xl">
                        <div className="bg-[#0f0f0f] rounded-[2.8rem] p-8 md:p-16">
                            {report.content}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        {report.externalLink && (
                           <a href={report.externalLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 active:scale-95">
                              실시간 연재 보러가기 (Threads) <ArrowUpRight size={20} />
                           </a>
                        )}
                        <button onClick={onClose} className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
                          라이브러리로 돌아가기
                        </button>
                      </div>
                  </div>
              </div>
            )}
        </div>
    );
};

const AllReportsView = ({ onClose, onSelect }: { onClose: () => void; onSelect: (report: ReportData) => void }) => {
    return (
        <div className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col p-6 md:p-10 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_#0070f3]"></div>
                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase font-dotlus">Intelligence Library</h2>
                  </div>
                  <p className="text-gray-500 text-sm">실전 무역 사례부터 알리바바닷컴 공식 리포트까지 총망라한 데이터 라이브러리</p>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white p-3 bg-white/5 rounded-full border border-white/5 transition-all"><X size={28} /></button>
            </div>
            
            <div className="overflow-y-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 custom-scrollbar pr-2 pb-16">
                {REPORTS.map((report) => (
                    <div 
                      key={report.id} 
                      onClick={() => onSelect(report)} 
                      className={`p-5 rounded-[2rem] border transition-all group cursor-pointer flex flex-col h-full hover:-translate-y-2 shadow-xl ${report.category === 'Live Series' ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500/50' : 'bg-[#111] border-white/5 hover:border-blue-500/30'}`}
                    >
                        <div className="overflow-hidden rounded-2xl mb-6 aspect-video relative">
                          <img src={report.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                          <div className={`absolute top-3 left-3 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full text-white shadow-lg ${report.category === 'Live Series' ? 'bg-blue-500 animate-pulse' : 'bg-blue-600'}`}>{report.category}</div>
                        </div>
                        <div className="flex-grow space-y-3">
                          <h3 className="font-bold text-white text-base md:text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors leading-tight">{report.title}</h3>
                          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{report.summary}</p>
                        </div>
                        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">{report.date}</span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const InsightCard: React.FC<{ report: ReportData; onClick: () => void }> = ({ report, onClick }) => (
  <div onClick={onClick} className="group cursor-pointer relative bg-[#0f0f0f] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col h-full shadow-2xl hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={report.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className={`absolute top-4 left-4 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full text-white shadow-xl ${report.category === 'Live Series' ? 'bg-blue-600 animate-pulse' : 'bg-blue-600'}`}>
        {report.category}
      </div>
    </div>
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
        <Clock size={12} /> {report.date}
      </div>
      <h4 className="text-lg md:text-xl font-bold text-white mb-6 line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">{report.title}</h4>
      <div className="flex flex-wrap gap-2 mb-8">
        {report.tags?.slice(0, 2).map(tag => (
          <span key={tag} className="text-[9px] font-bold text-gray-500 border border-white/10 px-3 py-1 rounded-full">#{tag}</span>
        ))}
      </div>
      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
        <span className="group-hover:text-white transition-colors">Strategic Report</span>
        <ArrowUpRight size={16} className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  </div>
);

export const InsightToAction: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<ReportData | null>(null);
  const [showAllReports, setShowAllReports] = useState(false);

  // Featured reports for main view
  const mainReports = [REPORTS[0], REPORTS[1], REPORTS[2]];

  return (
    <section id="insight" className="py-24 md:py-40 bg-black relative">
      {selectedReport && <DetailView report={selectedReport} onClose={() => setSelectedReport(null)} />}
      {showAllReports && <AllReportsView onClose={() => setShowAllReports(false)} onSelect={(r) => { setSelectedReport(r); setShowAllReports(false); }} />}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 text-center lg:text-left">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <div className="inline-flex items-center space-x-3 text-blue-500 font-bold tracking-[0.4em] text-[10px] mb-6 uppercase mx-auto lg:mx-0">
                  <BarChart size={16} /> <span>Global Intelligence</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight font-dotlus uppercase">Insight to Action</h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  알리바바닷컴 공식 파트너사의 전문 데이터와 <strong>'@global_biznote'</strong> 스레드의 무역 인사이트를 결합하여<br className="hidden md:block" />
                  귀사의 실질적인 글로벌 진출 성과를 도출합니다.
                </p>
              </div>
              <button 
                onClick={() => setShowAllReports(true)} 
                className="group text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] hover:text-white transition-all flex items-center gap-3 mx-auto md:mx-0 bg-white/5 px-8 py-4 rounded-full border border-white/5 hover:border-blue-500/40 shadow-2xl active:scale-95"
              >
                Intelligence Library ({REPORTS.length}) <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {mainReports.map((report, idx) => (
            <Reveal key={report?.id} delay={idx * 150} className="h-full">
                {report && <InsightCard report={report} onClick={() => setSelectedReport(report)} />}
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
            <div className="mt-24 p-12 md:p-20 rounded-[3.5rem] bg-gradient-to-br from-blue-900/20 via-white/[0.03] to-transparent border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl">
              <div className="max-w-2xl text-center lg:text-left">
                 <h3 className="text-3xl md:text-4xl font-black text-white mb-6 font-dotlus uppercase">데이터 기반의 맞춤형 리포트</h3>
                 <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                   귀사의 품목군과 타겟 국가를 정밀 분석하여, 알리바바 검색 랭킹 최적화 및 바이어 매칭 전략이 포함된 **'글로벌 진입 로드맵'**을 무료로 제안해 드립니다.
                 </p>
              </div>
              <a href="#footer" className="bg-electric-blue text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-blue-500/40 whitespace-nowrap text-lg">
                무료 리포트 신청하기
              </a>
            </div>
        </Reveal>
      </div>
    </section>
  );
};
