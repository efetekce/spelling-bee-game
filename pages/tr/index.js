import GameBoard from "@/components/GameBoard";
import Link from "next/link";

const TurkishPage = () => {
  return (
    <>
      <Link
        href="/en"
        className="absolute top-2 right-2 p-3 bg-white text-black font-semibold rounded-xl"
      >
        <span className="text-5xl">EN↪ →🇬🇧</span>
      </Link>
      <h2>Heceleme oyununa hosgeldin</h2>
      <GameBoard />
    </>
  );
};
export default TurkishPage;
