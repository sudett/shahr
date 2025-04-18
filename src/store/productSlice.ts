"use client";

import { Product } from "@/types/product.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  selectedProducts: Product[];
}

const initialState: ProductState = {
  selectedProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const foundItem = state.selectedProducts.find(
        (selectedProduct) => selectedProduct.id === action.payload.id
      );

      if (!foundItem) {
        state.selectedProducts = [...state.selectedProducts, action.payload];
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
