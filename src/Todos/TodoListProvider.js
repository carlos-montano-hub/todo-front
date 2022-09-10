import React, { createContext, useState, useEffect } from "react";

export const TodoListContext = createContext(null);

export const TodoListProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const priorities = ["LOW", "MEDIUM", "HIGH"];
  const [avg, setAvg] = useState({});
  const [size, setSize] = useState(1);

  const defaultParams = {
    page: null,
    sortBy: null,
    filterByDone: null,
    filterByName: null,
    filterByPriority: null,
  };

  const [parameters, setparameters] = useState(defaultParams);

  const modifyParams = (newParams) => {
    setparameters(newParams);
    fetchTodoList(newParams);
  };

  const fetchAvgTime = async () => {
    await fetch("http://localhost:9090/todos/avg")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setAvg(data);
      });
  };

  const deleteTodoItem = async (id) => {
    await fetch("http://localhost:9090/todos/" + id, {
      method: "DELETE",
    });

    fetchTodoList(parameters);
  };

  const putTodo = async (newTodo) => {
    await fetch("http://localhost:9090/todos/" + newTodo.id, {
      method: "PUT",
      body: JSON.stringify({ ...newTodo }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    fetchTodoList(parameters);
  };

  const postTodo = async (newTodo) => {
    await fetch("http://localhost:9090/todos", {
      method: "POST",
      body: JSON.stringify({ ...newTodo }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    fetchTodoList(parameters);
  };

  const fetchTodoList = async (parameters) => {
    const { page, sortBy, filterByDone, filterByName, filterByPriority } = {
      ...parameters,
    };

    let sortByParam = "";
    let filterByDoneParam = "";
    let filterByNameParam = "";
    let filterByPriorityParam = "";
    let pageParam = "?page=1";

    if (page !== null) {
      pageParam = `?page=${page}`;
    }

    if (sortBy !== null) {
      sortByParam = `&sortBy=${sortBy}`;
    }

    if (filterByDone !== null) {
      filterByDoneParam = `&filterByDone=${filterByDone}`;
    }

    if (filterByName !== null && filterByName.trim() !== "") {
      filterByNameParam = `&filterByName=${filterByName.trim()}`;
    }

    if (filterByPriority !== null) {
      filterByPriorityParam = `&filterByPriority=${filterByPriority}`;
    }

    const params =
      pageParam +
      sortByParam +
      filterByDoneParam +
      filterByNameParam +
      filterByPriorityParam;

    await fetch(`http://localhost:9090/todos${params}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  };

  const fetchSize = async (parameters) => {
    const { page, sortBy, filterByDone, filterByName, filterByPriority } = {
      ...parameters,
    };
    console.log(parameters);
    let sortByParam = "";
    let filterByDoneParam = "";
    let filterByNameParam = "";
    let filterByPriorityParam = "";
    let pageParam = "?page=1";

    if (page !== null) {
      pageParam = `?page=${page}`;
    }

    if (sortBy !== null) {
      sortByParam = `&sortBy=${sortBy}`;
    }

    if (filterByDone !== null) {
      filterByDoneParam = `&filterByDone=${filterByDone}`;
    }

    if (filterByName !== null && filterByName.trim() !== "") {
      filterByNameParam = `&filterByName=${filterByName.trim()}`;
    }

    if (filterByPriority !== null) {
      filterByPriorityParam = `&filterByPriority=${filterByPriority}`;
    }

    const params =
      pageParam +
      sortByParam +
      filterByDoneParam +
      filterByNameParam +
      filterByPriorityParam;

    console.log(params);

    await fetch(`http://localhost:9090/todos/size${params}`)
      .then((response) => response.json())
      .then((data) => {
        setSize(() => data.size);
      });
  };

  useEffect(() => {
    fetchSize(parameters);

    console.log(size);
  }, []);

  return (
    <TodoListContext.Provider
      value={{
        todos,
        setTodos,
        fetchTodoList,
        priorities,
        defaultParams,
        avg,
        fetchAvgTime,
        deleteTodoItem,
        putTodo,
        postTodo,
        modifyParams,
        size,
        fetchSize,
        parameters,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};
