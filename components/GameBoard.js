import { useEffect, useRef } from "react";

const GameBoard = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("12");
  };

  const inputRef = useRef(null);

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    inputRef.current.addEventListener("blur", focusInput);

    focusInput();
    return () => {
      if (inputRef.current)
        inputRef.current.removeEventListener("blur", focusInput);
    };
  }, []);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type="text"
          className="bg-slate-200 rounded-xl px-8 py-4 uppercase text-2xl text-center outline-none"
        />
      </form>

      <ul id="hexGrid">
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink">
              <p>e</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink">
              <p>r</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink">
              <p>o</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink" id="center-letter">
              <p>y</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink">
              <p>s</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink">
              <p>d</p>
            </a>
          </div>
        </li>
        <li className="hex">
          <div className="hexIn">
            <a className="hexLink">
              <p>t</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default GameBoard;
