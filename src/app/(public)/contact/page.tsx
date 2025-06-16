import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import type { Metadata } from "next";
import Form from "./_components/form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="relative pb-32">
      <div className="z-50 mx-auto flex w-screen max-w-7xl flex-col items-center justify-center gap-8 pt-12">
        <Badge className="fade-in-0 zoom-in-95 animate-in !bg-indigo-500/15 !text-indigo-500 duration-700">
          We&apos;d love to hear from you!
        </Badge>
        <h1 className="fade-in-0 zoom-in-95 animate-in text-4xl font-bold duration-700">Contact us</h1>
        <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-2xl text-center duration-700">
          Want to get project specifications or pricing? Or just want to ask about one of our services? We&apos;re here
          to get you the best solutions, the fastest.
        </p>
        <Suspense fallback={<div className="h-[432px] w-full" />}>
          <Form />
        </Suspense>
      </div>
    </div>
  );
}
