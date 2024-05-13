import { useEffect, useRef } from "react";

const Input = ({ handleSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="bg-slate-200 rounded-xl px-8 py-4 uppercase text-2xl text-center outline-none"
      />
    </form>
  );
};
export default Input;
