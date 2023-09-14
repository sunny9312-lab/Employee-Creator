import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onPlusClick = (event) => {
    setCounter(counter + 1);
  };

  const onMinusClick = () => {
    setCounter(counter - 1);
  };

  console.log("Rendered the counter component");

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onPlusClick}>+</button>
      <button onClick={onMinusClick}>-</button>
    </div>
  );
};

export default Counter;
