import { useEffect, useState } from "react";
import Hexagon from "./Hexagon";
import { usePathname } from "next/navigation";

const Beehive = ({ letters }) => {
  return (
    <ul id="hexGrid">
      {letters &&
        letters.map((letter) => <Hexagon letter={letter} key={letter} />)}
    </ul>
  );
};
export default Beehive;
