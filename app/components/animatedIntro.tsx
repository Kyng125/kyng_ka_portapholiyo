import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const lines = [
  "Hi there, I'm Kyng",
  "Welcome to my Portfolio",
  "Which of my skillsets do you want to assess?",
];

const skills = [
  { name: "Programming", link: "/programming" },
  { name: "Writing", link: "/writing" },
  { name: "Social Media", link: "/social-media" }
];

export default function AnimatedIntro() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-white overflow-hidden relative">
      {lines.map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: step === index ? 1 : step > index ? 0 : 0,
            y: step === index ? 0 : step > index ? -50 : 50,
            scale: step === index ? 1 : 0.8,
            filter: step > index ? "brightness(50%)" : "brightness(100%)",
          }}
          transition={{ duration: 1 }}
          className={`absolute text-xl sm:text-3xl ${index === step ? "text-white" : "text-gray-500"}`}
        >
          {text}
        </motion.div>
      ))}
      {step < lines.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 text-white flex flex-col items-center"
        >
          <span>Wait for it...</span>
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      )}
      {step === lines.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute flex space-x-4 mt-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-20 h-20 p-2 min-w-32 text-center flex items-center justify-center font-semibold rounded-full border-2 border-white text-xs sm:text-sm cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-customGold to-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              onClick={() => router.push(skill.link)}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
