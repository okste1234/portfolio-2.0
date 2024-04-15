import MaxWidthContainer from "./MaxWidthContainer";
import Link from "next/link";

import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-28 border-t w-full bg-secondary">
      <MaxWidthContainer className="py-10 flex items-center justify-center md:justify-between text-center md:text-start gap-4 flex-wrap">
        <p className="text-sm sm:text-base text-muted-foreground">
          Copyright © 2023 | Made with ❤️ by Abdullahi Salihu
        </p>

        <div className="flex items-center space-x-2">
          {footerLinks.map((link, _key) => (
            <Link
              href={link.path}
              key={_key}
              className="w-10 h-10 rounded group bg-border pointer flex items-center justify-center"
              title={link.title}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
