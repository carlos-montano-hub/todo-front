import "./PageSelect.css";
import { useContext, useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { TodoListContext } from "../TodoListProvider";

export const PageSelect = () => {
  const { size, parameters, modifyParams } = useContext(TodoListContext);

  const [max, setmax] = useState(Math.round(size / 10 + 1));

  const pageChange = (event, value) => {
    modifyParams({ ...parameters, page: value });
  };

  useEffect(() => {
    setmax(Math.trunc(size / 10 + 0.9));
    console.log(size / 10 + 1);
  }, [size]);

  return (
    <div className="page-select">
      <Pagination count={max} onChange={pageChange} />
    </div>
  );
};
