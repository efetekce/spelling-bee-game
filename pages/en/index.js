import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import GameBoard from "@/components/GameBoard";

export default function Home() {
  return (
    <>
      <Link
        href="/tr"
        className="absolute top-2 right-2 p-3 bg-slate-400/70 hover:bg-violet-500 hover:text-slate-100 transition duration-500 shadow-xl  text-black font-semibold rounded-xl"
      >
        <span className="text-xl p-1">➡ TR 🇹🇷</span>
      </Link>

      <GameBoard />
    </>
  );
}
