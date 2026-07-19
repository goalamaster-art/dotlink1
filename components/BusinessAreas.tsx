
import React, { useState, useEffect } from 'react';
import { Globe, Target, ShieldCheck, ArrowLeft, CheckCircle2, X, Mail, Phone, Building2, User } from 'lucide-react';
import { Reveal } from './Reveal';
import { HighTechLoader } from './Loading';

// --- Data Types & Content (Simplified for brevity) ---
interface ServiceDetail {
  title: string;
  description: string;
}

interface BusinessArea {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  heroImage: string;
  detailedDescription: string;
  services: ServiceDetail[];
  processSteps: { step: string; title: string; desc: string }[];
}

const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: 'b2b',
    icon: <Globe size={32} />,
    title: "Global B2B Platform",
    subtitle: "Alibaba.com Official Partner",
    description: "알리바바닷컴 공식 파트너사의 전문성으로 글로벌 시장 접점 극대화 및 스토어 최적화를 보장합니다.",
    features: ["입점 및 운영 대행", "스토어 키워드 최적화", "데이터 기반 랭킹 관리"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    detailedDescription: "도트링크는 알리바바닷컴의 공식 글로벌 파트너로서, 복잡한 B2B 전자상거래 입점 절차부터 성공적인 안착을 위한 운영 대행까지 원스톱 솔루션을 제공합니다.",
    services: [
      { title: "GGS 입점 컨설팅", description: "기업의 제품군과 타겟 시장에 최적화된 Global Gold Supplier 멤버십 등급을 제안합니다." },
      { title: "스토어 최적화", description: "바이어의 구매 심리를 자극하는 Minisite 디자인과 제품 상세 페이지를 제작합니다." },
      { title: "키워드 광고 운영", description: "AI 기반 키워드 분석으로 고효율 저비용의 광고 캠페인을 집행합니다." },
      { title: "스타 등급 관리", description: "알고리즘 최적화로 스토어 등급을 상위권으로 유지하여 노출을 높입니다." }
    ],
    processSteps: [
      { step: "01", title: "시장 분석", desc: "국가 및 경쟁사 분석" },
      { step: "02", title: "입점 세팅", desc: "스토어 구축 및 등록" },
      { step: "03", title: "마케팅", desc: "광고 및 프로모션" },
      { step: "04", title: "분석", desc: "전략 수정 및 리포트" }
    ]
  },
  {
    id: 'trade',
    icon: <Target size={32} />,
    title: "Trade & Sourcing",
    subtitle: "AI Based Matching",
    description: "무역 중개 및 바이어 매칭: AI 데이터 분석을 통한 정교한 타겟 바이어 발굴 및 위탁제조 소싱 대행을 수행합니다.",
    features: ["OEM/ODM 위탁제조 관리", "정교한 타겟 바이어 매칭", "글로벌 소싱 솔루션"],
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000",
    detailedDescription: "수만 건의 무역 데이터를 학습한 AI 엔진을 통해 귀사의 제품을 필요로 하는 바이어를 발굴하고 검증된 제조 네트워크를 연결합니다.",
    services: [
      { title: "AI 타겟 매칭", description: "HS Code 및 거래 이력을 기반으로 구매 확률이 높은 바이어 리스트를 추출합니다." },
      { title: "글로벌 소싱 대행", description: "최적의 단가와 품질을 갖춘 해외 공급처를 발굴하고 통관까지 지원합니다." },
      { title: "OEM/ODM 관리", description: "엄격한 공장 실사를 거친 제조 파트너와 연결하며 양산 품질을 감독합니다." },
      { title: "물류 대행", description: "복잡한 무역 서류 작성과 최적의 물류 루트 설계를 지원합니다." }
    ],
    processSteps: [
      { step: "01", title: "니즈 파악", desc: "요구사항 정의" },
      { step: "02", title: "매칭", desc: "AI 기반 후보군 선별" },
      { step: "03", title: "협상", desc: "조건 조율 및 계약" },
      { step: "04", title: "운송", desc: "통관 및 물류" }
    ]
  },
  {
    id: 'branding',
    icon: <ShieldCheck size={32} />,
    title: "Global Branding",
    subtitle: "IP & Market Entry",
    description: "시장 조사부터 브랜드 현지화 전략, 지식재산권(IP) 및 라이선스 관리까지 해외 시장 안착을 위한 솔루션을 제공합니다.",
    features: ["지식재산권(IP) 관리", "브랜드 현지화 전략", "글로벌 마케팅 최적화"],
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    detailedDescription: "현지 법규와 문화를 고려한 브랜딩 전략을 수립하고 지식재산권을 보호하여 브랜드의 글로벌 자생력을 강화합니다.",
    services: [
      { title: "해외 IP 출원", description: "주요 수출국 내 상표 검색 및 출원을 대행하여 브랜드 도용 리스크를 차단합니다." },
      { title: "브랜드 로컬라이제이션", description: "현지 문화에 맞는 네이밍과 디자인 개발로 소비자 친밀도를 높입니다." },
      { title: "인증 획득 지원", description: "FDA, CPNP, HALAL 등 필수 인증 획득을 위한 컨설팅을 지원합니다." },
      { title: "온/오프라인 마케팅", description: "현지 인플루언서 마케팅 등 옴니채널 전략을 실행합니다." }
    ],
    processSteps: [
      { step: "01", title: "현황 진단", desc: "브랜드 자산 분석" },
      { step: "02", title: "전략 수립", desc: "국가별 진입 로드맵" },
      { step: "03", title: "실행", desc: "출원 및 마케팅" },
      { step: "04", title: "모니터링", desc: "권리 보호 및 대응" }
    ]
  }
];

