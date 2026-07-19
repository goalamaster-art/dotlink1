
import React from 'react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer id="footer" className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* DotLink Logo: Solid blue circle, NO white dot, with pulsing effect */}
              <div className="w-5 h-5 bg-electric-blue rounded-full animate-logo-pulse"></div>
              <span className="text-2xl font-black uppercase tracking-tighter">DotLink</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              도트링크는 국내 중소기업과 스타트업이 글로벌 시장의 
              주역이 될 수 있도록 데이터와 기술로 지원하는 공식 무역 파트너입니다.
            </p>
            <div className="flex items-center gap-4">
               <a href="https://www.threads.com/@global_biznote" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full bg-white/5">
                  <svg viewBox="0 0 192 192" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 41.705 97.5685 41.705C82.9305 41.705 70.3991 48.6256 63.2851 61.1667C58.8503 54.9244 51.1039 51.0417 42.4271 51.0417C28.2415 51.0417 16.7412 62.5419 16.7412 76.7275C16.7412 90.9131 28.2415 102.413 42.4271 102.413C51.1039 102.413 58.8503 98.5303 63.2851 92.288C63.4244 92.5333 63.5687 92.7758 63.7171 93.0152C71.3039 105.166 85.0116 112.449 100.287 112.449C105.748 112.449 110.978 111.533 115.823 109.805C121.229 119.825 129.627 127.323 139.87 131.621C144.137 133.411 148.674 134.331 153.333 134.331C174.659 134.331 192 117.005 192 95.6791V95.6791C191.99 71.3195 174.316 51.4883 151.066 51.4883C148.455 51.4883 145.922 51.6421 143.469 51.9427C140.403 21.0366 116.725 0 88.6667 0C57.498 0 32.2222 25.2758 32.2222 56.4444V56.4444C32.2222 59.4444 34.6667 61.8889 37.6667 61.8889C40.6667 61.8889 43.1111 59.4444 43.1111 56.4444V56.4444C43.1111 31.2825 63.5048 10.8889 88.6667 10.8889C111.411 10.8889 130.601 27.6094 132.887 52.3211C130.551 52.8856 128.273 53.601 126.069 54.4491C117.307 46.2163 105.589 41.2222 92.6667 41.2222C64.1319 41.2222 41 64.3541 41 92.8889C41 121.424 64.1319 144.556 92.6667 144.556C105.589 144.556 117.307 139.562 126.069 131.329C134.256 134.469 143.179 136.222 152.5 136.222C178.673 136.222 200 114.895 200 88.7222C200 88.3184 199.995 87.9157 199.985 87.514C199.995 87.218 200 86.9208 200 86.6222V86.6222C200 48.2435 168.868 17.1111 130.489 17.1111H130.489C127.489 17.1111 125.044 19.5556 125.044 22.5556C125.044 25.5556 127.489 28 130.489 28H130.489C162.864 28 189.111 54.247 189.111 86.6222V86.6222C189.111 86.8741 189.106 87.1249 189.098 87.3746C189.014 87.5218 188.932 87.6702 188.852 87.8197C181.674 101.213 167.925 110.222 152 110.222C143.684 110.222 135.808 108.016 128.98 104.148C133.585 99.412 137.072 93.6335 139.141 87.2711C139.957 87.6166 140.755 87.9782 141.537 88.9883ZM100.287 101.561C89.5393 101.561 79.8661 96.4215 74.4566 87.8197C74.3314 87.6206 74.2091 87.4194 74.0898 87.216C71.3015 82.4764 69.6667 76.9238 69.6667 71C69.6667 55.6183 82.1287 43.1562 97.5104 43.1562C112.892 43.1562 125.354 55.6183 125.354 71C125.354 77.0622 123.639 82.7214 120.697 87.514C120.573 87.716 120.444 87.9158 120.312 88.1132C114.903 96.5779 105.35 101.561 100.287 101.561Z" transform="translate(-16.7412 -17.1111)"/>
                  </svg>
                  Threads Series
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Our Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>글로벌 B2B 전자상거래 (Alibaba)</li>
              <li>OEM/ODM 위탁제조 및 소싱</li>
              <li>지식재산권(IP) 및 라이선스 관리</li>
              <li>글로벌 비즈노트 (Trade Insight)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>T. 010-2646-1316</li>
              <li>E. info@dotlink.co.kr</li>
              <li 
                onClick={onContactClick}
                className="text-electric-blue font-semibold underline underline-offset-8 decoration-blue-500/30 cursor-pointer hover:text-white transition-colors"
              >
                Partner Inquiry
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="text-[11px] text-gray-500 space-y-2 leading-loose text-left">
            <p><span className="text-gray-400 font-bold mr-2 uppercase tracking-tighter">Company</span> 도트링크 주식회사 (DotLink Co., Ltd.)</p>
            <p><span className="text-gray-400 font-bold mr-2 uppercase tracking-tighter">CEO</span> 권윤안 (Kwon Yoon an)</p>
            <p><span className="text-gray-400 font-bold mr-2 uppercase tracking-tighter">Addr</span> 서울특별시 금천구 가산디지털1로 16, 에이피타워 324호</p>
            <p className="mt-4 opacity-50 italic">© 2024 DotLink Co., Ltd. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="https://www.threads.com/@global_biznote" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Global Biz Note</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
