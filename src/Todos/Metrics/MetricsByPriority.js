import "./MetricsByPriority.css";
import { useState, useEffect, useContext } from "react";

import { TodoListContext } from "../TodoListProvider";

export const MetricsByPriority = () => {
  const { avg } = useContext(TodoListContext);
  const defaultTime = { hours: null, minutes: null };

  const [timeLow, setTimeLow] = useState(defaultTime);
  const [timeMedium, setTimeMedium] = useState(defaultTime);
  const [timeHigh, setTimeHigh] = useState(defaultTime);

  useEffect(() => {
    if (avg.timeForLow > 0) {
      setTimeLow({
        hours: Math.trunc((avg.timeForLow % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.trunc((avg.timeForLow % (60 * 60)) / 60),
      });
    } else {
      setTimeLow("-");
    }

    if (avg.timeForMedium > 0) {
      setTimeMedium({
        hours: Math.trunc((avg.timeForMedium % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.trunc((avg.timeForMedium % (60 * 60)) / 60),
      });
    } else {
      setTimeMedium("-");
    }

    if (avg.timeForHigh > 0) {
      setTimeHigh({
        hours: Math.trunc((avg.timeForHigh % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.trunc((avg.timeForHigh % (60 * 60)) / 60),
      });
    } else {
      setTimeHigh("-");
    }
  }, [avg]);

  return (
    <div className="metrics-by-priority ">
      <label>Average time to finish tasks by priority:</label>
      <div>
        {"Low: "}
        {avg.timeForLow > 0 && [timeLow.hours, ":", timeLow.minutes, " mins"]}
        {avg.timeForLow === 0 && "-"}
      </div>
      <div>
        {"Medium: "}
        {avg.timeForMedium > 0 && [
          timeMedium.hours,
          ":",
          timeMedium.minutes,
          " mins",
        ]}
        {avg.timeForMedium === 0 && "-"}
      </div>
      <div>
        {"High: "}
        {avg.timeForHigh > 0 && [
          timeHigh.hours,
          ":",
          timeHigh.minutes,
          " mins",
        ]}
        {avg.timeForHigh === 0 && "-"}
      </div>
    </div>
  );
};
