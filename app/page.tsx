"use client";

import Navbar from "./components/navbar";
import AnimatedIntro from "./components/animatedIntro";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-full py-2 px-4 bg-gradient-to-br from-customGray via-black to-black">
      <header className="">
        <Navbar />
      </header>
      <main>
        <AnimatedIntro />
      </main>
      <footer>
        <div className="flex justify-center font-bold text-customGold mb-5 uppercase">
          KYNG
        </div>
      </footer>
    </div>
  );
}
