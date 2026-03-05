import { Sandwich } from '@/types/sandwich';
import { useEffect, useState, useCallback } from 'react';

interface TutorialModalProps {
  sandwich: Sandwich;
  onClose: () => void;
}

export default function TutorialModal({ sandwich, onClose }: TutorialModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 400); // Wait for transition
  }, [onClose]);

  const handleScroll = () => {
    setIsScrolling(true);
    const timer = setTimeout(() => setIsScrolling(false), 800);
    return () => clearTimeout(timer);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={handleClose}
    >
      {/* 背景遮罩 */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
        onClick={handleClose}
      />

      {/* 內容區域 */}
      <div
        className={`relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto transform transition-all duration-500 ease-out z-[101] shadow-2xl ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
          }`}
        onClick={e => e.stopPropagation()}
        onScroll={handleScroll}
      >
        <style jsx global>{`
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: transparent;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: ${isScrolling ? 'rgba(90, 122, 74, 0.4)' : 'transparent'};
            border-radius: 10px;
            transition: background-color 0.3s ease;
          }
        `}</style>

        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="inline-block px-3 py-1 bg-[#5a7a4a]/10 text-[#5a7a4a] text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
                {sandwich.type}
              </span>
              <h2 className="text-3xl font-black text-gray-900">{sandwich.name}</h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-gray-100 text-gray-400 hover:bg-black hover:text-white transition-all duration-200"
              aria-label="關閉"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid gap-8">
            {/* 食材順序 */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 h-6 bg-[#5a7a4a] rounded-full mr-3"></span>
                食材順序
              </h3>
              <div className="space-y-3">
                {[
                  { label: '底層', data: sandwich.layers.bottom },
                  { label: '中層', data: sandwich.layers.middle },
                  { label: '上層', data: sandwich.layers.top }
                ].map((layer, idx) => {
                  const data = layer.data;
                  if (!data) return null;

                  return (
                    <div key={idx} className="group p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#5a7a4a]/30 transition-colors">
                      <h4 className="text-xs font-black text-[#5a7a4a] mb-2 uppercase tracking-widest">{layer.label}</h4>
                      <div className="text-gray-700 flex flex-wrap items-center gap-2">
                        {data.ingredients.map((ing, i) => (
                          <span key={i} className="flex items-center">
                            {ing}{i < data.ingredients.length - 1 && <span className="mx-2 text-gray-300">→</span>}
                          </span>
                        ))}
                        {data.sauce && (
                          <span className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-sm font-medium">
                            <span className="mr-1 opacity-50">/</span> {data.sauce}
                          </span>
                        )}
                        {data.seasoning && (
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-sm font-medium">
                            <span className="mr-1 opacity-50">/</span> {data.seasoning}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 注意事項 */}
            {sandwich.notes.length > 0 && (
              <section className="p-5 bg-amber-50 rounded-2xl border border-amber-100">
                <h3 className="text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  製作重點
                </h3>
                <ul className="space-y-2">
                  {sandwich.notes.map((note, index) => (
                    <li key={index} className="text-sm text-amber-900/80 flex items-start">
                      <span className="mr-2 text-amber-500">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 製作步驟 */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 h-6 bg-[#5a7a4a] rounded-full mr-3"></span>
                製作步驟
              </h3>
              <div className="space-y-4">
                {sandwich.steps.map((step, index) => (
                  <div key={step.id} className="relative pl-8 pb-4 last:pb-0 border-l-2 border-gray-100 last:border-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#5a7a4a] z-10" />
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 mb-1 leading-none">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 mt-2">{step.description}</p>
                      {step.tips && step.tips.length > 0 && (
                        <div className="grid grid-cols-1 gap-2">
                          {step.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="bg-green-50/50 p-2 rounded-lg text-xs text-green-700 flex items-center">
                              <span className="mr-2 rotate-12">💡</span>
                              {tip}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 