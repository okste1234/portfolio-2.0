"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "My Works",
    path: "/works",
  },
  {
    name: "Let's Talk",
    path: "/contact",
  },
];

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded">
            <AlignJustify className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-20">
            <ul className="flex flex-col">
              {links.map((link) => (
                <Link
                  href={link.path}
                  key={link.path}
                  className={cn(
                    "text-base font-medium hover:text-primary transition-colors pointer py-3 first:pt-0 border-b last:border-b-0",
                    {
                      "text-primary": link.path === pathname,
                      "text-muted-foreground": link.path !== pathname,
                    }
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
