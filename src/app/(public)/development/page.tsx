import Image from "next/image";

export default function FullStackDevelopment() {
	return (
		<div className="flex flex-col items-center gap-20 [&_section]:px-8">
			<section className="!px-0 flex w-screen items-center justify-center gap-2 bg-gradient-to-tr from-sky-50 to-indigo-50 py-16">
				<Image
					src="/images/logo.png"
					alt="Max Integrations Logo"
					width={1000}
					height={1000}
					className="fade-in-0 slide-in-from-left-2 w-32 animate-in duration-700"
				/>
				<span className="fade-in-0 slide-in-from-right-2 animate-in font-bold text-4xl duration-700">
					Custom
				</span>
				<h1 className="fade-in-0 slide-in-from-right-2 w-32 animate-in whitespace-nowrap font-bold text-4xl duration-700">
					full-stack apps
				</h1>
			</section>
			<div className="mx-auto max-w-2xl pb-16 text-center font-bold text-2xl text-muted-foreground">
				You&apos;ve reached a feature so new, it doesn&apos;t even have its own
				page yet! Please check back soon.
			</div>
		</div>
	);
}
