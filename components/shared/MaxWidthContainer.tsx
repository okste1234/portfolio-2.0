import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1440px] px-3 md:px-10", className)}>
      {children}
    </div>
  );
}
