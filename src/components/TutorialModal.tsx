import { Sandwich } from '@/types/sandwich';
import { useEffect, useState } from 'react';

interface TutorialModalProps {
  sandwich: Sandwich;
  onClose: () => void;
}

export default function TutorialModal({ sandwich, onClose }: TutorialModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1); // -1 means showing ingredients and notes

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

            {/* 動態內容區域：食材與注意事項 或 單一製作步驟 */}
            <div className="stagger-item min-h-[300px]" style={{ animationDelay: '0.4s' }}>
              {currentStepIndex === -1 ? (
                <div className="animate-fade-in-up">
                  <div className="flex items-center justify-center h-full flex-col py-10">
                    <div className="w-16 h-16 bg-[#5a7a4a]/10 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-[#5a7a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">準備開始製作</h3>
                    <p className="text-gray-500 text-center max-w-sm mb-8">請先確認所有食材準備就緒，並詳細閱讀注意事項。</p>
                  </div>
                </div>
              ) : (
                <div key={currentStepIndex} className="animate-fade-in-up">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-black text-black/40 uppercase tracking-[0.3em] flex items-center">
                      <span className="w-8 h-[1px] bg-black/10 mr-4"></span>
                      步驟 {currentStepIndex + 1} / {sandwich.steps.length}
                    </h3>

                    {/* 進度條 */}
                    <div className="w-1/3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#5a7a4a] transition-all duration-500 ease-out"
                        style={{ width: `${((currentStepIndex + 1) / sandwich.steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-[#5a7a4a]/10 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500">
                    <div className="flex items-start">
                      <span className="text-5xl font-black text-[#5a7a4a]/10 mr-8 font-serif italic">
                        {(currentStepIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                          {sandwich.steps[currentStepIndex].title}
                        </h4>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {sandwich.steps[currentStepIndex].description}
                        </p>

                        {sandwich.steps[currentStepIndex].tips && sandwich.steps[currentStepIndex].tips.length > 0 && (
                          <div className="bg-[#5a7a4a]/5 rounded-xl p-4 border border-[#5a7a4a]/10">
                            <h5 className="text-xs font-bold text-[#5a7a4a] uppercase tracking-wider mb-3 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              小提示
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {sandwich.steps[currentStepIndex].tips.map((tip, tipIndex) => (
                                <span key={tipIndex} className="text-xs font-medium px-3 py-1.5 bg-white text-gray-700 border border-gray-200 rounded-lg shadow-sm">
                                  {tip}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 控制按鈕 */}
            <div className="stagger-item flex items-center justify-between pt-6 border-t border-gray-100" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => setCurrentStepIndex(prev => Math.max(-1, prev - 1))}
                disabled={currentStepIndex === -1}
                className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center transition-all duration-300 ${
                  currentStepIndex === -1
                    ? 'opacity-0 invisible'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                上一步
              </button>

              <button
                onClick={() => {
                  if (currentStepIndex < sandwich.steps.length - 1) {
                    setCurrentStepIndex(prev => prev + 1);
                  } else {
                    handleClose();
                  }
                }}
                className={`px-8 py-3 rounded-xl font-bold text-sm flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  currentStepIndex === sandwich.steps.length - 1
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-[#5a7a4a] text-white hover:bg-[#4a653d]'
                }`}
              >
                {currentStepIndex === -1 ? '開始製作' : currentStepIndex === sandwich.steps.length - 1 ? '完成' : '下一步'}
                {currentStepIndex !== sandwich.steps.length - 1 && (
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 