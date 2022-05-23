import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";

const Counter = () => {

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count+1);
  }

  const decrement = () => {
    setcount(count-1);
  }
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={increment} className="button" data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button className="button" onClick={decrement} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
