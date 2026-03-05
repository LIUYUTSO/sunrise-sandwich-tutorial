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
          <div className="mb-20 p-8 md:p-10 bg-white border border-black/[0.03] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5a7a4a]/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />
            <h3 className="text-xs font-black text-[#5a7a4a] uppercase tracking-[0.3em] mb-8 flex items-center">
              <span className="w-10 h-[1px] bg-[#5a7a4a]/20 mr-4"></span>
              套餐餐點注意事項
            </h3>
            <div className="space-y-6">
              {[
                "日出套餐：蛋餅可換口味，價格較高要補差額，厚片可以換其他單一口味",
                "套餐的沙拉、薯條、蛋，可互換，但不能換其他東西（例如：沙拉換薯條）"
              ].map((note, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-lg font-black text-black/10 mr-6 mt-[-4px]">{(i + 1).toString().padStart(2, '0')}</span>
                  <p className="text-black/70 text-base md:text-lg leading-relaxed font-medium tracking-tight">
                    {note}
                  </p>
                </div>
              ))}
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