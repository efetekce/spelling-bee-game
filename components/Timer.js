import { useEffect, useState } from "react";
import TimeDisplay from "./TimeDisplay";

const Timer = ({ time, isRunning, setRunning }) => {
  //   console.log(time);

  const [remaining, setRemaining] = useState(time);

  useEffect(() => {
    setRemaining(time);
  }, [time]);
  useEffect(() => {
    if (!isRunning) return;
    const tick = () => {
      setRemaining((prev) => {
        const value = prev - 1;
        if (value <= 0) {
          setRunning(false);
          return time;
        }
        return value;
      });
    };
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return <TimeDisplay time={remaining} />;
};
export default Timer;
