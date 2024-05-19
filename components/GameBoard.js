import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";
import GenericToast from "./GenericToast";
import { usePathname } from "next/navigation";

const GameBoard = () => {
  const [time, setTime] = useState(60);
  const [showToast, setShowToast] = useState(false);
  const path = usePathname();
  const submitHandler = async (value) => {
    // console.log(value.textInput.length);
    if (value.textInput.length < 4) {
      setShowToast(true);
    }
    const guessResponse = await fetch("/api/game", {
      headers: {
        Path: path,
      },
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
    <div className="grid gap-12 place-items-center ">
      <Timer time={time} />
      {showToast && <GenericToast tooShort />}
      <Input onSubmit={submitHandler} />
      <Beehive />
    </div>
  );
};
export default GameBoard;
