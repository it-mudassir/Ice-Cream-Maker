import { createContext, useContext, useState, ReactNode } from "react";

export interface Flavor {
  id: string;
  name: string;
  price: number;
  category: "Chocolate" | "Fruit" | "Special" | "Vegan";
  color: string;
  hex: string;
}

export interface CartItem {
  flavor: Flavor;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (flavor: Flavor) => void;
  removeFromCart: (flavorId: string) => void;
  updateQuantity: (flavorId: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (flavor: Flavor) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.flavor.id === flavor.id);
      if (existing) {
        return prev.map((item) =>
          item.flavor.id === flavor.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { flavor, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (flavorId: string) => {
    setItems((prev) => prev.filter((item) => item.flavor.id !== flavorId));
  };

  const updateQuantity = (flavorId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(flavorId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.flavor.id === flavorId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce(
    (total, item) => total + item.quantity * item.flavor.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
