import { FC } from "react";
import { Button } from "../ui/button";

export const Hero: FC = () => {
  return (
    <section className="py-6 md:px-8 lg:py-12 xl:px-38">
      <div className="container mx-auto flex h-screen flex-col justify-center space-y-6 px-4 lg:space-y-12">
        <h1 className="text-foreground space-y-3 text-xl lg:max-w-3xl">
          Hi I am Keith Zano <br />
          <span className="text-foreground font-tight max-w-3xl text-[clamp(40px,8vw,80px)] leading-none font-bold">
            I build web stuff in exchange for money
          </span>
        </h1>
        <p className="text-foreground max-w-lg leading-relaxed font-medium md:text-xl">
          I'm a software developer who’s been turning caffeine into code since
          2020. I'll build your website—as long as you don’t ask for “something
          like Airbnb but simpler.” I treat Stack Overflow like a second brain,
          then duct-tape answers together until something shippable emerges. ✨
          It's not a bug, it's a feature ✨
        </p>
        <div className="space-x-6">
          <Button size={"lg"} variant={"outline"}>
            Download my cv
          </Button>
          <Button>Schedule meeting</Button>
        </div>
      </div>
    </section>
  );
};
