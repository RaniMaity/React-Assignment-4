import { createContext } from "react";
import type { CartContextType } from "../../Services/typescript/interface/Cart.interface";

export const CreateCartContext =
  createContext<CartContextType | null>(null);