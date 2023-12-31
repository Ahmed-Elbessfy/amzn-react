import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import {ICheckoutProduct} from "../interfaces/productsInterfaces"

interface initCheckoutProductsSliceInterface {
  checkoutProductsList: ICheckoutProduct[],
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
    addCheckoutProduct: ((state, action: PayloadAction<ICheckoutProduct>) => {
      state.checkoutProductsList = [...state.checkoutProductsList, action.payload]
      state.checkoutProductsCount += 1
      state.checkoutProductsValue += parseFloat(action.payload.price)
    }),
    removeCheckoutProduct: ((state, action: PayloadAction<{checkId:number, price:string}>) => {
      state.checkoutProductsList = [...state.checkoutProductsList.filter(product => product.checkId !== action.payload.checkId)]
      state.checkoutProductsCount -= 1
      state.checkoutProductsValue -= parseFloat(action.payload.price)
    })
  }
})


export const {addCheckoutProduct, removeCheckoutProduct} = checkoutProductsSlice.actions

export default checkoutProductsSlice.reducer