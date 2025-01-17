import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
//import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
//import getAllProducts from "./services/getAllProducts";
import { useQuery } from "@tanstack/react-query";
import { store } from "./app/store";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(), // Mocking useQuery
}));

const mockProducts = [
  { id: 1, title: "T-shirt", price: 19.99 },
  { id: 2, title: "Laptop", price: 999.99 },
];

test("displays loading when isFetching is true", () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: null,
    isPending: true,
    isError: false,
    error: null,
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("displays error message when isError is true", () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: null,
    isPending: false,
    isError: true,
    error: { message: "An error occurred" },
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText("An error occurred")).toBeInTheDocument();
});

test("displays products when data is available", async () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: mockProducts,
    isPending: false,
    isError: false,
    error: null,
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getByText("T-shirt")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });
});
