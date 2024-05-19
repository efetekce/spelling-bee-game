import GameBoard from "@/components/GameBoard";
import Link from "next/link";

const TurkishPage = () => {
  return (
    <>
      <Link
        href="/en"
        className="absolute top-2 right-2 p-3 bg-slate-200/70 text-black font-semibold rounded-xl shadow-xl"
      >
        <span className="text-4xl p-4">
          EN
          <br />
          ↪🇬🇧
        </span>
      </Link>

      <GameBoard />
    </>
  );
};
export default TurkishPage;
