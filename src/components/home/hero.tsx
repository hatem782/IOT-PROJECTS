import { PuzzleIcon, Shapes } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { BackgroundPattern } from "./background-pattern";

export const Hero = () => {
  return (
    <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 xl:px-0">
      <div className="text-center w-full">
        <a
          href="https://www.producthunt.com/posts/shadcn-ui-blocks?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shadcn&#0045;ui&#0045;blocks"
          target="_blank"
          className="relative z-10 w-fit mx-auto block"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=742606&theme=light"
            alt="Shadcn&#0032;UI&#0032;Blocks - Customized&#0032;Shadcn&#0032;UI&#0032;Blocks&#0032;&#0038;&#0032;Components | Product Hunt"
            style={{ width: 250, height: 54 }}
            width="250"
            height="54"
          />
        </a>
        <h1 className="relative z-10 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
          Effortless Shadcn UI Component Previews & Code Snippets
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl sm:max-w-4xl mx-auto">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto"
            asChild
          >
            <Link href="/blocks">
              Explore Blocks{" "}
              <Shapes className="group-hover:-rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="group h-12 text-base z-10 rounded-md w-full md:w-auto"
            variant="outline"
            asChild
          >
            <Link href="/components/accordion">
              View components
              <PuzzleIcon className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <BackgroundPattern />
    </div>
  );
};
