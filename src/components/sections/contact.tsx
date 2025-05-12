import {
  Clock,
  Code,
  Github,
  IterationCcw,
  Linkedin,
  Mail,
  MessageSquareText,
  Send,
  SendHorizonal,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useSectionContext } from "@/context/section-context";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

export const Contact = () => {
  const { setActiveSection, setSectionsInView } = useSectionContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setActiveSection("contact");
      setSectionsInView((prev) => new Set(prev).add("contact"));
    } else {
      setSectionsInView((prev) => {
        const newSet = new Set(prev);
        newSet.delete("contact");
        return newSet;
      });
    }
  }, [isInView, setActiveSection, setSectionsInView]);
  return (
    <section id="contact" ref={ref} className="py-6 md:px-8 lg:py-12 xl:px-38">
      <div className="container mx-auto space-y-6 px-4 lg:space-y-12">
        <div className="bg-background flex flex-col items-center gap-6 rounded-lg p-6 shadow-sm lg:p-12">
          <MessageSquareText />
          <h3 className="text-center text-2xl font-bold">
            I’d Love to Hear From You
          </h3>
          <p className="text-muted-foreground max-w-3xl text-center">
            Whether you have an idea, need a hand with a project, or just want
            to say hello let’s connect and build something impactful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Clock /> On-Time Delivery
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Code /> Quality Code
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <IterationCcw /> Fast Iterations
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-6">
          <div className="bg-background flex-3 space-y-6 rounded-lg p-6 shadow-sm lg:gap-12 lg:space-y-12 lg:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                placeholder="First Name"
                className="bg-secondary rounded-sm p-6"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-secondary rounded-sm p-6"
              />
              <Input
                placeholder="Last Name"
                className="bg-secondary rounded-sm p-6"
              />
              <Input
                placeholder="Phone Number"
                type="phone"
                className="bg-secondary rounded-sm p-6"
              />
            </div>
            <Textarea
              placeholder="Your message"
              className="bg-secondary rounded-sm p-6"
            />
            <Button variant={"secondary"} size="lg" className="px-12 py-6">
              {" "}
              Send <Send />{" "}
            </Button>
          </div>
          <div className="flex-2 space-y-6">
            <div className="bg-background flex items-center justify-between rounded-lg p-6 shadow-sm">
              <div>
                <h4 className="text-muted-foreground text-sm">
                  You can email me here
                </h4>
                <p className="text-sm">κеіthzano@gmail.com</p>
              </div>

              <SendHorizonal />
            </div>
            <div className="bg-background flex items-center justify-between rounded-lg p-6 shadow-sm">
              <div>
                <h4 className="text-muted-foreground text-sm">
                  Give me a call on
                </h4>
                <p className="text-sm">+27 64 364 3526</p>
              </div>

              <SendHorizonal />
            </div>
            <div className="bg-background flex items-center justify-between rounded-lg p-6 shadow-sm">
              <div>
                <h4 className="text-muted-foreground text-sm">Location</h4>
                <p className="text-sm">Where ever you want me to be</p>
              </div>

              <SendHorizonal />
            </div>
            <div>
              <h4 className="mt-12 mb-4 text-xl">My socials</h4>
              <div className="bg-background flex w-max gap-6 rounded-lg p-6">
                <a
                  href="https://github.com/keithzano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://linkedin.com/in/keithzano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <Mail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
