import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

test("renders counter with default value", () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.counter).toBe(0);
});

test("renders counter with custom value", () => {
  const { result } = renderHook(() => useCounter(5));
  expect(result.current.counter).toBe(5);
});

test("increments counter", () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.counter).toBe(1);
});
