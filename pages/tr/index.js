import GameBoard from "@/components/GameBoard";
import Link from "next/link";

const TurkishPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link
        href="/en"
        className="absolute top-2 right-2 p-3 bg-white text-black font-semibold rounded-xl"
      >
        Ingilizce
      </Link>
      <GameBoard />
    </div>
  );
};
export default TurkishPage;
