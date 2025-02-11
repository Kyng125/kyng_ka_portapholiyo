"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Khand } from "next/font/google";

const khand = Khand({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function Navbar() {
  const router = useRouter();

  const handleNavAboutClick = () => {
    router.push("/about");
  };

  const handleNavProjectClick = () => {
    router.push("/programming");
  };

  const handleNavReviewClick = () => {
    router.push("/about");
  };

  return (
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
        <ul
          className={`flex flex-row gap-4 sm:gap-10 md:gap-20 ${khand.className}`}
        >
          <li
            className="flex items-center gap-2 hover:cursor-pointer transition-transform duration-300 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customGold hover:to-white"
            onClick={handleNavAboutClick}
          >
            <span className="text-xs">&#8900;</span> About me
          </li>
          <li
            className="flex items-center gap-2 hover:cursor-pointer transition-transform duration-300 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customGold hover:to-white"
            onClick={handleNavProjectClick}
          >
            <span className="text-xs">&#8900;</span> Past projects
          </li>
          <li
            className="flex items-center gap-2 hover:cursor-pointer transition-transform duration-300 ease-linear transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-customGold hover:to-white"
            onClick={handleNavReviewClick}
          >
            <span className="text-xs">&#8900;</span> Reviews
          </li>
        </ul>
      </div>
    </header>
  );
}
