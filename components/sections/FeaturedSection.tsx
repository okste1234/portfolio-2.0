"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { fetchFavoriteProjects } from "@/lib/actions";

export default function FeaturedSection() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["featured"],
    queryFn: fetchFavoriteProjects,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
      {isPending ? (
        [1, 2].map((_, _key: number) => (
          <Skeleton key={_key} className="aspect-[1.3] w-full rounded-lg" />
        ))
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        data?.map((project: ProjectCardProp) => (
          <ProjectCard key={project._id} {...project} />
        ))
      )}
    </div>
  );
}
