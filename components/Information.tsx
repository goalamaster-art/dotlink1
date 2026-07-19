
import React from 'react';
import { Globe, Database, Activity, Search, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const Information: React.FC = () => {
  return (
    <section id="info" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal>
              <div className="text-center lg:text-left">
                <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Global Business Data</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1] font-dotlus">
                  데이터가 보여주는<br />
                  <span className="text-blue-500">정교한 진출 경로.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-12 font-medium">
                  수만 건의 글로벌 무역 데이터와 바이어 검색 패턴을 분석합니다. 
                  막연한 추측이 아닌, 실제 거래 지표를 통해 귀사의 제품이 가장 높게 평가받을 수 있는 시장을 연결합니다.
                </p>

                <div className="grid grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-black text-white italic">4,500+</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Buyers Linked</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-black text-blue-500 italic">210+</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Countries Covered</div>
                    </div>
                </div>
              </div>
          </Reveal>

          <Reveal delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-[#0a0a0a] border border-white/5 p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
                    
                    {/* Orbit Ring 1 */}
                    <div className="absolute w-[80%] h-[80%] border border-blue-500/10 rounded-full animate-orbit">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full glow-blue"></div>
                    </div>

                    <div className="relative z-10 w-full flex flex-col items-center space-y-12">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 backdrop-blur-md">
                                <Database size={24} />
                            </div>
                            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_60px_rgba(0,112,243,0.4)] animate-logo-pulse">
                                <Globe size={40} />
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 backdrop-blur-md">
                                <Activity size={24} />
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className="text-4xl font-black text-white mb-2 tracking-tighter italic font-dotlus">Global Network</h3>
                            <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.35em]">Verified Buyer Matching</div>
                        </div>

                        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                            <ShieldCheck size={16} className="text-blue-500" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Official Partner Certified Data</span>
                        </div>
                    </div>
                </div>
              </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
