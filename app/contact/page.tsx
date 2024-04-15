"use client";

import ContactCard from "@/components/cards/ContactCard";
import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { contactData } from "@/lib/constants";

import Link from "next/link";

export default function ContactPage() {
  const title = `Need Any help? <br /> We're Here For You.`;
  return (
    <div className="w-full">
      <Hero
        showPath
        title={title}
        description="I've received good feedback from customers, and I'd love to hear your thoughts. For access to the upload a feedback feature, kindly get in touch with me."
      />
      <div className="pt-10 md:pt-20">
        <MaxWidthContainer className="flex flex-col md:flex-row gap-10 max-w-7xl">
          <div className="flex flex-col">
            <div className="space-y-2">
              <p className="pl-3 border-l border-blue-500 text-sm">
                Want to work with me?
              </p>
              <h1 className="text-xl md:text-2xl font-black">Get in Touch!</h1>

              <p className="text-[15px] max-w-xl text-muted-foreground">
                Need Any Help? Send us a message using the form below and
                we&apos;ll get back to you promptly!
              </p>
            </div>

            <div className="border-t mt-6 pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {contactData.map((data) => (
                <Link
                  href={data.path}
                  key={data.path}
                  className="flex items-center gap-3 pointer"
                >
                  <div className="bg-secondary h-12 w-12 rounded border flex items-center justify-center">
                    <span dangerouslySetInnerHTML={{ __html: data.icon }} />
                  </div>
                  <div>
                    <h2 className="text-base font-bold">{data.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {data.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <ContactCard />
        </MaxWidthContainer>
      </div>
    </div>
  );
}
