'use client';

import { sandwiches } from '@/data/sandwiches';
import { useParams, useRouter } from 'next/navigation';

export default function TutorialPage() {
  const router = useRouter();
  const params = useParams();

  const sandwich = sandwiches.find(s => s.id === Number(params.id));

  if (!sandwich) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">找不到此教學</h1>
          <button
            onClick={() => router.push('/')}
            className="text-black hover:text-gray-600"
          >
            返回首頁
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-4">
              {sandwich.name}
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              食材順序
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-black mb-2">底層</h3>
                <div className="text-gray-600">
                  {sandwich.layers.bottom.ingredients.join(' → ')}
                  {sandwich.layers.bottom.sauce && ` → ${sandwich.layers.bottom.sauce}`}
                  {sandwich.layers.bottom.seasoning && ` → ${sandwich.layers.bottom.seasoning}`}
                </div>
              </div>

              {sandwich.layers.middle && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-black mb-2">中層</h3>
                  <div className="text-gray-600">
                    {sandwich.layers.middle.ingredients.join(' → ')}
                    {sandwich.layers.middle.sauce && ` → ${sandwich.layers.middle.sauce}`}
                    {sandwich.layers.middle.seasoning && ` → ${sandwich.layers.middle.seasoning}`}
                  </div>
                </div>
              )}

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-black mb-2">上層</h3>
                <div className="text-gray-600">
                  {sandwich.layers.top.ingredients.join(' → ')}
                  {sandwich.layers.top.sauce && ` → ${sandwich.layers.top.sauce}`}
                  {sandwich.layers.top.seasoning && ` → ${sandwich.layers.top.seasoning}`}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              注意事項
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              {sandwich.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              製作步驟
            </h2>
            <div className="space-y-6">
              {sandwich.steps.map((step, index) => (
                <div key={step.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-black mb-2">
                    步驟 {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  {step.tips && step.tips.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium text-black mb-1">小提示：</h4>
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

      {/* 懸浮返回按鈕 */}
      <button
        onClick={() => router.push('/')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
        aria-label="返回首頁"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
    </div>
  );
} 