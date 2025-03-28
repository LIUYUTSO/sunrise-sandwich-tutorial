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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* 背景遮罩 */}
      <div 
        className={`absolute inset-0 bg-black/70 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 內容區域 */}
      <div 
        className={`relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
        }`}
        onClick={e => e.stopPropagation()}
        onScroll={handleScroll}
      >
        <style jsx global>{`
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
          .overflow-y-auto::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            background: ${isScrolling ? 'rgba(0, 0, 0, 0.1)' : 'transparent'};
            transition: background-color 0.3s ease;
          }
        `}</style>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">{sandwich.name}</h2>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              aria-label="關閉"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {/* 食材順序 */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">食材順序</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-black mb-2">底層</h4>
                  <div className="text-gray-600">
                    {sandwich.layers.bottom.ingredients.join(' → ')}
                    {sandwich.layers.bottom.sauce && ` → ${sandwich.layers.bottom.sauce}`}
                    {sandwich.layers.bottom.seasoning && ` → ${sandwich.layers.bottom.seasoning}`}
                  </div>
                </div>

                {sandwich.layers.middle && (
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-black mb-2">中層</h4>
                    <div className="text-gray-600">
                      {sandwich.layers.middle.ingredients.join(' → ')}
                      {sandwich.layers.middle.sauce && ` → ${sandwich.layers.middle.sauce}`}
                      {sandwich.layers.middle.seasoning && ` → ${sandwich.layers.middle.seasoning}`}
                    </div>
                  </div>
                )}

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-black mb-2">上層</h4>
                  <div className="text-gray-600">
                    {sandwich.layers.top.ingredients.join(' → ')}
                    {sandwich.layers.top.sauce && ` → ${sandwich.layers.top.sauce}`}
                    {sandwich.layers.top.seasoning && ` → ${sandwich.layers.top.seasoning}`}
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            {sandwich.notes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">注意事項</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {sandwich.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 製作步驟 */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">製作步驟</h3>
              <div className="space-y-4">
                {sandwich.steps.map((step, index) => (
                  <div key={step.id} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-black mb-2">
                      步驟 {index + 1}: {step.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    {step.tips && step.tips.length > 0 && (
                      <div className="mt-2">
                        <h5 className="font-medium text-black mb-1">小提示：</h5>
                        <ul className="list-disc list-inside text-gray-600">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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