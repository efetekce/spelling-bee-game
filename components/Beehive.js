import { useEffect, useState } from "react";
import Hexagon from "./Hexagon";
import { usePathname } from "next/navigation";

const Beehive = () => {
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

  return (
    <ul id="hexGrid">
      {letters &&
        letters.map((letter) => <Hexagon letter={letter} key={letter} />)}
    </ul>
  );
};
export default Beehive;
