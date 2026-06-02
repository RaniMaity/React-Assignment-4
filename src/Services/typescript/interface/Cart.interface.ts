export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartInitialState {
  isLoading: boolean;
  isError: string | null;

  products: Product[];

  cartItems: CartItem[];
}

export interface CartContextType {
  cartData: CartInitialState;

  fetchProducts: () => Promise<void>;

  addItem: (product: Product) => void;

  removeItem: (id: number) => void;

  increaseQty: (id: number) => void;

  decreaseQty: (id: number) => void;
}