import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";

const GameBoard = () => {
  const [time, setTime] = useState(100);

  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(e.target.elements[0].value);
    const input = e.target.elements[0].value.toLowerCase();
    const guess = await fetch("/api/game", {
      method: "POST",
      body: input,
    });
    console.log(guess);

    setTime((prev) => prev + 25);
    // console.log(time);
    // console.log("updated time:", time);
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
