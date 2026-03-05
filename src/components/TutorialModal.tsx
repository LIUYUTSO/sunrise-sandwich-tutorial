import { Sandwich } from '@/types/sandwich';
import { useEffect, useState } from 'react';

interface TutorialModalProps {
  sandwich: Sandwich;
  onClose: () => void;
}

export default function TutorialModal({ sandwich, onClose }: TutorialModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // 添加一個小延遲以確保動畫效果正常顯示
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // 等待動畫完成後再關閉
    setTimeout(onClose, 500);
  };

  const handleScroll = () => {
    setIsScrolling(true);
    // 1秒後隱藏滾動條
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClose}
    >
      {/* 背景遮罩 */}
      <div
        className={`fixed inset-0 bg-[#5a7a4a]/80 z-[99] transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={handleClose}
      />

      {/* 內容區域 */}
      <div
        className={`relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-[101] ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
          }`}
        onClick={e => e.stopPropagation()}
        onScroll={handleScroll}
      >
        <style jsx global>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .stagger-item {
            opacity: 0;
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          
          .overflow-y-auto::-webkit-scrollbar {
            width: 10px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: transparent;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: ${isScrolling ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
            border-radius: 4px;
            transition: all 0.3s ease;
            margin-right: 2px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.4);
          }
        `}</style>

        <div className="p-8">
          <div className="flex justify-between items-center mb-10 stagger-item stagger-1">
            <h2 className="text-3xl font-black text-black tracking-tighter uppercase">{sandwich.name}</h2>
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              aria-label="關閉"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-12">
            {/* 食材順序 */}
            <div className="stagger-item stagger-2">
              <h3 className="text-xs font-black text-black/40 uppercase tracking-[0.3em] mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-black/10 mr-4"></span>
                食材順序
              </h3>
              <div className="space-y-4">
                {[
                  { label: '底層', data: sandwich.layers.bottom },
                  { label: '中層', data: sandwich.layers.middle },
                  { label: '上層', data: sandwich.layers.top }
                ].map((layer, idx) => {
                  const data = layer.data;
                  if (!data) return null;

                  return (
                    <div key={idx} className="border-l-2 border-black/5 pl-6 py-1">
                      <h4 className="text-xs font-bold text-black/60 mb-2">{layer.label}</h4>
                      <div className="text-lg text-black/80 font-medium tracking-tight">
                        {data.ingredients.join(' • ')}
                        {data.sauce && <span className="text-black/30 mx-2">/</span>}
                        {data.sauce && <span className="text-black/60 italic">{data.sauce}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 注意事項 */}
            {sandwich.notes.length > 0 && (
              <div className="stagger-item stagger-3">
                <h3 className="text-xs font-black text-black/40 uppercase tracking-[0.3em] mb-6 flex items-center">
                  <span className="w-8 h-[1px] bg-black/10 mr-4"></span>
                  注意事項
                </h3>
                <ul className="space-y-3">
                  {sandwich.notes.map((note, index) => (
                    <li key={index} className="text-base text-black/70 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/10 mt-2 mr-4 flex-shrink-0"></span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 製作步驟 */}
            <div className="stagger-item" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xs font-black text-black/40 uppercase tracking-[0.3em] mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-black/10 mr-4"></span>
                製作步驟
              </h3>
              <div className="space-y-6">
                {sandwich.steps.map((step, index) => (
                  <div key={step.id} className="group border border-black/5 rounded-2xl p-6 hover:bg-black/2 transition-colors duration-500">
                    <div className="flex items-start">
                      <span className="text-3xl font-black text-black/5 mr-6 group-hover:text-black/10 transition-colors">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-black mb-2 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-black/60 text-base leading-relaxed">{step.description}</p>
                        {step.tips && step.tips.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {step.tips.map((tip, tipIndex) => (
                              <span key={tipIndex} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-black/5 text-black/50 rounded-md">
                                {tip}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
      </div >
    </div >
  );
} 