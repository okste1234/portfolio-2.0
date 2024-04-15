import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { fetchProjectWithSlug } from "@/lib/actions";

export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const projects: ProjectDescriptionProp = await fetchProjectWithSlug(
    params.slug
  );

  const { overview, highlights, url, name, banner, changelog, description } =
    projects;

  return (
    <div className="w-full">
      <Hero title={name} description={description} />

      <MaxWidthContainer className="pt-16 md:pt-28 max-w-7xl">
        <div className="bg-secondary sm:p-2 border border-b-0">
          <Image
            src={urlForImage(banner)}
            width={1640}
            height={1000}
            alt={name}
            priority
            className="object-contain"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="border p-4 md:p-6">
              <h2 className="text-xl md:text-3xl font-bold">{name}</h2>
            </div>

            <div className="p-4 md:p-6 border border-t-0 space-y-6">
              <p className="text-sm md:text-base">
                <span className="text-primary">Live Preview:</span>{" "}
                <Link
                  href={url}
                  className="pointer text-muted-foreground underline"
                  target="_blank"
                >
                  {url}
                </Link>
              </p>
              {/* overview */}
              <div className="space-y-2">
                <h2 className="text-base md:text-lg leading-none font-semibold">
                  Overview
                </h2>

                {overview?.map((text, _key) => (
                  <p
                    key={_key}
                    className="text-sm md:text-base text-muted-foreground"
                  >
                    {text}
                  </p>
                ))}
              </div>
              {/* features */}
              <div className="space-y-2">
                <h2 className="text-base md:text-lg leading-none font-semibold">
                  Changelog
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Updated on {changelog}
                </p>
              </div>
            </div>
          </div>

          <div className="border border-l border-t-0 lg:border-l-0 lg:border-t p-4 lg:p-6 lg:max-w-sm w-full">
            <div className="space-y-3 mb-6">
              <h2 className="text-base md:text-lg leading-none font-semibold">
                Highlights
              </h2>

              <ul className="list-item space-y-2">
                {highlights?.map((highlight: string, _key: number) => (
                  <li
                    key={_key}
                    className="text-sm md:text-base text-muted-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={url} className="pointer" target="_blank">
              <Button className="w-full rounded pointer">Live Preview</Button>
            </Link>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
