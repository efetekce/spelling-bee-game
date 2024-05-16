import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";

const GameBoard = () => {
  const [time, setTime] = useState(60);

  const submitHandler = async (value) => {
    // console.log(value.textInput);
    // console.log(e.target.elements[0].value);
    // const input = e.target.elements[0].value.toLowerCase();
    const guessResponse = await fetch("/api/game", {
      method: "POST",
      body: value.textInput,
    });
    const data = await guessResponse.json();
    console.log(data);

    if (guessResponse.status === 200) {
      setTime((prev) => prev + 15);
    }
    // console.log(time);
    // console.log("updated time:", time);
  };
  return (
    <div>
      <Timer time={time} />
      <Input onSubmit={submitHandler} />
      <Beehive />
    </div>
  );
};
export default GameBoard;
