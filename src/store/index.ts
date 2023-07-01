import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import checkoutProductsReducer from "./CheckoutProductsSlice";

const store = configureStore({
  reducer: { initViewProducts: productsReducer, checkoutProductsReducer:checkoutProductsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store