const Notification = ({ tooShort }) => {
  let message = "";
  if (tooShort) message = "Word is too short.";
  return (
    <div>
      <p>{message}</p>
      <p>Invalid word</p>
      <p>Already found</p>

      <p>Good</p>
      <p>Great</p>
      <p>Amazing</p>
      <p>Perfect</p>
      <p>Pangram</p>
    </div>
  );
};
export default Notification;