const ConsultingOverlay = ({ area, onClose }: { area: BusinessArea; onClose: () => void }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const recipient = "info@dotlink.co.kr";
        const subject = `[Consulting Inquiry] ${area.title} - ${formData.company}`;
        const body = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    if (isSubmitted) {
        return (
            <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
                <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-md p-8 text-center shadow-2xl relative animate-fade-in-scale">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                    <button onClick={onClose} className="w-full bg-white text-black font-bold py-3 rounded-xl mt-4">Close</button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl relative flex flex-col max-h-[90vh] animate-fade-in-scale">
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#111] rounded-t-2xl">
                    <h3 className="text-xl font-bold text-white">Get Started</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={20} /></button>
                </div>
                <div className="overflow-y-auto p-6 space-y-4 custom-scrollbar">
                     <form id="consulting-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500/50 outline-none transition-all" placeholder="Name" />
                             <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500/50 outline-none transition-all" placeholder="Company" />
                        </div>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500/50 outline-none transition-all" placeholder="Email" />
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-blue-500/50 outline-none transition-all" placeholder="Phone" />
                        <textarea required rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white resize-none focus:border-blue-500/50 outline-none transition-all" placeholder="Message"></textarea>
                     </form>
                </div>
                <div className="p-6 border-t border-white/10">
                     <button form="consulting-form" type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.98]">Submit Request</button>
                </div>
            </div>
        </div>
    );
}

const BusinessCard: React.FC<{ area: BusinessArea; onClick: () => void }> = ({ area, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative p-6 md:p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer hover:-translate-y-2 shadow-lg"
  >
    <div className="mb-6 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
      {area.icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{area.title}</h3>
    <div className="text-[9px] md:text-[10px] font-bold text-blue-500 mb-4 uppercase tracking-[0.2em]">{area.subtitle}</div>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
      {area.description}
    </p>
    <ul className="space-y-2 mb-6 border-t border-white/5 pt-6">
      {area.features.map((f, i) => (
        <li key={i} className="flex items-center text-[11px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
          <span className="w-1 h-1 rounded-full bg-blue-500 mr-2 group-hover:scale-125 transition-transform"></span>
          {f}
        </li>
      ))}
    </ul>
    <div className="flex items-center text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
      View Details
    </div>
  </div>
);

const BusinessDetailView: React.FC<{ area: BusinessArea; onClose: () => void }> = ({ area, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => { 
          document.body.style.overflow = 'unset';
          clearTimeout(timer);
        };
    }, []);

    const [showConsulting, setShowConsulting] = useState(false);

    return (
        <div className="fixed inset-0 z-[150] bg-[#050505] overflow-y-auto animate-in fade-in duration-300">
            {showConsulting && <ConsultingOverlay area={area} onClose={() => setShowConsulting(false)} />}
            {isLoading ? (
              <div className="min-h-screen flex items-center justify-center bg-black">
                <HighTechLoader message={`Retrieving ${area.title} Strategy...`} />
              </div>
            ) : (
              <div className="animate-fade-in-scale">
                  <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5">
                      <button onClick={onClose} className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 font-bold text-sm hover:bg-white/20 transition-all">
                          <ArrowLeft size={16} /> <span>Back</span>
                      </button>
                  </div>
                  <div className="pt-24 pb-20">
                      <div className="max-w-7xl mx-auto px-6">
                          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
                              <div className="text-center lg:text-left">
                                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{area.title}</h1>
                                  <p className="text-base md:text-lg text-gray-300 mb-8 border-l-4 border-blue-500 pl-4 md:pl-6 text-left">{area.detailedDescription}</p>
                                  <button onClick={() => setShowConsulting(true)} className="bg-white text-black px-8 py-4 rounded-xl font-bold w-full sm:w-auto hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/10">Contact Consulting</button>
                              </div>
                              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video lg:aspect-square">
                                  <img src={area.heroImage} alt={area.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                          </div>
                      </div>
                      <div className="bg-[#0a0a0a] py-16 md:py-20 border-y border-white/5">
                          <div className="max-w-7xl mx-auto px-6">
                              <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center">Services</h2>
                              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                  {area.services.map((service, idx) => (
                                      <div key={idx} className="bg-[#111] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
                                          <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
                                          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{service.description}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            )}
        </div>
    );
}

export const BusinessAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<BusinessArea | null>(null);

  return (
    <section id="business" className="py-20 md:py-32 bg-black relative">
      {selectedArea && <BusinessDetailView area={selectedArea} onClose={() => setSelectedArea(null)} />}
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
            <div className="mb-12 md:mb-20 text-center lg:text-left">
              <div className="w-12 h-1 bg-electric-blue mb-6 md:mb-8 mx-auto lg:mx-0"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Core Business</h2>
              <p className="text-gray-500 max-w-2xl text-base md:text-lg">
                도트링크는 3가지 핵심 비즈니스 영역을 통해<br className="hidden sm:block" />
                국내 기업의 글로벌 시장 진출과 성장을 통합적으로 지원합니다.
              </p>
            </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BUSINESS_AREAS.map((area, index) => (
            <Reveal key={area.id} delay={index * 150} className="h-full">
                <BusinessCard area={area} onClick={() => setSelectedArea(area)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
