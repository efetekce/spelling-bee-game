import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Input = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const inputRef = useRef(null);

  const onSubmitHandler = (data) => {
    // e.preventDefault();
    console.log(data);
    onSubmit(data);
    reset();
  };

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    if (inputRef.current) inputRef.current.addEventListener("blur", focusInput);

    focusInput();
    return () => {
      if (inputRef.current)
        inputRef.current.removeEventListener("blur", focusInput);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        {...register("textInput", { ref: inputRef, minLength: 3 })}
        type="text"
        className="bg-slate-200 rounded-xl px-8 py-4 uppercase text-2xl text-center outline-none"
      />
      {errors.mail?.message}
    </form>
  );
};
export default Input;
