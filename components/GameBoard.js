import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Beehive from "./Beehive";
import Input from "./Input";
import Score from "./Score";
import { usePathname } from "next/navigation";
import WordList from "./WordList";
import { motion, useAnimation } from "framer-motion";

const GameBoard = () => {
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [isWrong, setWrong] = useState(false);
  const [correctWords, setCorrectWords] = useState([]);
  const [letters, setLetters] = useState([]);
  const path = usePathname();

  const controls = useAnimation();
  const shakeAnimation = {
    x: [0, -20, 20, -20, 20, -20, 20, 0],
    transition: { duration: 0.5 },
  };

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
      console.log(data);
      if (guessResponse.status === 200) {
        setTime((prev) => prev + 15);

        setCorrectWords([...correctWords, data.data]);
        setScore((prev) => prev + data.data.length * 10);
      } else if (guessResponse.status === 404) {
        setWrong(true);
        controls.start(shakeAnimation);
      }
    }
  };
  return (
    <div className="grid gap-12 place-items-center relative ">
      {isSubmitted && (
        <Timer time={time} isRunning={isRunning} setRunning={setRunning} />
      )}

      <motion.div animate={controls}>
        <Input
          onSubmit={submitHandler}
          correctWords={correctWords}
          letters={letters}
        />
      </motion.div>
      <Beehive letters={letters} />
      {correctWords.length > 0 && <WordList correctWords={correctWords} />}
      {correctWords.length > 0 && <Score score={score} />}
    </div>
  );
};
export default GameBoard;
