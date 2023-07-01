import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import {IProduct} from "../interfaces/productsInterfaces"

interface initCheckoutProductsSliceInterface {
  checkoutProductsList: IProduct[],
  checkoutProductsCount: number,
  checkoutProductsValue:number
}

const initState: initCheckoutProductsSliceInterface = {
  checkoutProductsList: [],
  checkoutProductsCount: 0,
  checkoutProductsValue:0
}

const checkoutProductsSlice = createSlice({
  name: "checkout-products",
  initialState: initState,
  reducers: {
    addCheckoutProduct: ((state, action: PayloadAction<IProduct>) => {
      state.checkoutProductsList = [...state.checkoutProductsList, action.payload]
      state.checkoutProductsCount += 1
      state.checkoutProductsValue += parseFloat(action.payload.price)
    })
  }
})


export const {addCheckoutProduct} = checkoutProductsSlice.actions

export default checkoutProductsSlice.reducer