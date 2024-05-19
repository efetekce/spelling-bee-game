import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import GameBoard from "@/components/GameBoard";

export default function Home() {
  return (
    <>
      <Link
        href="/tr"
        className="absolute top-2 right-2 p-3 bg-white text-black font-semibold rounded-xl"
      >
        TR 🇹🇷
      </Link>
      <h2 className="text-xl font-semibold text-center max-w-screen-sm">
        Welcome to Spelling Bee Game. Timer starts after your first guess. Each
        correct guess saves you 15 seconds. Your guess must be at least 4
        letters and include the center letter. Make the maximum amount of
        guesses using 7 letters from the beehive.
      </h2>
      <GameBoard />
    </>
  );
}
