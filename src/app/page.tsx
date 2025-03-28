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
              SUNRISE
            </p>
          </div>
        </div>
      </header>
      
      {/* 主要內容 */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* 漢堡系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                漢堡系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {burgers.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-base font-medium text-center">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 帕尼尼系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                帕尼尼系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {paninis.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-base font-medium text-center">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 厚片焗烤系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                厚片焗烤系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {grilled.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-base font-medium text-center">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 飯卷系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                飯卷系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {riceRolls.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-base font-medium text-center">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>

          {/* 捲餅系列 */}
          <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl font-bold text-black relative">
                捲餅系列
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wraps.map((sandwich) => (
                <button 
                  key={sandwich.id} 
                  onClick={() => handleSandwichClick(sandwich)}
                  className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-base font-medium text-center">{sandwich.name}</h3>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 頁尾 */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">關於我們</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                日出而作，為您提供最優質的早餐體驗。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">營業時間</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                週一至週五：06:00 - 14:00<br />
                週六至週日：06:30 - 14:30
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">關注我們</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">FB</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">IG</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} 日出而作. All rights reserved.</p>
          </div>
        </div>
      </footer>

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