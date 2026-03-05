'use client';

import { useState, useMemo } from 'react';
import { sandwiches } from '@/data/sandwiches';
import TutorialModal from '@/components/TutorialModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SandwichSection from '@/components/SandwichSection';
import { Sandwich } from '@/types/sandwich';

export default function Home() {
  const [selectedSandwich, setSelectedSandwich] = useState<Sandwich | null>(null);

  const burgers = useMemo(() => sandwiches.filter(s => s.type === 'burger'), []);
  const paninis = useMemo(() => sandwiches.filter(s => s.type === 'panini'), []);
  const grilled = useMemo(() => sandwiches.filter(s => s.type === 'grilled'), []);
  const riceRolls = useMemo(() => sandwiches.filter(s => s.type === 'riceRoll'), []);
  const wraps = useMemo(() => sandwiches.filter(s => s.type === 'wrap'), []);

  const handleSandwichClick = (sandwich: Sandwich) => {
    setSelectedSandwich(sandwich);
  };

  const handleCloseModal = () => {
    setSelectedSandwich(null);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* 注意事項框 */}
          <div className="mb-12 p-6 bg-[#f9fbf8] border border-[#5a7a4a]/20 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-[#5a7a4a] mb-4 flex items-center">
              <span className="p-1.5 bg-[#5a7a4a] text-white rounded-lg mr-3 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              套餐餐點注意事項
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start p-3 bg-white rounded-lg border border-[#5a7a4a]/10">
                <span className="text-[#5a7a4a] font-black mr-3 mt-0.5">•</span>
                <p className="text-sm md:text-base leading-relaxed">
                  日出套餐：蛋餅可換口味，價格較高要補差額，厚片可以換其他單一口味
                </p>
              </div>
              <div className="flex items-start p-3 bg-white rounded-lg border border-[#5a7a4a]/10">
                <span className="text-[#5a7a4a] font-black mr-3 mt-0.5">•</span>
                <p className="text-sm md:text-base leading-relaxed">
                  套餐的沙拉、薯條、蛋，可互換，但不能換其他東西（例如：沙拉換薯條）
                </p>
              </div>
            </div>
          </div>

          <SandwichSection title="漢堡系列" items={burgers} onItemClick={handleSandwichClick} />
          <SandwichSection title="帕尼尼系列" items={paninis} onItemClick={handleSandwichClick} />
          <SandwichSection title="厚片焗烤系列" items={grilled} onItemClick={handleSandwichClick} />
          <SandwichSection title="飯卷系列" items={riceRolls} onItemClick={handleSandwichClick} />
          <SandwichSection title="捲餅系列" items={wraps} onItemClick={handleSandwichClick} />
        </div>
      </div>

      <Footer />

      {/* 回到頂部按鈕 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#5a7a4a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 z-50 group"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* 彈出視窗 */}
      {selectedSandwich && (
        <TutorialModal
          sandwich={selectedSandwich}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}