'use client';

export default function Header() {
  return (
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
  );
} 