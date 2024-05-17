import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import GameBoard from "@/components/GameBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link
        href="/tr"
        className="absolute top-2 right-2 p-3 bg-white text-black font-semibold rounded-xl"
      >
        TR 🇹🇷
      </Link>
      Welcome to Spelling Bee Game. Timer starts after your first guess. Each
      correct guess saves you 15 seconds. Your guess must be at least 4 letters
      and include the center letter. Make the maximum amount of guesses using 7
      letters from the beehive.
      <GameBoard />
    </>
  );
}
