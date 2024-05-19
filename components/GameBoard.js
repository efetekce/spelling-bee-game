import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";
import GenericToast from "./GenericToast";
import { usePathname } from "next/navigation";

const GameBoard = () => {
  const [time, setTime] = useState(10);
  const [showToast, setShowToast] = useState(false);
  const [isRunning, setRunning] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [correctWords, setCorrectWords] = useState([]);
  const path = usePathname();

  const submitHandler = async (value) => {
    // console.log(value.textInput.length);
    setSubmitted(true);
    setRunning(true);
    if (!correctWords.includes(value.textInput)) {
      const guessResponse = await fetch("/api/game", {
        headers: {
          Path: path,
        },
        method: "POST",
        body: value.textInput,
      });
      const data = await guessResponse.json();
      console.log(data.data);
      if (guessResponse.status === 200) {
        setTime((prev) => prev + 15);

        setCorrectWords([...correctWords, data.data]);
      }
    } else {
      alert("Already found!");
    }

    if (value.textInput.length < 4) {
      setShowToast(true);
    }
  };
  return (
    <div className="grid gap-12 place-items-center ">
      {isSubmitted && (
        <Timer time={time} isRunning={isRunning} setRunning={setRunning} />
      )}
      {showToast && <GenericToast tooShort />}
      <Input onSubmit={submitHandler} correctWords={correctWords} />
      <Beehive />
      {correctWords && correctWords.map((word) => <p key={word}>{word}</p>)}
    </div>
  );
};
export default GameBoard;
