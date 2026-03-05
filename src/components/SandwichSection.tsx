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
                <button
                    key={sandwich.id}
                    onClick={() => onItemClick(sandwich)}
                    className="group relative block px-4 py-2 bg-white text-black border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
                >
                    <h3 className="relative z-10 text-sm md:text-base font-medium text-center whitespace-nowrap tracking-tight transition-transform duration-500 group-hover:scale-105">{sandwich.name}</h3>
                </button>
            </div>
        </section>
    );
}
