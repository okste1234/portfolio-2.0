"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import Hero from "@/components/shared/Hero";
import { Skeleton } from "@/components/ui/skeleton";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProjects } from "@/lib/actions";

export default function WorksPage() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchAllProjects,
  });

  return (
    <div className="w-full">
      <Hero
        showPath
        title="A list of my completed code projects is provided below."
        description="I've worked on a lot of little projects over the years, but these are my favorites."
      />

      <MaxWidthContainer className="pt-16 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {isPending ? (
            [1, 2, 3, 4, 5, 6].map((_, _key: number) => (
              <Skeleton key={_key} className="aspect-[1.1] w-full rounded-lg" />
            ))
          ) : isError ? (
            <span>Error: {error.message}</span>
          ) : (
            data?.map((project: ProjectCardProp) => (
              <ProjectCard key={project._id} {...project} />
            ))
          )}
        </div>
      </MaxWidthContainer>
    </div>
  );
}
