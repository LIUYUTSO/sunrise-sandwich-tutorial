'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md text-white py-4 z-50 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter uppercase">
            日出而作
          </h1>
          <p className="text-xs text-gray-400 tracking-[0.3em] font-medium uppercase">
            SUNRISE BRUNCH
          </p>
        </div>
      </div>
    </header>
  );
} 