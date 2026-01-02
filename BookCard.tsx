import { ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

export function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-[#C1CFD6] hover:border-[#2E2E4E]">
      <div className="relative aspect-[3/4] bg-[#f5f5f7] border-b-2 border-[#C1CFD6]">
        {/* Wireframe overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center text-[#C1CFD6]">
            <div className="w-20 h-24 mx-auto border-2 border-dashed border-[#C1CFD6] rounded flex items-center justify-center">
              <span className="text-2xl">📖</span>
            </div>
          </div>
        </div>
        <ImageWithFallback
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover opacity-20"
        />
        {book.isNew && (
          <Badge className="absolute top-2 left-2 bg-[#3E5641] hover:bg-[#3E5641] border-2 border-white z-20">New</Badge>
        )}
        {book.isBestseller && (
          <Badge className="absolute top-2 right-2 bg-[#742C36] hover:bg-[#742C36] border-2 border-white z-20">Bestseller</Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3 bg-white">
        <div>
          <h4 className="line-clamp-2 mb-1 text-[#2E2E4E]">{book.title}</h4>
          <p className="text-sm">{book.author}</p>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(book.rating)
                    ? 'fill-[#742C36] text-[#742C36]'
                    : 'text-[#C1CFD6]'
                }`}
              />
            ))}
          </div>
          <span className="text-sm">({book.reviews})</span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-[#C1CFD6]">
          <span className="text-xl text-[#2E2E4E]">${book.price.toFixed(2)}</span>
          <Button onClick={() => onAddToCart(book)} size="sm" className="border-2">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}