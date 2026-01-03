import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { BookCard, Book } from './components/BookCard';
import { Cart, CartItem } from './components/Cart';
import { Gallery } from './components/Gallery';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Tabs, TabsList, TabsTrigger } from './components/ui/tabs';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Mail } from 'lucide-react';

// Mock book data
const mockBooks: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    rating: 4.5,
    reviews: 1284,
    image: "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2NzE1NTcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Fiction",
    isNew: true,
    isBestseller: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    rating: 5,
    reviews: 2456,
    image: "https://images.unsplash.com/photo-1637962638310-e6787f7eb324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmd8ZW58MXx8fHwxNzY3MTIxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Self-Help",
    isBestseller: true,
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 22.99,
    rating: 4,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY3MTk3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Thriller",
    isNew: true,
  },
  {
    id: 4,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 26.99,
    rating: 4.5,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2NzE1NTcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Fiction",
    isBestseller: true,
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    price: 25.99,
    rating: 5,
    reviews: 2134,
    image: "https://images.unsplash.com/photo-1637962638310-e6787f7eb324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmd8ZW58MXx8fHwxNzY3MTIxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Biography",
    isBestseller: true,
  },
  {
    id: 6,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 23.99,
    rating: 4.5,
    reviews: 1543,
    image: "https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY3MTk3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Romance",
    isNew: true,
  },
  {
    id: 7,
    title: "The Adventure Zone",
    author: "Clint McElroy",
    price: 21.99,
    rating: 4,
    reviews: 756,
    image: "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2NzE1NTcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Adventure",
    isNew: true,
  },
  {
    id: 8,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 29.99,
    rating: 4.5,
    reviews: 1823,
    image: "https://images.unsplash.com/photo-1637962638310-e6787f7eb324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmd8ZW58MXx8fHwxNzY3MTIxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Self-Help",
    isBestseller: true,
  },
];

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showSubscribeMessage, setShowSubscribeMessage] = useState(false);
  const [activePage, setActivePage] = useState<'home' | 'about' | 'contact'>('home');

  const handleAddToCart = (book: Book) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === book.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveTab('all');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail) {
      setShowSubscribeMessage(true);
      setSubscribeEmail('');
      setTimeout(() => {
        setShowSubscribeMessage(false);
      }, 3000);
    }
  };

  // Filter books
  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'bestsellers' && book.isBestseller) ||
                      (activeTab === 'new' && book.isNew);
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={totalItems}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        onNavigate={setActivePage}
        activePage={activePage}
      />

      {activePage === 'home' ? (
        <>
          <Hero />

          <Categories onCategoryClick={handleCategoryClick} />

          {/* Gallery Section */}
          <Gallery />

          {/* Books Section */}
          <section className="py-16 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
              <div>
                <h2 className="text-3xl text-[#2E2E4E]">
                  {selectedCategory ? `${selectedCategory} Books` : 'Featured Books'}
                </h2>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm text-[#5C2E5C] hover:underline mt-1 border-b-2 border-transparent hover:border-[#5C2E5C]"
                  >
                    Clear filter
                  </button>
                )}
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="border-2 border-[#C1CFD6]">
                  <TabsTrigger value="all">All Books</TabsTrigger>
                  <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {filteredBooks.length === 0 ? (
              <div className="text-center py-12">
                <div className="border-2 border-dashed border-[#C1CFD6] p-12 rounded-lg inline-block">
                  <p>No books found matching your criteria.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
                ))}
              </div>
            )}
          </section>
        </>
      ) : activePage === 'about' ? (
        <AboutUs />
      ) : (
        <ContactUs />
      )}

      {/* Footer */}
      <footer className="bg-[#2E2E4E] text-white py-12 mt-0 border-t-4 border-[#742C36]">
        <div className="container mx-auto px-4">
          {/* Subscribe Section */}
          <div className="mb-8 pb-8 border-b-2 border-[#3F5461]">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="mb-2 text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 text-sm mb-6" style={{ fontFamily: 'Comfortaa, cursive' }}>
                Get the latest updates on new arrivals, special offers, and literary news.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#C1CFD6]" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    required
                    className="pl-10 w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E]"
                  />
                </div>
                <Button
                  type="submit"
                  className="border-2 border-[#C1CFD6] bg-[#5C2E5C] hover:bg-[#742C36] text-white px-6"
                >
                  Subscribe
                </Button>
              </form>
              {showSubscribeMessage && (
                <p className="mt-4 text-[#C1CFD6] border-2 border-[#C1CFD6] bg-[#3E5641] inline-block px-4 py-2 rounded" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-2 border-[#3F5461] p-4 rounded-lg">
              <h3 className="mb-4 text-white">About BookHaven</h3>
              <p className="text-gray-300 text-sm">
                Your trusted online bookstore for discovering and purchasing books across all genres.
              </p>
            </div>
            <div className="border-2 border-[#3F5461] p-4 rounded-lg">
              <h3 className="mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">About Us</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Contact</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Shipping Info</a></li>
              </ul>
            </div>
            <div className="border-2 border-[#3F5461] p-4 rounded-lg">
              <h3 className="mb-4 text-white">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Fiction</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Non-Fiction</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Children's Books</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Academic</a></li>
              </ul>
            </div>
            <div className="border-2 border-[#3F5461] p-4 rounded-lg">
              <h3 className="mb-4 text-white">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Returns</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white border-b border-transparent hover:border-white">Track Order</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#3F5461] mt-8 pt-8 text-center text-sm text-gray-300">
            <p>© 2026 BookHaven. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}