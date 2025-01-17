import { useState } from "react";

export const useCounter = (count = 0) => {
  const [counter, setCounter] = useState(count);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return { counter, increment, decrement };
};
