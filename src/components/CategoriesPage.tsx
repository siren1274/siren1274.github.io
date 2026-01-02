import { BookOpen, Heart, Compass, Zap, Lightbulb, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Book } from './BookCard';

const categories = [
  { 
    name: 'Fiction', 
    icon: BookOpen, 
    color: 'bg-[#2E2E4E]',
    description: 'Explore imaginary worlds and compelling stories that transport you to different realities.',
    bookCount: 1247
  },
  { 
    name: 'Romance', 
    icon: Heart, 
    color: 'bg-[#742C36]',
    description: 'Discover heartwarming tales of love, passion, and relationships that touch the soul.',
    bookCount: 856
  },
  { 
    name: 'Adventure', 
    icon: Compass, 
    color: 'bg-[#3E5641]',
    description: 'Embark on thrilling journeys filled with excitement, danger, and discovery.',
    bookCount: 623
  },
  { 
    name: 'Thriller', 
    icon: Zap, 
    color: 'bg-[#5C2E5C]',
    description: 'Experience edge-of-your-seat suspense with mysterious plots and unexpected twists.',
    bookCount: 734
  },
  { 
    name: 'Self-Help', 
    icon: Lightbulb, 
    color: 'bg-[#3F5461]',
    description: 'Transform your life with practical guidance for personal growth and development.',
    bookCount: 492
  },
  { 
    name: 'Biography', 
    icon: Users, 
    color: 'bg-[#742C36]',
    description: 'Learn from the lives of remarkable individuals who shaped our world.',
    bookCount: 381
  },
];

interface CategoriesPageProps {
  onCategorySelect: (category: string) => void;
  onNavigateHome: () => void;
  books: Book[];
}

export function CategoriesPage({ onCategorySelect, onNavigateHome, books }: CategoriesPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#5C2E5C] border-b-2 border-[#C1CFD6] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl text-white">
              Browse All Categories
            </h1>
            <p className="text-xl text-[#C1CFD6]">
              Discover books across all genres and find your perfect read
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const categoryBooks = books.filter(book => book.category === category.name);
            
            return (
              <Card
                key={category.name}
                className="border-2 border-[#C1CFD6] overflow-hidden hover:border-[#5C2E5C] transition-colors"
              >
                {/* Category Header */}
                <div className={`${category.color} p-6 border-b-2 border-[#C1CFD6]`}>
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-full bg-white border-2 border-white">
                      <Icon className="w-8 h-8 text-[#2E2E4E]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-white text-2xl">
                        {category.name}
                      </h2>
                      <p className="text-white/80 text-sm">
                        {category.bookCount} books available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category Description */}
                <div className="p-6 bg-white border-b-2 border-dashed border-[#C1CFD6]">
                  <p className="text-[#3F5461]">
                    {category.description}
                  </p>
                </div>

                {/* Sample Books */}
                <div className="p-6 bg-white">
                  {categoryBooks.length > 0 ? (
                    <div className="space-y-3 mb-4">
                      <p className="text-sm text-[#2E2E4E]">Featured titles:</p>
                      <div className="border-2 border-dashed border-[#C1CFD6] p-3 space-y-2">
                        {categoryBooks.slice(0, 3).map((book) => (
                          <div key={book.id} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#5C2E5C] rounded-full"></div>
                            <p className="text-sm text-[#3F5461]">{book.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 p-3 border-2 border-dashed border-[#C1CFD6]">
                      <p className="text-sm text-[#C1CFD6] text-center">
                        More books coming soon
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={() => {
                      onCategorySelect(category.name);
                      onNavigateHome();
                    }}
                    className="w-full border-2 border-[#C1CFD6]"
                    variant="outline"
                  >
                    Browse {category.name}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#2E2E4E] border-t-2 border-[#C1CFD6]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 border-2 border-dashed border-[#3F5461] p-8">
            <h2 className="text-3xl text-white">
              Can't find what you're looking for?
            </h2>
            <p className="text-[#C1CFD6]">
              Use our search feature to find specific books, authors, or topics across all categories.
            </p>
            <Button
              onClick={onNavigateHome}
              className="border-2 border-[#C1CFD6] bg-[#5C2E5C] hover:bg-[#742C36] text-white"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
