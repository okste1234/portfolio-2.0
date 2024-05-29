import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  name,
  slug,
  projectBanner,
  description,
}: ProjectCardProp) {
  return (
    <Link href={`/works/${slug}`} className="pointer">
      <div className="sm:bg-secondary rounded-lg border group overflow-hidden">
      <div className="w-full aspect-[1.5] border-b">
        <Image
          src={urlForImage(projectBanner)}
          alt={name}
          width={666}
          height={200}
          quality={100}
          priority
          className="w-full h-full object-cover transition-all grayscale group-hover:grayscale-0"
            // extra css classes = grayscale group-hover:grayscale-0
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="pointer w-max">
          <h2 className="text-base sm:text-lg font-semibold w-max">{name}</h2>
        </div>
        <p className="truncate text-muted-foreground text-sm sm:text-base">
          {description}
        </p>
      </div>
      </div>
    </Link> 
  );
}
