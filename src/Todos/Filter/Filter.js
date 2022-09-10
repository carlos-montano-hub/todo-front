import "./Filter.css";
import { useState, useEffect, useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const Filter = () => {
  const [name, setName] = useState(null);
  const [priority, setPriority] = useState(null);
  const [done, setDone] = useState(null);

  const { todos, fetchTodoList, priorities, defaultParams, modifyParams } =
    useContext(TodoListContext);

  useEffect(() => {
    fetchTodoList(defaultParams);
  }, []);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const priorityChange = (event) => {
    if (event.target.value === "All") {
      setPriority(null);
    } else {
      setPriority(event.target.value);
    }
  };

  const doneChange = (event) => {
    if (event.target.value === "All") {
      setDone(null);
    } else setDone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let params = {
      ...defaultParams,
      filterByName: name,
      filterByPriority: priority,
      filterByDone: done,
    };
    console.log(params);
    modifyParams(params);
  };

  return (
    <div className="filter-box">
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input onChange={nameChange}></input>
        </div>
        <div>
          <label>Priority</label>
          <select onChange={priorityChange}>
            <option value={"All"}>All, High, Medium, Low</option>
            {priorities.map((pr, i) => (
              <option value={pr} key={i}>
                {pr}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>State</label>
          <select onChange={doneChange}>
            <option value={"All"}>All, Done, Undone</option>
            <option value={true}>Done</option>
            <option value={false}>Undone</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
