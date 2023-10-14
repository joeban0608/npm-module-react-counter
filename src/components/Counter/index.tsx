import React, { useState } from "react";

type Props = {
  initialValue?: number;
};
const MyCounter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  );
};

export default MyCounter;
