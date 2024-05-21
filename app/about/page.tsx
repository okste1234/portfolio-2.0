import AboutSection from "@/components/sections/AboutSection";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";

export default function AboutPage() {
  const title = `Hi there 👋 <br /> My name is Adekunle Stephen Omorotimi, <br /> I'm a Software Developer`;
  const description = `With years of experience in software development. creating custom applications and dApps that empower protocols and businesses through innovative solutions.
  <br />
  Software Developer || Blockchain & Smart Contract | Frontend Engineer | Protocol Research and Development`;

  return (
    <div className="w-full">
      <Hero
        showPath
        title={title}
        description={description}
      />

      <MaxWidthContainer className="pt-16 md:pt-28">
        <AboutSection />
      </MaxWidthContainer>
    </div>
  );
}
