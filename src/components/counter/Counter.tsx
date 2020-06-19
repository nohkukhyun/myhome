import React from "react";

type CounterProps = {
  count: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleDiff: (payload: number) => void;
};

function Counter({
  count,
  handleIncrease,
  handleDecrease,
  handleDiff,
}: CounterProps) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={() => handleDiff(count)}>?</button>
    </div>
  );
}

export default Counter;
