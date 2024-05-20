import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Input = ({ onSubmit, correctWords, letters }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data);
    const { textInput } = data;
    if (correctWords.includes(textInput)) {
      console.log("aloooooo");
    }

    onSubmit(data);

    reset();
  };

  useEffect(() => {
    setFocus("textInput");
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-2 items-center"
    >
      {errors.textInput && (
        <p className="rounded-lg bg-violet-500 p-2 text-slate-100">
          {errors.textInput?.message}
        </p>
      )}
      <input
        {...register("textInput", {
          minLength: {
            value: 3,
            message: "Too short",
          },
          validate: {
            isAlreadyFound: (value) => {
              return correctWords.includes(value) ? "Already found." : true;
            },
            isUsingBeehiveLetters: (value) => {
              const a = new RegExp(`^[${letters.join("")}]+$`, "i");
              return a.test(value) || "Please use beehive letters.";
            },
          },
        })}
        type="text"
        className="bg-slate-200 rounded-xl px-8 py-4 uppercase text-2xl text-center outline-none"
      />
    </form>
  );
};
export default Input;
