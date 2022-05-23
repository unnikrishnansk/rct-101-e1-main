import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
import count from "../Counter/Counter";
import setcount from "../Counter/Counter";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [Task, setTask] = useState("");
  const [List, setList] = useState([]);

  const onchangeHandler = (e) => {
    setTask(e.target.value);
    // console.log(e.target.value);
  }

  const onclickHandler = () => {
    setList([...List, Task]);
    setcount(count+1);
    // console.log(List);
  }

  return (
    <div className={styles.todoForm}>
      <input onChange={onchangeHandler} data-cy="add-task-input" type="text" />
      <button onClick={onclickHandler} data-cy="add-task-button">+</button>

      {List.map((e) => (
        <div>
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
};

export default AddTask;
