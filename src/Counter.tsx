import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./app/store";
import { increment, decrement, incrementByAmount } from "./slices/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>amount</button>
    </>
  );
};

export default Counter;
