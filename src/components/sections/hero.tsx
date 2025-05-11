import { FC } from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export const Hero: FC = () => {
  const headline = "I build web stuff in exchange for money";
  const letter = headline.split("");
  const paragraph =
    "I'm a software developer who’s been turning caffeine into code since 2020. I'll build your website as long as you don’t ask for “something like Airbnb but simpler.” I treat Stack Overflow like a second brain, then duct-tape answers together until something shippable emerges. ✨ It's not a bug, it's a feature ✨";
  const words = paragraph.split(" ");
  const handleClick = () => {
    window.open("/documents/keith zanorehamba cv.pdf", "_blank");
  };
  return (
    <section className="py-6 md:px-8 lg:py-12 xl:px-38">
      <div className="container mx-auto flex h-screen flex-col justify-center space-y-6 px-4 lg:space-y-12">
        <h1 className="text-foreground space-y-3 text-xl lg:max-w-3xl">
          Hi I am Keith Zano <br />
          {letter.map((letter, index) => (
            <motion.span
              initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
              whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 * index }}
              key={index}
              viewport={{ once: false }}
              className="text-foreground font-tight max-w-3xl text-[clamp(40px,8vw,80px)] leading-none font-bold"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-foreground max-w-lg leading-relaxed font-medium md:text-xl">
          {words.map((word, index) => (
            <motion.span
              initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
              animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              key={index}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>
        <div className="space-x-6">
          <Button onClick={handleClick} className="p-6" variant={"outline"}>
            Open my CV
          </Button>
          <Button className="p-6">Schedule meeting</Button>
        </div>
      </div>
    </section>
  );
};
