const Hexagon = ({ letter }) => {
  return (
    <li className="hex  cursor-pointer active:scale-90 transition duration-200">
      <div className="inner-hex">
        <a className="hexLink hover:bg-violet-500 hover:text-slate-100 transition duration-500 ">
          <p>{letter}</p>
        </a>
      </div>
    </li>
  );
};
export default Hexagon;
