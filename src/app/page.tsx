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
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'burger', name: '漢堡' },
    { id: 'panini', name: '帕尼尼' },
    { id: 'grilled', name: '厚片焗烤' },
    { id: 'riceRoll', name: '飯卷' },
    { id: 'wrap', name: '捲餅' },
  ];

  const filteredSandwiches = useMemo(() => {
    return sandwiches.filter(sandwich => {
      // 1. Check category
      if (activeCategory !== 'all' && sandwich.type !== activeCategory) {
        return false;
      }

      // 2. Check search term
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchesName = sandwich.name.toLowerCase().includes(term);

        // Search in ingredients
        const bottomIngredients = sandwich.layers.bottom.ingredients.join(' ').toLowerCase();
        const middleIngredients = sandwich.layers.middle?.ingredients.join(' ').toLowerCase() || '';
        const topIngredients = sandwich.layers.top.ingredients.join(' ').toLowerCase();

        const matchesIngredients =
          bottomIngredients.includes(term) ||
          middleIngredients.includes(term) ||
          topIngredients.includes(term);

        return matchesName || matchesIngredients;
      }

      return true;
    });
  }, [searchTerm, activeCategory]);

  const burgers = useMemo(() => filteredSandwiches.filter(s => s.type === 'burger'), [filteredSandwiches]);
  const paninis = useMemo(() => filteredSandwiches.filter(s => s.type === 'panini'), [filteredSandwiches]);
  const grilled = useMemo(() => filteredSandwiches.filter(s => s.type === 'grilled'), [filteredSandwiches]);
  const riceRolls = useMemo(() => filteredSandwiches.filter(s => s.type === 'riceRoll'), [filteredSandwiches]);
  const wraps = useMemo(() => filteredSandwiches.filter(s => s.type === 'wrap'), [filteredSandwiches]);

  const handleSandwichClick = (sandwich: Sandwich) => {
    setSelectedSandwich(sandwich);
  };

  const handleCloseModal = () => {
    setSelectedSandwich(null);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 導航與搜尋列 */}
      <div className="sticky top-[64px] z-40 bg-white/90 backdrop-blur-md border-b border-black/5 pb-4 pt-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* 搜尋列 */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#5a7a4a] focus:border-transparent transition-all duration-300 sm:text-sm"
                placeholder="搜尋餐點名稱或食材 (例如：鮪魚、起司)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* 分類標籤 */}
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#5a7a4a] text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* 搜尋結果提示 */}
          {searchTerm && (
            <div className="mb-8 text-center text-gray-500 text-sm">
              找到 {filteredSandwiches.length} 個與「<span className="font-bold text-gray-800">{searchTerm}</span>」相關的餐點
            </div>
          )}

          {filteredSandwiches.length === 0 && (
            <div className="py-20 text-center">
              <svg className="mx-auto h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900">找不到相符的餐點</h3>
              <p className="mt-1 text-gray-500">請嘗試使用其他關鍵字搜尋，或選擇「全部」分類。</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="mt-6 px-4 py-2 bg-[#5a7a4a] text-white rounded-lg hover:bg-[#4a653d] transition-colors"
              >
                清除搜尋條件
              </button>
            </div>
          )}

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