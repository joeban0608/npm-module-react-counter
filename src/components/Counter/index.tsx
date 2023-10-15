import React, { useState } from "react";
import styles from "./styles.module.scss";

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
    <div className={styles.counter_container}>
      <h1>Counter: {counter}</h1>
      <div className={styles.buttons_wrapper}>
        <button onClick={onMinus}>-</button>
        <button onClick={onPlus}>+</button>
      </div>
    </div>
  );
};

export default MyCounter;
