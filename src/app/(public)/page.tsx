import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./_components/feature-card";
import Rating from "./_components/rating";
import Testimonials from "./_components/testimonials";

export default async function Home() {
	return (
		<div className="flex flex-col items-center gap-20 [&_section]:px-8">
			<section className="!px-0 flex w-screen max-w-7xl justify-center gap-12 pt-32 max-lg:flex-col md:pt-32">
				<div className="flex flex-2 flex-col gap-6 max-lg:text-center">
					<div className="text-5xl md:text-7xl">
						<h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
							Find the solutions you&apos;re&nbsp;
							<span
								className="fade-in-0 zoom-in-95 inline-block animate-in pb-1 font-bold duration-700"
								style={{
									background:
										"-webkit-linear-gradient(-35deg, #8B5CF6, #F472B6, #60A5FA)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								looking for
							</span>
						</h1>
					</div>
					<p className="fade-in-0 zoom-in-95 animate-in text-base text-muted-foreground duration-700 md:text-lg">
						From custom web apps to infrastructure configuration,
						<br />
						shopify themes to custom analytics on your users,
						<br /> we&apos;ve got you covered.
					</p>
					<Rating />
					<div className="fade-in-0 zoom-in-95 flex w-full animate-in duration-700 max-lg:justify-center">
						<Button
							variant="default"
							size="lg"
							className="w-full max-w-[12rem] bg-indigo-500 hover:bg-indigo-400"
							asChild
						>
							<Link href="/contact">Get in touch</Link>
						</Button>
					</div>
				</div>
				<div className="-translate-x-24 relative flex h-full w-full flex-2 flex-col gap-8 opacity-60 max-lg:hidden">
					<video autoPlay muted preload="none" className="absolute inset-0">
						<source src="/videos/hero-blob.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>
			<section className="!px-0 w-full max-w-7xl max-md:hidden">
				<Badge
					variant="outline"
					className="fade-in-0 zoom-in-95 group flex animate-in cursor-pointer select-none items-center gap-4 rounded-full px-4 py-2 font-extralight text-muted-foreground text-sm transition-colors duration-700 hover:bg-muted"
				>
					Just added: Custom Shopify admin app development
					<ChevronRight className="transition-all duration-300 group-hover:translate-x-1" />
				</Badge>
			</section>
			<section className="w-screen gap-6 py-12">
				<div className="fade-in-0 zoom-in-95 mx-auto flex w-full max-w-7xl animate-in flex-col gap-6 duration-700">
					<div className="flex flex-col">
						<h2 className="font-bold text-indigo-500 text-xl">
							Used by some, loved by all
						</h2>
						<p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground text-sm duration-700">
							We&apos;ve worked with a variety of clients, from startups to
							established companies.
						</p>
					</div>
					<div
						className="fade-in-0 grid animate-in grid-cols-1 place-items-center gap-x-36 gap-y-8 duration-700 max-md:gap-y-12 max-md:px-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
						style={{
							filter:
								"invert(63%) sepia(25%) saturate(357%) hue-rotate(192deg) brightness(89%) contrast(98%)",
						}}
					>
						<Image
							src="/images/maven-lane-logo.png"
							width={320}
							height={81}
							alt="Maven Lane Logo"
						/>
						<Image
							src="/images/max-autolytics-logo.png"
							width={320}
							height={43}
							alt="Max Autolytics Logo"
						/>
						<Image
							src="/images/vitality-logo.avif"
							width={320}
							height={31}
							alt="Vitality Logo"
						/>
						<Image
							src="/images/cost-my-formula-logo.png"
							width={320}
							height={52}
							alt="Cost My Formula Logo"
						/>
						<Image
							src="/images/jc-max-consulting-logo.png"
							width={320}
							height={36}
							alt="Cost My Formula Logo"
						/>
						<Image
							src="/images/shurhold-industries-logo.png"
							width={320}
							height={33}
							alt="Shurhold Industries Logo"
						/>
					</div>
				</div>
			</section>
			<section className="max-md:!px-0 w-screen gap-6 bg-muted pt-16 pb-12">
				<div className="fade-in-0 zoom-in-95 z-50 mx-auto flex w-full max-w-7xl animate-in flex-col gap-6 duration-700">
					<div className="max-md:!px-4 z-50 flex flex-col">
						<h2 className="font-bold text-indigo-500 text-xl">Our services</h2>
						<p className="fade-in-0 zoom-in-95 animate-in text-primary text-sm duration-700">
							We offer a range of services to help you start, protect, and grow
							your business.
						</p>
					</div>
					<div className="fade-in-0 max-md:!px-4 flex animate-in gap-12 overflow-x-scroll scroll-smooth pb-4 duration-700">
						<FeatureCard
							title="Cloudflare configuration"
							description="Use the full power of Cloudflare's DNS & CDN features — whether you're new, or migrating."
							image={{
								src: "/images/example-dns.png",
								alt: "DNS Example",
								width: 1024,
								height: 256,
								offsetX: "6rem",
								offsetY: "13rem",
							}}
							features={[
								{
									text: "Configure your DNS records to point to your site, including mail and verification records",
									shopifyRelated:
										"We can configure your DNS records, either fresh, or from your existing provider, to work in harmony with Shopify.",
								},
								{
									text: "Optimize your site's content delivery with Cloudflare's CDN features, like cacheing and compression",
									shopifyRelated:
										"We can configure your cache and compression settings to ensure your site doesn't interfere with Shopify's CDN features.",
									wordpressRelated:
										"We can configure your cache and compression settings to speed up your WordPress site's content delivery.",
								},
								{
									text: "Protect your site from target attacks, like bots, DDOS attacks, and password brute forcers",
									shopifyRelated:
										"We can configure your web application firewall to stop the type of bots that continuously add items to their cart and checkout, without actually purchasing them.",
								},
							]}
							link={{
								text: "Optimize your DNS",
								href: "/cloudflare-instance-configuration",
							}}
						/>
						<FeatureCard
							title="Shopify development"
							description="Get the most use out of your Shopify store with custom theme development, apps, and more."
							image={{
								src: "/images/example-shopify.png",
								alt: "Shopify Example",
								width: 300,
								height: 256,
								offsetX: "0rem",
								offsetY: "2rem",
							}}
							features={[
								{
									text: "Make changes, add features, and customize your store's theme to perfection",
								},
								{
									text: "Create a custom Shopify admin app to streamline and enhance your business operations",
								},
								{
									text: "Integrate with Shopify's functions, like when a customer is created, or a new order is placed",
								},
							]}
							link={{
								text: "Customize your store",
								href: "/shopify-development",
							}}
						/>
						<FeatureCard
							title="Enhanced user analytics"
							description="Understand everything your users do, why it's done, and where they do it."
							image={{
								src: "/images/example-analytics.png",
								alt: "Analytics Example",
								width: 420,
								height: 300,
								offsetX: "-4rem",
								offsetY: "8rem",
							}}
							features={[
								{
									text: "Go beyond basic analytics to understand your users' behavior, and how to improve it",
								},
								{
									text: "Track anything you want, no matter the complexity of what you're tracking",
								},
								{
									text: "Breakdown your users by any criteria you want, like location, whether they purchased a specific item, and more",
								},
							]}
							link={{
								text: "Analyze your users",
								href: "/enhanced-user-analytics",
							}}
						/>
						<FeatureCard
							title="Custom full stack apps"
							description="Have your ideas realized with custom full stack apps, built from scratch by our team to your specifications."
							image={{
								src: "/images/example-full-stack.png",
								alt: "Full Stack Example",
								width: 300,
								height: 256,
								offsetX: "0rem",
								offsetY: "8rem",
							}}
							features={[
								{
									text: "Build a custom full stack app, with your vision in mind, and your processes at heart",
								},
								{
									text: "Have full control over the app's architecture, from the data to the design",
								},
								{
									text: "Integrate with any system you want, whether it's Stripe, Google Sheets, or a Shopify",
								},
							]}
							link={{
								text: "Build your app",
								href: "/custom-full-stack-apps",
							}}
						/>
						<div className="w-screen max-w-lg" />
					</div>
				</div>
			</section>
			<section className="w-screen gap-6 pb-12">
				<div className="fade-in-0 zoom-in-95 z-50 mx-auto flex w-full max-w-7xl animate-in flex-col gap-6 duration-700">
					<div className="z-50 flex flex-col">
						<h2 className="font-bold text-indigo-500 text-xl">
							Don&apos;t take our word for it
						</h2>
						<p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground text-sm duration-700">
							We&apos;ve worked with a variety of clients, from startups to
							established companies. Here&apos;s what they have to say about us.
						</p>
					</div>
					<Testimonials />
				</div>
			</section>
		</div>
	);
}
