const Hexagon = ({ letter }) => {
  return (
    <li className="hex">
      <div className="hexIn">
        <a className="hexLink">
          <p>{letter}</p>
        </a>
      </div>
    </li>
  );
};
export default Hexagon;
