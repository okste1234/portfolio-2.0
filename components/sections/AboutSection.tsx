import AboutCard from "@/components/cards/AboutCard";
import TestimonialsCard from "@/components/cards/TestimonialsCard";
import ExperienceCard from "@/components/cards/ExperienceCard";

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-10 sm:gap-6 lg:flex-row">
      <div className="w-full flex-1 flex flex-col gap-10 sm:gap-6">
        <AboutCard />
        <TestimonialsCard />
      </div>

      <ExperienceCard />
    </div>
  );
}
