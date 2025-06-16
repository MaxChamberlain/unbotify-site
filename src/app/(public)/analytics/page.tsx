import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
};

export default function EnhancedUserAnalytics() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="flex w-screen items-center justify-center gap-2 bg-gradient-to-tr from-sky-50 to-indigo-50 !px-0 py-16">
        <Image
          src="/images/logo.png"
          alt="Max Integrations Logo"
          width={1000}
          height={1000}
          className="fade-in-0 slide-in-from-left-2 animate-in w-32 duration-700"
          priority
        />
        <span className="fade-in-0 slide-in-from-right-2 animate-in text-4xl font-bold duration-700">Enhanced</span>
        <h1 className="fade-in-0 slide-in-from-right-2 animate-in w-32 text-4xl font-bold duration-700">analytics</h1>
      </section>
      <div className="text-muted-foreground mx-auto max-w-2xl pb-16 text-center text-2xl font-bold">
        You&apos;ve reached a feature so new, it doesn&apos;t even have its own page yet! Please check back soon.
      </div>
    </div>
  );
}
