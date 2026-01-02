import { ShoppingCart, Search, Menu, Book } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Logo } from './Logo';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
}

export function Header({ cartItemsCount, onCartClick, onSearchChange }: HeaderProps) {
  return (
    <header className="border-2 border-[#C1CFD6] sticky top-0 bg-[#2E2E4E] z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#C1CFD6]" />
            <Input
              type="text"
              placeholder="Search for books, authors, or genres..."
              className="pl-10 w-full border-2 border-[#C1CFD6] bg-white"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-[#C1CFD6] hover:text-white transition-colors border-b-2 border-transparent hover:border-[#C1CFD6]">Home</a>
            <a href="#" className="text-[#C1CFD6] hover:text-white transition-colors border-b-2 border-transparent hover:border-[#C1CFD6]">Categories</a>
            <a href="#" className="text-[#C1CFD6] hover:text-white transition-colors border-b-2 border-transparent hover:border-[#C1CFD6]">Bestsellers</a>
            <a href="#" className="text-[#C1CFD6] hover:text-white transition-colors border-b-2 border-transparent hover:border-[#C1CFD6]">New Arrivals</a>
          </nav>

          {/* Cart Button */}
          <Button variant="outline" className="relative border-2 border-[#C1CFD6] bg-white hover:bg-[#C1CFD6]" onClick={onCartClick}>
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#742C36] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs border-2 border-white">
                {cartItemsCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" className="lg:hidden border-2 border-[#C1CFD6] text-[#C1CFD6] hover:bg-[#3F5461] hover:text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#C1CFD6]" />
          <Input
            type="text"
            placeholder="Search books..."
            className="pl-10 w-full border-2 border-[#C1CFD6] bg-white"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}