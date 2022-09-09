import { useState, useEffect } from "react";
import { Filter } from "./Filter/Filter";
import TodoList from "./TodosList";
import { PageSelect } from "./PageSelect/PageSelect";
import { Metrics } from "./Metrics/Metrics";
import "./Todos.css";
import { NewTodo } from "./NewTodo/NewTodo";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/todos?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  return (
    <div className="todos">
      <Filter></Filter>
      <NewTodo></NewTodo>
      <TodoList todos={todos}></TodoList>
      <PageSelect></PageSelect>
      <Metrics></Metrics>
    </div>
  );
};
export default Todos;
