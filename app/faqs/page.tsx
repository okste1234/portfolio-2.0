import FAQsSection from "@/components/sections/FAQsSection";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";

export default function FAQSPage() {
  return (
    <div className="w-full">
      <Hero
        showPath
        title="Frequently Asked Questions!"
        description="Find answers to common questions about the developer's work process and availability."
      />
      <MaxWidthContainer className="pt-16 md:pt-28 max-w-7xl">
        <FAQsSection />
      </MaxWidthContainer>
    </div>
  );
}
