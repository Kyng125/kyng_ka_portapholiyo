"use client";

import Navbar from "../components/navbar";
import Options from "../components/options";

export default function Programming() {
  return (
    <body className="grid grid-rows-[auto_1fr_auto] h-screen w-full py-2 px-4 bg-gradient-to-br from-customGray via-black to-black">
      <header className="">
        <Navbar />
      </header>
      <main>
          <p className="text-center p-5 mx-10">
            Hi, I&apos;m Kyng, I&apos;m a Storyteller and Copywriter, I&apos;m a Content
            Marketer and Brand Storyteller, I&apos;m a Developer on the Web and on
            the Blockchain,<br/>I&apos;m... Well, me.
          </p>
        <div className="flex justify-center mt-10">External Links</div>
      </main>
      <footer>
        <div className="flex justify-center font-bold text-customGold mb-5 uppercase">
          KYNG
        </div>
      </footer>
    </body>
  );
}
