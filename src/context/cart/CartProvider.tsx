import { CreateCartContext } from "./CreateCartContext";
import { cartReducer, initialState } from "../../reducer/cart.reducer";
import { useReducer, type ReactNode } from "react";
import type { Product } from "../../Services/typescript/interface/Cart.interface";
import { fetchProductsFns } from "../../api/function/product.function";

interface Props {
  children: ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cartData, dispatch] = useReducer(
    cartReducer,
    initialState
  );

const fetchProducts = async () => {
  dispatch({
    type: "START_FETCH_PRODUCTS",
  });

  try {
    const response = await fetchProductsFns();

    dispatch({
      type: "SUCCESS_FETCH_PRODUCTS",
      payload: response.products,
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: "FAILED_FETCH_PRODUCTS",
      payload: "Failed to fetch products",
    });
  }
};

  const addItem = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  const removeItem = (id: number) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increaseQty = (id: number) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  const decreaseQty = (id: number) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  return (
    <CreateCartContext.Provider
      value={{
        cartData,
        fetchProducts,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CreateCartContext.Provider>
  );
};

export default CartProvider;