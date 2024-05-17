import GameBoard from "@/components/GameBoard";
import Link from "next/link";

const TurkishPage = () => {
  return (
    <>
      <Link
        href="/en"
        className="absolute top-2 right-2 p-3 bg-white text-black font-semibold rounded-xl"
      >
        EN 🇬🇧
      </Link>
      Heceleme oyununa hosgeldin
      <GameBoard />
    </>
  );
};
export default TurkishPage;
