import { FolderCode, Laugh } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { BackgroundPattern } from "./background-pattern";

export const Hero = () => {
  return (
    <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 xl:px-0">
      <div className="text-center w-full">
        <h1 className="relative z-10 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
          IoT Sketch Codes and Tutorials
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl sm:max-w-4xl mx-auto">
          Welcome to <strong>IoT Sketch Codes and Tutorials</strong>, your
          one-stop destination for IoT enthusiasts! This website features a
          collection of Arduino sketches, demonstrations, and step-by-step
          tutorials for a variety of IoT projects.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto"
            asChild
          >
            <Link href="/blocks">
              Explore Projects{" "}
              <FolderCode className="group-hover:-rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto"
            variant="outline"
            asChild
          >
            <Link href="/components/accordion">
              Became a Contributor{" "}
              <Laugh className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <BackgroundPattern />
    </div>
  );
};
