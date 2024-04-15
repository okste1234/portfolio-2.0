import { ChevronsDown } from "lucide-react";

import ProjectSection from "@/components/sections/ProjectSection";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import ProjectCard from "@/components/cards/ProjectCard";
import AboutSection from "@/components/sections/AboutSection";
import Heading from "@/components/shared/Heading";
import FAQsSection from "@/components/sections/FAQsSection";
import Image from "next/image";
import FeaturedSection from "@/components/sections/FeaturedSection";
import LatestSection from "@/components/sections/LatestSection";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Image
          src="/frame.svg"
          alt="frame"
          priority
          quality={100}
          width={1205}
          height={900}
          className="-z-10 pointer-events-none select-none absolute inset-0 object-cover w-screen h-[calc(100vh-20%)]"
        />
        <MaxWidthContainer className="pt-10 md:pt-28 flex flex-col">
          <div className="pt-10 md:pt-20 flex items-center flex-col justify-center gap-4 md:gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-center text-shadow">
              Developer Sculpting Exceptional Code Creations.
            </h1>

            <p className="text-sm sm:text-lg italic max-w-prose text-center text-muted-foreground font-semibold">
              Developer with a passion for sculpting exceptional code creations
              and transforming innovative ideas into seamless digital
              experiences.
            </p>

            <div className="flex flex-col items-center mt-2 sm:mt-6">
              <ChevronsDown className="w-9 h-9 text-muted-foreground leading-none animate-bounce duration-1000" />
            </div>
          </div>
        </MaxWidthContainer>
      </div>

      <MaxWidthContainer className="pt-16 md:pt-28 flex flex-col">
        <Heading
          title="Featured Projects"
          subtitle="I've worked on a lot of little projects over the years, but these are my favorites."
        />

        <FeaturedSection />
      </MaxWidthContainer>

      <MaxWidthContainer className="pt-16 md:pt-28 flex flex-col">
        <Heading
          title="Latest Projects"
          subtitle="Here are some of my latest projects"
        />

        <LatestSection />
      </MaxWidthContainer>

      <MaxWidthContainer className="pt-16 md:pt-28 flex flex-col">
        <Heading title="About Me" />

        <AboutSection />
      </MaxWidthContainer>

      <MaxWidthContainer className="pt-16 md:pt-28 max-w-7xl flex-col">
        <Heading
          title="Let's talk"
          subtitle="Need Any Help? Send us a message using the form below and we'll get back to you promptly!"
        />

        <FAQsSection />
      </MaxWidthContainer>
    </div>
  );
}
