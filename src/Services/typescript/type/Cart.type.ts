import type { Product } from "../interface/Cart.interface";


export type CartActionType =
  | {
      type: "START_FETCH_PRODUCTS";
    }
  | {
      type: "SUCCESS_FETCH_PRODUCTS";
      payload: Product[];
    }
  | {
      type: "FAILED_FETCH_PRODUCTS";
      payload: string;
    }
  | {
      type: "ADD_ITEM";
      payload: Product;
    }
  | {
      type: "REMOVE_ITEM";
      payload: number;
    }
  | {
      type: "INCREASE_QTY";
      payload: number;
    }
  | {
      type: "DECREASE_QTY";
      payload: number;
    };