import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface ProductsState {
  products: Product[];
}
const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products.push(...action.payload);
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
