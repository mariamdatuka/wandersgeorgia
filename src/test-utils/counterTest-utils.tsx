import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";

// 🛠️ Create a reusable render function
export function renderWithRedux(
  ui: any,
  { store = configureStore({ reducer: { counter: counterReducer } }) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}
