import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopifyDevelopment() {
	return (
		<div className="flex flex-col items-center gap-20 [&_section]:px-8">
			<section className="!px-0 w-screen bg-gradient-to-br from-orange-50 via-fuchsia-50 to-indigo-50 pt-32 pb-32 max-lg:flex-col md:pt-32">
				<div className="mx-auto flex w-screen max-w-7xl justify-center gap-12">
					<div className="flex flex-2 flex-col gap-6 max-lg:text-center">
						<div className="text-5xl md:text-7xl">
							<h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
								Customize your
								<span
									className="fade-in-0 zoom-in-95 inline-block animate-in font-bold duration-700"
									style={{
										background:
											"-webkit-linear-gradient(-35deg, #10b981, #84cc16)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
									}}
								>
									Shopify
								</span>{" "}
								experience
							</h1>
						</div>
						<p className="fade-in-0 zoom-in-95 max-w-lg animate-in text-base text-muted-foreground duration-700 max-md:px-4 md:text-lg">
							We can customize your Shopify experience to your liking. Whether
							you want to add a new feature to your theme, automate your
							business processes, or even build a completely custom Shopify
							admin application, we can engineer a solution{" "}
							<b>made for your store</b>.
						</p>
						<div className="fade-in-0 zoom-in-95 flex w-full animate-in duration-700 max-lg:justify-center">
							<Button
								variant="default"
								size="lg"
								className="bg-indigo-500 hover:bg-indigo-400"
								asChild
							>
								<Link href="/contact?type=shopify&subType=general">
									Contact us about this service
								</Link>
							</Button>
						</div>
					</div>
					<div className="relative flex h-full w-full flex-2 flex-col items-center justify-center gap-8 max-lg:hidden">
						<Image
							src="/images/shopify-logo.png"
							alt="Shopify Logo"
							width={1000}
							height={1000}
							className="fade-in-0 zoom-in-95 slide-in-from-right-12 w-72 animate-in duration-700 ease-in-out"
						/>
					</div>
				</div>
			</section>
			<section className="md:!px-0 mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 lg:grid-cols-2">
				<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-start gap-6 text-start duration-700 ease-in-out">
					<h2 className="font-semibold text-2xl">Theme development</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Have a theme you love, but there&apos;s just something missing? We
						can add new features to your theme, change its functionality, or
						even just modify that one thing that&apos;s been bugging you for so
						long.
					</p>
					<Button variant="link" className="!p-0 !text-indigo-500" asChild>
						<Link href="/contact?type=shopify&subType=theme">
							Ask us about theme development
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="fade-in-0 zoom-in-95 slide-in-from-left-12 flex max-h-64 animate-in flex-col gap-4 overflow-hidden rounded-2xl border border-border p-2 shadow-lg duration-700 ease-in-out">
					<Image
						src="/images/example-shopify.png"
						alt="Cloudflare DNS Configuration"
						width={1000}
						height={1000}
						className="w-full"
					/>
				</div>
			</section>
			<Separator className="w-full" />
			<section
				className="md:!px-0 mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 lg:grid-cols-2"
				id="custom-admin-app"
			>
				<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-start gap-6 text-start duration-700 ease-in-out">
					<h2 className="font-semibold text-2xl">Custom admin app</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						A custom admin app can supercharge your Shopify store&apos;s
						backend. We can build custom tools, dashboards, and integrations
						right into your Shopify admin panel to streamline your workflows,
						automate repetitive tasks, and give you powerful new capabilities
						tailored to your business needs.
					</p>
					<Button variant="link" className="!p-0 !text-indigo-500" asChild>
						<Link href="/contact?type=shopify&subType=app">
							Ask us about custom admin apps
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="fade-in-0 zoom-in-95 slide-in-from-left-12 flex max-h-72 animate-in flex-col gap-4 overflow-hidden rounded-3xl border border-border shadow-lg duration-700 ease-in-out">
					<Image
						src="/images/example-shopify-app.png"
						alt="Shopify admin app"
						width={1000}
						height={1000}
						className="w-full"
					/>
				</div>
			</section>
			<Separator className="w-full" />
			<section
				className="md:!px-0 mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 lg:grid-cols-2"
				id="event-integration"
			>
				<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-start gap-6 text-start duration-700 ease-in-out">
					<h2 className="font-semibold text-2xl">Event integration</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						We can integrate with your Shopify store to trigger events when
						certain things happen, like when a new order is placed, or when a
						customer creates an account. We can then use these events to trigger
						actions in other apps, or even just log them for your own records.
					</p>
					<Button variant="link" className="!p-0 !text-indigo-500" asChild>
						<Link href="/contact?type=shopify&subType=event-integration">
							Ask us about event integration
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="fade-in-0 zoom-in-95 slide-in-from-left-12 flex max-h-72 animate-in flex-col gap-4 overflow-hidden rounded-3xl border border-border px-24 shadow-lg duration-700 ease-in-out">
					<Image
						src="/images/example-shopify-event-integration.png"
						alt="Shopify event integration"
						width={1000}
						height={1000}
						className="w-full"
					/>
				</div>
			</section>
			<section className="md:!px-0 flex w-screen justify-center bg-slate-100 py-16">
				<div className="text-center">
					<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-center gap-6 text-center duration-700 ease-in-out">
						<h2 className="font-semibold text-2xl">
							Want your own customized solution?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							We can build a custom solution for your Shopify store. Whatever
							you&apos;re missing, we&apos;ll build it.
						</p>
						<Button variant="link" className="!p-0 !text-indigo-500" asChild>
							<Link href="/contact?type=shopify&subType=general">
								Let us add what you&apos;re missing
								<ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
