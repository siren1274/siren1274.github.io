import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col border-l-2 border-[#C1CFD6]">
        <SheetHeader className="border-b-2 border-[#C1CFD6] pb-4">
          <SheetTitle className="text-[#2E2E4E]">Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center border-2 border-dashed border-[#C1CFD6] p-12 rounded-lg">
              <p className="text-[#C1CFD6]">Your cart is empty</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-2 border-[#C1CFD6] p-3 rounded-lg">
                  <div className="w-20 h-28 bg-[#f5f5f7] border-2 border-[#C1CFD6] rounded overflow-hidden flex-shrink-0 relative">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span className="text-2xl">📖</span>
                    </div>
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="line-clamp-2 mb-1 text-[#2E2E4E]">{item.title}</h4>
                    <p className="text-sm mb-2">{item.author}</p>
                    <p className="mb-2 text-[#2E2E4E]">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-[#C1CFD6]"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center text-[#2E2E4E]">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-[#C1CFD6]"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-[#742C36] hover:text-[#742C36]/80 border-2 border-transparent hover:border-[#742C36]"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-[#C1CFD6] pt-4 space-y-3 bg-white">
              <div className="flex justify-between border-b border-dashed border-[#C1CFD6] pb-2">
                <span>Subtotal</span>
                <span className="text-[#2E2E4E]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-[#C1CFD6] pb-2">
                <span>Shipping</span>
                <span className="text-[#2E2E4E]">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-xl border-t-2 border-[#2E2E4E] pt-3">
                <span className="text-[#2E2E4E]">Total</span>
                <span className="text-[#2E2E4E]">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full border-2" size="lg">
                Proceed to Checkout
              </Button>
              {subtotal < 50 && (
                <p className="text-sm text-center border-2 border-dashed border-[#C1CFD6] p-2 rounded">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}