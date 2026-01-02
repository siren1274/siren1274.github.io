import { BookOpen, Heart, Compass, Zap, Lightbulb, Users } from 'lucide-react';
import { Card } from './ui/card';

const categories = [
  { name: 'Fiction', icon: BookOpen, color: 'bg-[#2E2E4E]/10 text-[#2E2E4E]' },
  { name: 'Romance', icon: Heart, color: 'bg-[#742C36]/10 text-[#742C36]' },
  { name: 'Adventure', icon: Compass, color: 'bg-[#3E5641]/10 text-[#3E5641]' },
  { name: 'Thriller', icon: Zap, color: 'bg-[#5C2E5C]/10 text-[#5C2E5C]' },
  { name: 'Self-Help', icon: Lightbulb, color: 'bg-[#3F5461]/10 text-[#3F5461]' },
  { name: 'Biography', icon: Users, color: 'bg-[#742C36]/10 text-[#742C36]' },
];

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

export function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <section className="py-12 bg-[#5C2E5C] border-b-2 border-[#C1CFD6]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8 text-center text-white">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#C1CFD6] hover:border-white bg-[#3E5641]"
                onClick={() => onCategoryClick(category.name)}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`p-4 rounded-full border-2 border-white bg-white ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-white">{category.name}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}