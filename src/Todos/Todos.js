import { useState, useEffect } from "react";
import { Filter } from "./Filter/Filter";
import TodoList from "./TodosList";
import { PageSelect } from "./PageSelect/PageSelect";
import { Metrics } from "./Metrics/Metrics";
import "./Todos.css";
import { NewTodo } from "./NewTodo/NewTodo";
import { TodoListProvider } from "./TodoListProvider";

const Todos = (props) => {
  return (
    <div className="todos">
      <TodoListProvider>
        <Filter></Filter>
        <NewTodo></NewTodo>
        <TodoList></TodoList>
        <PageSelect></PageSelect>
        <Metrics></Metrics>{" "}
      </TodoListProvider>
    </div>
  );
};
export default Todos;
