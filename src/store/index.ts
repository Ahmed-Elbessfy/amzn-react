import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";

const store = configureStore({
  reducer: { initViewProducts: productsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store