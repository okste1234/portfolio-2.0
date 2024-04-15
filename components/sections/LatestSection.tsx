"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { fetchLatestProjects } from "@/lib/actions";

export default function LatestSection() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["latest"],
    queryFn: fetchLatestProjects,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
      {isPending ? (
        [1, 2, 3].map((_, _key: number) => (
          <Skeleton key={_key} className="aspect-[1.25] w-full rounded-lg" />
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
