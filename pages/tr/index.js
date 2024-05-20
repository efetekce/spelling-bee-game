import GameBoard from "@/components/GameBoard";
import Link from "next/link";

const TurkishPage = () => {
  return (
    <>
      <Link
        href="/en"
        className="absolute top-2 right-2 p-3 bg-slate-400/70 hover:bg-violet-500 hover:text-slate-100 transition duration-500 text-black font-semibold rounded-xl shadow-xl"
      >
        <span className="text-xl p-1">EN 🇬🇧</span>
      </Link>

      <GameBoard />
    </>
  );
};
export default TurkishPage;
