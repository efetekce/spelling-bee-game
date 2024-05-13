const TimeDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  console.log(minutes);
  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
};
export default TimeDisplay;
