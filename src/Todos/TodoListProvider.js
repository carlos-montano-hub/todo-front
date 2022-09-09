import React, { createContext, useState, useEffect } from "react";

export const TodoListContext = createContext();

export const TodoListProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const fetchTodoList = (
    page,
    sortBy,
    filterByDone,
    filterByName,
    filterByPriority
  ) => {
    const sortByParam = "";
    const filterByDoneParam = "";
    const filterByNameParam = "";
    const filterByPriorityParam = "";
    const pageParam = "?page=1";

    if (page !== null) {
      pageParam = `?page=${page}`;
    }

    if (sortBy !== null) {
      sortByParam = `&sortByParam=${sortBy}`;
    }

    if (filterByDone !== null) {
      filterByDoneParam = `&filterByDoneParam=${filterByDone}`;
    }

    if (filterByName !== null) {
      filterByNameParam = `&filterByNameParam=${filterByName}`;
    }

    if (filterByPriority !== null) {
      filterByPriorityParam = `&filterByPriorityParam=${filterByPriority}`;
    }

    const params =
      pageParam +
      sortByParam +
      filterByDoneParam +
      filterByNameParam +
      filterByPriorityParam;

    fetch(`http://localhost:9090/todos${params}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  };

  return (
    <TodoListContext.Provider value={(todos, setTodos, fetchTodoList)}>
      {props.children}
    </TodoListContext.Provider>
  );
};
