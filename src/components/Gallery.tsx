import bookImage1 from 'figma:asset/2c672929bb5044740b1ea318f56eb2b08662215a.png';
import bookImage2 from 'figma:asset/44dfd1a3165e31d0a36c367e10994cc2ce0b97cf.png';
import bookImage3 from 'figma:asset/f004e553b9d8f9ce2808b18b6e85304e0de116e3.png';
import magazineImage1 from 'figma:asset/4c96faa8f158d609eaf25ec8cc945644a202634c.png';
import magazineImage2 from 'figma:asset/6affcab7fb4cbb4dbf66f6e9224444fdf889309c.png';
import magazineImage3 from 'figma:asset/f91549ef92546cb7db076e3d1967ffc22c28fc01.png';
import merchandiseImage1 from 'figma:asset/f1979c066ad28d7d4598abad3652c9043196b1fd.png';
import merchandiseImage2 from 'figma:asset/a3caa678d19efdbc4a627c245ced50beeaddd25b.png';
import merchandiseImage3 from 'figma:asset/321161bdb73717a2b28474f367862884e601e3cf.png';
import { useState } from 'react';
import { ShoppingCart, Plus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const galleryImages = [
  {
    id: 1,
    url: bookImage1,
    title: "Brie Mine 4Ever, a book for cheese lovers"
  },
  {
    id: 2,
    url: bookImage2,
    title: "Glory Riders, a book about bikers"
  },
  {
    id: 3,
    url: bookImage3,
    title: "Sorcerer's Shadowed Chronicles, a fantasy book"
  },
  {
    id: 4,
    url: magazineImage1,
    title: "Bali, a magazine about pickleball"
  },
  {
    id: 5,
    url: magazineImage2,
    title: "Travel, a magazine for travelers"
  },
  {
    id: 6,
    url: magazineImage3,
    title: "Eat, a magazine for foodies"
  },
  {
    id: 7,
    url: merchandiseImage1,
    title: "A canvas tote bag with black lettering that says ALL I DO IS READ READ READ"
  },
  {
    id: 8,
    url: merchandiseImage2,
    title: "A notebook with text on the cover that says Book Haven Bookstore"
  },
  {
    id: 9,
    url: merchandiseImage3,
    title: "A set of four Book Haven Bookstore stickers that promote reading"
  }
];

export function Gallery() {
  const [cartItems, setCartItems] = useState<typeof galleryImages>([]);
  const [showAddedDialog, setShowAddedDialog] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showOrderDialog, setShowOrderDialog] = useState(false);

  const handleAddToCart = (item: typeof galleryImages[0]) => {
    setCartItems((prev) => [...prev, item]);
    setShowAddedDialog(true);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProcessOrder = () => {
    setShowCartModal(false);
    setShowOrderDialog(true);
  };

  return (
    <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6] relative">
      {/* View Cart Button */}
      <div className="absolute top-12 right-4 z-10">
        <Button
          onClick={() => setShowCartModal(true)}
          className="border-2 border-[#C1CFD6] bg-[#5C2E5C] hover:bg-[#742C36] text-white flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          View Cart ({cartItems.length})
        </Button>
      </div>

      <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
        <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
          Gallery
        </h2>
        <p className="text-[#2E2E4E]" style={{ fontFamily: 'Comfortaa, cursive' }}>
          Explore our curated collection of books and reading experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="border-2 border-[#C1CFD6] overflow-hidden hover:border-[#5C2E5C] transition-colors bg-[#E8E8E8]"
          >
            <div className="aspect-square overflow-hidden bg-[#E8E8E8] flex items-center justify-center p-8">
              <img
                src={image.url}
                alt={image.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white border-t-2 border-[#C1CFD6]">
              <p className="text-[#2E2E4E] mb-3" style={{ fontFamily: 'Calibri, sans-serif' }}>
                {image.title}
              </p>
              <Button
                onClick={() => handleAddToCart(image)}
                className="w-full border-2 border-[#C1CFD6] bg-[#3E5641] hover:bg-[#5C2E5C] text-white flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Item Added Dialog */}
      <Dialog open={showAddedDialog} onOpenChange={setShowAddedDialog}>
        <DialogContent className="border-2 border-[#C1CFD6] bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E4E]">Item added.</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Cart Modal */}
      <Dialog open={showCartModal} onOpenChange={setShowCartModal}>
        <DialogContent className="border-2 border-[#C1CFD6] bg-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E4E] text-2xl mb-4">Shopping Cart</DialogTitle>
          </DialogHeader>

          {cartItems.length === 0 ? (
            <div className="py-8 text-center border-2 border-dashed border-[#C1CFD6] rounded-lg">
              <p className="text-[#2E2E4E]">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item, index) => (
                  <div 
                    key={`${item.id}-${index}`}
                    className="border-2 border-[#C1CFD6] p-4 bg-white flex items-center gap-4"
                  >
                    <div className="w-20 h-20 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center p-2">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-dashed border-[#C1CFD6] pt-4">
                <p className="text-[#2E2E4E] mb-4">
                  Total Items: {cartItems.length}
                </p>
              </div>
            </>
          )}

          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleClearCart}
              disabled={cartItems.length === 0}
              className="flex-1 border-2 border-[#C1CFD6] bg-[#742C36] hover:bg-[#5C2E5C] text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </Button>
            <Button
              onClick={handleProcessOrder}
              disabled={cartItems.length === 0}
              className="flex-1 border-2 border-[#C1CFD6] bg-[#3E5641] hover:bg-[#3F5461] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Process Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Order Confirmation Dialog */}
      <Dialog open={showOrderDialog} onOpenChange={setShowOrderDialog}>
        <DialogContent className="border-2 border-[#C1CFD6] bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E4E]">Thank you for your order.</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}