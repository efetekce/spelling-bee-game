import { motion } from "framer-motion";

const WordList = ({ correctWords }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="grid grid-cols-2 gap-2"
    >
      <span className="col-span-2 justify-self-center">
        Your correct words:
      </span>
      {correctWords.map((word) => (
        <p
          key={word}
          className="bg-slate-100/50 font-semibold text-lg text-center p-2 rounded-lg cursor-pointer hover:text-slate-100 hover:bg-violet-500 transition duration-500"
        >
          {word}
        </p>
      ))}
    </motion.div>
  );
};
export default WordList;
