import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";
import GenericToast from "./GenericToast";

const GameBoard = () => {
  const [time, setTime] = useState(10);

  const submitHandler = async (value) => {
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
      <GenericToast />
      <Input onSubmit={submitHandler} />
      <Beehive />
    </div>
  );
};
export default GameBoard;
