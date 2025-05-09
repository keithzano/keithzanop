import { FC } from "react";
import { Button } from "../ui/button";

export const Hero: FC = () => {
  return (
    <section className="py-6 md:px-8 lg:py-12 xl:px-38">
      <div className="container mx-auto flex h-screen flex-col justify-center space-y-6 px-4 lg:space-y-12">
        <h1 className="text-foreground space-y-3 text-xl lg:max-w-3xl">
          Hi I am Keith Zano <br />
          <span className="text-foreground font-tight max-w-3xl text-[clamp(40px,8vw,80px)] leading-none font-bold">
            I Build web stuff in exchange for money.
          </span>
        </h1>
        <p className="text-foreground max-w-lg leading-relaxed font-medium md:text-xl">
          I am a software developer who has been turning caffein in code since
          2020. Will build your website if you promise not to ask for ‘something
          like Airbnb but simpler’. “I search Stack Overflow like it’s my job
          (wait, it is). Then I stitch together answers until the code works. ✨
          Art ✨”
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
