const TimeDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  // console.log(minutes);
  return (
    <div>{`${String(minutes).padStart(2, "0")} : 
    ${String(seconds).padStart(2, "0")}`}</div>
  );
};
export default TimeDisplay;
