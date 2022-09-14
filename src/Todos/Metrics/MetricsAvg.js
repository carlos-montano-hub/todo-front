import "./MetricsAvg.css";
import { useState, useEffect, useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const MetricsAvg = () => {
  const { avg } = useContext(TodoListContext);

  const [time, setTime] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    setTime({
      days: Math.trunc(avg.timeForAll / (24 * 60 * 60)),
      hours: Math.trunc((avg.timeForAll % (24 * 60 * 60)) / (60 * 60)),
      minutes: Math.trunc((avg.timeForAll % (60 * 60)) / 60),
      seconds: Math.trunc(avg.timeForAll % 60),
    });
  }, [avg]);

  return (
    <div className="metrics-avg">
      <label>Average Time to finish Tasks</label>
      <div>
        {Object.keys(time).map(
          (key, index) =>
            time[key] > 0 && (
              <label key={index}>
                {" "}
                {time[key]} {key}
              </label>
            )
        )}

        {avg.timeForAll === 0 && "-"}
      </div>
    </div>
  );
};
