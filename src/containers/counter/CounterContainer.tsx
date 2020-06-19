import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseNumber,
  decreaseNumber,
  diffNumber,
} from "../../store/counter/counter.action";
import Counter from "../../components/counter";
import { RootState } from "../../store/rootReducer";

function CounterContainer() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  const handleIncrease = () => {
    dispatch(increaseNumber());
  };

  const handleDecrease = () => {
    dispatch(decreaseNumber());
  };

  const handleDiff = (payload: number) => {
    dispatch(diffNumber(payload));
  };

  return (
    <div>
      <Counter
        count={count}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleDiff={handleDiff}
      />
    </div>
  );
}

export default CounterContainer;
