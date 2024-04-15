"use client";

import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { answerHasLink } from "@/lib/utils";
import { fetchFAQs } from "@/lib/actions";

export default function FAQsSection() {
  const router = useRouter();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFAQs,
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {isPending
          ? [1, 2, 3, 4, 5, 6].map((_, _key) => (
              <Skeleton className="w-full h-[52px] rounded-sm" key={_key} />
            ))
          : data?.map((faq: any) => (
              <Accordion type="single" collapsible key={faq._id}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: answerHasLink(faq.answer),
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
      </div>

      <div className="border rounded-sm p-5 mt-14 flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded border h-12 w-12 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-lg font-medium">Still Need Help?</h2>
            <p className="text-sm text-muted-foreground">
              Can&apos;t find the answer here?
            </p>
          </div>
        </div>

        <Button
          onClick={() => router.push("/contact")}
          variant="secondary"
          className="rounded border w-full sm:w-max"
        >
          Send a Message <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
