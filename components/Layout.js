import GameBoard from "./GameBoard";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <main>{children}</main>
    </div>
  );
};
export default Layout;
