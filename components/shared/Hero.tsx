"use client";

import { ArrowRight, CornerDownLeft } from "lucide-react";
import MaxWidthContainer from "./MaxWidthContainer";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { removeLeadingSlash } from "@/lib/utils";

export default function Hero({ title, description, showPath }: HeroTypes) {
  const pathname = usePathname();
  const currentPath = removeLeadingSlash(pathname as string);

  return (
    <div className="w-full py-10 md:py-20 bg-secondary border-b">
      <MaxWidthContainer className="space-y-4 max-w-7xl">
        {showPath ? (
          <div className="flex items-center gap-x-3">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors text-sm pointer"
            >
              Home
            </Link>{" "}
            <ArrowRight className="w-3 h-3" />{" "}
            <p className="text-sm capitalize">{currentPath}</p>
          </div>
        ) : (
          <Link href="/works" className="flex items-center text-sm">
            <CornerDownLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        )}
        <div className="flex lg:items-center justify-between flex-col gap-x-20 gap-y-5 lg:flex-row">
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            className="w-full lg:max-w-xl text-2xl md:text-3xl lg:text-4xl font-black lg:leading-[45px]"
          />

          <p className="flex-1 text-sm sm:text-base leading-6 md:leading-7 text-muted-foreground max-w-lg">
            {description}
          </p>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
