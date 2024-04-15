"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { fetchExperience } from "@/lib/actions";

export default function ExperienceCard() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["experience"],
    queryFn: fetchExperience,
  });

  return (
    <div className="sm:rounded-3xl sm:bg-secondary w-full lg:max-w-md lg:max-h-[689.5px] flex flex-col justify-between md:gap-4 overflow-hidden sm:p-8 sm:border">
      <h2 className="text-xl">Work Experience</h2>

      <div className="h-full overflow-y-auto">
        {isPending
          ? [1, 2, 3, 4].map((_, _key) => (
              <div
                key={_key}
                className="flex flex-col items-start justify-between gap-3 border-b last:border-b-0 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center space-x-2">
                  <Skeleton className="w-14 h-3" />
                  <Skeleton className="w-3 h-3" />
                  <Skeleton className="w-14 h-3" />
                </div>
                <div className="flex-1 max-w-xl w-full">
                  <Skeleton className="w-60 h-4" />

                  <div className="mt-3 space-y-2">
                    <Skeleton className="w-full h-3" />
                    <Skeleton className="w-[calc(100%-5%)] h-3" />
                    <Skeleton className="w-[calc(100%-20%)] h-3" />
                    <Skeleton className="w-full h-3" />
                    <Skeleton className="w-[calc(100%-30%)] h-3" />
                  </div>
                </div>
              </div>
            ))
          : data?.map((experience: any) => (
              <div
                key={experience._id}
                className="flex flex-col items-start justify-between gap-3 border-b last:border-b-0 py-4 first:pt-0 last:pb-0"
              >
                <span className="text-muted-foreground text-sm">
                  {experience.startDate} to {experience.endDate}
                </span>
                <div className="space-y-2 flex-1 max-w-xl">
                  <p className="font-semibold">
                    {experience.position} at {experience.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-loose">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-end">
        <Button className="rounded" variant="outline">
          Download Resume
        </Button>
      </div>
    </div>
  );
}
