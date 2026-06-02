import type { CartInitialState, CartItem } from "../Services/typescript/interface/Cart.interface";
import type { CartActionType } from "../Services/typescript/type/Cart.type";

;


export const initialState: CartInitialState = {
  isLoading: false,
  isError: null,
  products: [],
  cartItems: [],
};

export const cartReducer = (
  state: CartInitialState,
  action: CartActionType
): CartInitialState => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS":
      return {
        ...state,
        isLoading: true,
        isError: null,
      };

    case "SUCCESS_FETCH_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "FAILED_FETCH_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      const newItem: CartItem = {
        ...action.payload,
        quantity: 1,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};