import "./PageSelect.css";
import { useState, useEffect, useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const PageSelect = () => {
  const { todos, fetchSize, size, parameters, modifyParams } =
    useContext(TodoListContext);

  const [page, setPage] = useState(1);
  const [max, setmax] = useState(size / 10 + 1);

  useEffect(() => {
    fetchSize(parameters);
    setmax(size / 10 + 1);
    console.log(size);
  }, []);

  const pageChange = (event) => {
    setPage(event.target.value);
    fetchSize({ ...parameters, page: event.target.value });
    setmax(size / 10 + 1);

    console.log(size);
    modifyParams({ ...parameters, page: event.target.value });
  };

  return (
    <div className="page-select">
      <input
        type="number"
        min="1"
        max={max}
        defaultValue={1}
        onChange={pageChange}
      ></input>
    </div>
  );
};
