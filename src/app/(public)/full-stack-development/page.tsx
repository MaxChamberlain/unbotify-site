import Image from "next/image";

export default function FullStackDevelopment() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="flex w-screen items-center justify-center gap-2 bg-gradient-to-tr from-sky-50 to-indigo-50 !px-0 py-16">
        <Image
          src="/images/logo.png"
          alt="Max Integrations Logo"
          width={1000}
          height={1000}
          className="animate-in fade-in-0 slide-in-from-left-2 w-32 duration-700"
        />
        <span className="animate-in fade-in-0 slide-in-from-right-2 text-4xl font-bold duration-700">Custom</span>
        <h1 className="animate-in fade-in-0 slide-in-from-right-2 w-32 text-4xl font-bold whitespace-nowrap duration-700">
          full-stack apps
        </h1>
      </section>
      <div className="text-muted-foreground mx-auto max-w-2xl pb-16 text-center text-2xl font-bold">
        You&apos;ve reached a feature so new, it doesn&apos;t even have its own page yet! Please check back soon.
      </div>
    </div>
  );
}
