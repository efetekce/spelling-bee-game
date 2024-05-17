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
        Switch to Turkish
      </Link>
      Welcome to Spelling Bee Game.
      <GameBoard />
    </>
  );
}
