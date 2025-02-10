'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Khand } from "next/font/google";
import AnimatedIntro from "./components/animatedIntro";

const khand = Khand({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Home() {
  const router = useRouter();

const handleNavAboutClick = () => {
  router.push("/about")
}

const handleNavProjectClick = () => {
  router.push("/programming")
}

const handleNavReviewClick = () => {
  router.push("/about")
}

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-full py-2 px-4 bg-gradient-to-br from-customGray via-black to-black">
      <header className="flex flex-row items-center justify-between mx-2">
        <Image
          src="/theLogo.svg"
          alt="Kyng's Logo"
          width={75}
          height={75}
          priority
          className="hover:animate-pulse duration-300"
        />
        <div className="mr-4">
          <ul className={`flex flex-row gap-4 sm:gap-10 md:gap-20 ${khand.className}`}>
            <li className="flex items-center gap-2 hover:cursor-pointer" onClick={handleNavAboutClick}>
              <span className="text-xs">&#8900;</span> About me
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer" onClick={handleNavProjectClick}>
              <span className="text-xs">&#8900;</span> Past projects
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer" onClick={handleNavReviewClick}>
              <span className="text-xs">&#8900;</span> Reviews
            </li>
          </ul>
        </div>
      </header>
      <main><AnimatedIntro /></main>
      <footer><div className="flex justify-center font-bold text-customGold mb-5 uppercase">KYNG</div></footer>
    </div>
  );
}
