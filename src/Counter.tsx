import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./app/store";
import { increment } from "./slices/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>click me</button>
    </>
  );
};

export default Counter;
