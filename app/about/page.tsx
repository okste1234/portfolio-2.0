import AboutSection from "@/components/sections/AboutSection";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";

export default function AboutPage() {
  const title = `Hi there 👋 <br /> My name is Abdullahi Salihu, <br /> I'm a ReactJs Developer`;

  return (
    <div className="w-full">
      <Hero
        showPath
        title={title}
        description="With years of experience in web development, I specialize in
            creating custom web applications that help businesses achieve their
            goals by adapting innovative solutions."
      />

      <MaxWidthContainer className="pt-16 md:pt-28">
        <AboutSection />
      </MaxWidthContainer>
    </div>
  );
}
