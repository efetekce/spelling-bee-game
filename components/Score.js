const Score = ({ score }) => {
  return (
    <div className="absolute left-2 top-2 hover:text-slate-100  hover:bg-violet-500 p-2 transition duration-500 rounded-xl">
      <p className="text-4xl font-bold">Score: {score}</p>
    </div>
  );
};
export default Score;
