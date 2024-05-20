const TimeDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  // console.log(minutes);
  return (
    <div className="text-4xl font-bold text-center rounded-xl border-white border-2">{`${String(
      minutes
    ).padStart(2, "0")} : 
    ${String(seconds).padStart(2, "0")}`}</div>
  );
};
export default TimeDisplay;
