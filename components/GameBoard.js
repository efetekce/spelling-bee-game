import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";
import Notification from "./Notification";
import { usePathname } from "next/navigation";
import WordList from "./WordList";

const GameBoard = () => {
  const [time, setTime] = useState(60);
  const [showToast, setShowToast] = useState(false);
  const [isRunning, setRunning] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [correctWords, setCorrectWords] = useState([]);
  const [letters, setLetters] = useState([]);
  const path = usePathname();

  useEffect(() => {
    const getLetters = async () => {
      const response = await fetch("/api/game", {
        headers: {
          Path: path,
        },
      });
      const data = await response.json();
      setLetters(data.selectedLetters);
      // console.log(data.selectedLetters);
    };
    getLetters();
  }, []);

  const submitHandler = async (value) => {
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
      // alert("Already found!");
    }

    if (value.textInput.length < 4) {
      setShowToast(true);
    }
  };
  return (
    <div className="grid gap-12 place-items-center relative ">
      {isSubmitted && (
        <Timer time={time} isRunning={isRunning} setRunning={setRunning} />
      )}
      {/* {showToast && <Notification tooShort />} */}
      <Input
        onSubmit={submitHandler}
        correctWords={correctWords}
        letters={letters}
      />
      <Beehive letters={letters} />
      {correctWords.length > 0 && <WordList correctWords={correctWords} />}
    </div>
  );
};
export default GameBoard;
