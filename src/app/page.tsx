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
          <div className="mb-12 p-4 md:p-6 bg-white border border-[#5a7a4a] rounded-lg">
            <h3 className="text-base md:text-lg font-bold text-[#5a7a4a] mb-3 md:mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              套餐餐點注意事項
            </h3>
            <div className="space-y-2 md:space-y-3 text-gray-700">
              <p className="flex items-start text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide">
                <span className="text-[#5a7a4a] font-medium mr-2 flex-shrink-0">•</span>
                <span className="flex-1">日出套餐：蛋餅可換口味，價格較高要補差額，厚片可以換其他單一口味</span>
              </p>
              <p className="flex items-start text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide">
                <span className="text-[#5a7a4a] font-medium mr-2 flex-shrink-0">•</span>
                <span className="flex-1">套餐的沙拉、薯條、蛋，可互換，但不能換其他東西（例如：沙拉換薯條）</span>
              </p>
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