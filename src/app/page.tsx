'use client';

import { useState } from 'react';
import { sandwiches } from '@/data/sandwiches';
import TutorialModal from '@/components/TutorialModal';
import { Sandwich } from '@/types/sandwich';

export default function Home() {
  const [selectedSandwich, setSelectedSandwich] = useState<Sandwich | null>(null);
  const burgers = sandwiches.filter(s => s.type === 'burger');
  const paninis = sandwiches.filter(s => s.type === 'panini');
  const grilled = sandwiches.filter(s => s.type === 'grilled');
  const riceRolls = sandwiches.filter(s => s.type === 'riceRoll');
  const wraps = sandwiches.filter(s => s.type === 'wrap');

  const handleSandwichClick = (sandwich: Sandwich) => {
    setSelectedSandwich(sandwich);
  };

  const handleCloseModal = () => {
    setSelectedSandwich(null);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 頁首 */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white py-4 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black tracking-tight">
              日出而作
            </h1>
            <p className="text-lg text-gray-300 tracking-widest font-light">
              SUNRISE BRUNCH
            </p>
          </div>
        </div>
      </header>
      
      {/* 主要內容 */}
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

          {/* 漢堡系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                漢堡系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5a7a4a]"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {burgers.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-sm md:text-base font-medium text-center whitespace-nowrap">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 帕尼尼系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                帕尼尼系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5a7a4a]"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {paninis.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-sm md:text-base font-medium text-center whitespace-nowrap">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 厚片焗烤系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                厚片焗烤系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5a7a4a]"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {grilled.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-sm md:text-base font-medium text-center whitespace-nowrap">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 飯卷系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                飯卷系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5a7a4a]"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {riceRolls.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-sm md:text-base font-medium text-center whitespace-nowrap">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 捲餅系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                捲餅系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5a7a4a]"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wraps.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-sm md:text-base font-medium text-center whitespace-nowrap">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 頁尾 */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Follow us</h3>
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com/jvbon2017.11.1/?locale=zh_TW" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/sunrise_brunch/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} 日出而作. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 回到頂部按鈕 */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-10 h-10 bg-[#5a7a4a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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