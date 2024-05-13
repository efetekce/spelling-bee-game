import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";

const GameBoard = () => {
  const [time, setTime] = useState(100);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("event:", e);
    setTime((prev) => prev + 25);
  };
  return (
    <div>
      <Timer time={time} />
      <Input handleSubmit={submitHandler} />
      <Beehive />
    </div>
  );
};
export default GameBoard;
