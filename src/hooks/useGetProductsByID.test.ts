import { act, renderHook, waitFor } from "@testing-library/react";
import { useGetProductById } from "./useGetProductByID";
import { getProductById } from "../services/getProdutsById";

jest.mock("../services/getProdutsById");
const mockData = {
  id: 1,
  name: "Test Product",
};

test("renders product with default value", () => {
  const { result } = renderHook(() => useGetProductById());
  expect(result.current.pro).toBe(null);
});

test("renders product with custom value", async () => {
  (getProductById as jest.Mock).mockResolvedValue(mockData);
  const { result } = renderHook(() => useGetProductById());

  act(() => {
    result.current.getProductWithID(1);
  });
  await waitFor(() => {
    expect(result.current.pro).toEqual(mockData);
  });
});
