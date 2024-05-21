import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TanstackProvider from "@/providers/TanstackProvider";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adekunle Stephen",
  description: "My simple Portfolio app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <TanstackProvider>
          <Header />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
