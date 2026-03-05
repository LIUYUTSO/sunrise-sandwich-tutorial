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
                        className="group block px-4 py-2 bg-white text-black border border-black rounded-full hover:bg-[#5a7a4a] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <h3 className="text-sm md:text-base font-medium text-center whitespace-nowrap">{sandwich.name}</h3>
                    </button>
                ))}
            </div>
        </section>
    );
}
