import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducder from "../slices/counterSlice";
import productsReducer from "../slices/productsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducder,
    allProducts: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
