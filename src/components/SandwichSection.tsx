import { Sandwich } from '@/types/sandwich';

interface SandwichSectionProps {
    title: string;
    items: Sandwich[];
    onItemClick: (sandwich: Sandwich) => void;
}

export default function SandwichSection({ title, items, onItemClick }: SandwichSectionProps) {
    if (items.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center justify-center mb-6">
                <h2 className="text-2xl font-bold text-black relative">
                    {title}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#5a7a4a]"></span>
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((sandwich) => (
                    <button
                        key={sandwich.id}
                        onClick={() => onItemClick(sandwich)}
                        className="group relative block px-4 py-4 bg-white text-black border border-black/5 rounded-2xl hover:bg-[#5a7a4a] hover:text-white hover:border-transparent transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl active:scale-95 active:shadow-md overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h3 className="relative z-10 text-sm md:text-base font-bold text-center tracking-tight transition-transform duration-300 group-hover:scale-105">{sandwich.name}</h3>
                    </button>
                ))}
            </div>
        </section>
    );
}
