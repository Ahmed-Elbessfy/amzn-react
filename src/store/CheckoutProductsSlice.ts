import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import {IProduct} from "../interfaces/productsInterfaces"

interface initCheckoutProductsSliceInterface {
  checkoutProductsList: IProduct[]
}

const initState: initCheckoutProductsSliceInterface = {
  checkoutProductsList: []
}

const checkoutProductsSlice = createSlice({
  name: "checkout-products",
  initialState: initState,
  reducers: {
    addCheckoutProduct: ((state, action: PayloadAction<IProduct>) => {
      state.checkoutProductsList = [...state.checkoutProductsList, action.payload]
    })
  }
})


export const {addCheckoutProduct} = checkoutProductsSlice.actions

export default checkoutProductsSlice.reducer