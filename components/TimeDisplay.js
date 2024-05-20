const TimeDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  // console.log(minutes);
  return (
    <div className="text-4xl font-bold text-center rounded-xl   hover:text-slate-100 absolute right-2 top-2 hover:bg-violet-500 p-2 transition duration-500">{`${String(
      minutes
    ).padStart(2, "0")} : 
    ${String(seconds).padStart(2, "0")}`}</div>
  );
};
export default TimeDisplay;
