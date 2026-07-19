
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Decorative Element - Soft glow behind text */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Copy (Occupies 55-60% of width on large screens) */}
        <div className="flex flex-col space-y-8 max-w-3xl text-center lg:text-left animate-fade-in-up lg:w-3/5">
          
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[6.5rem] font-black tracking-tighter leading-[0.95] text-white font-dotlus normal-case">
            <span className="block">Connecting</span>
            <span className="block">
                Local <span className="text-blue-500">DOTS</span> to
            </span>
            <span className="block">
                Global <span className="text-blue-500">LINKS</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-400 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
            도트링크는 국내 기업의 가치를 전 세계 시장에 연결합니다.<br className="hidden md:block" />
            <strong>알리바바닷컴 공식 파트너사</strong>의 전문성과 실무 데이터를 통해<br className="hidden md:block" />
            귀사의 해외 진출을 성공으로 설계합니다.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full sm:w-auto justify-center lg:justify-start">
            <a href="#business" className="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold hover:scale-105 transition-transform text-center shadow-lg shadow-blue-600/20 text-base">
              사업 영역 확인하기
            </a>
          </div>
        </div>
      </div>

      {/* Right Side / Background Visual: Spline animation filling the right space */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full lg:w-[60%] h-full z-0 pointer-events-none select-none">
          {/* Subtle glow behind the spline globe to make it pop */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse"></div>
          
          <iframe 
              src='https://my.spline.design/holographicearthwithdynamiclines-Lr99avvx0OPQAOHEUeUbfHeh/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              style={{ background: 'transparent' }}
              title="Spline Dynamic Earth Visual"
              className="w-full h-full scale-[1.3] md:scale-[1.5] lg:scale-[1.8] opacity-70 translate-x-[15%] lg:translate-x-[20%] transition-opacity duration-1000"
          ></iframe>
      </div>

      {/* Bottom Fade Out for smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/40 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};
