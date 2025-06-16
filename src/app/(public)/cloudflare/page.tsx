import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CloudflareInstanceConfiguration() {
	return (
		<div className="flex flex-col items-center gap-20 [&_section]:px-8">
			<section className="!px-0 w-screen bg-gradient-to-br from-orange-50 via-fuchsia-50 to-indigo-50 pt-32 pb-32 max-lg:flex-col md:pt-32">
				<div className="mx-auto flex w-screen max-w-7xl justify-center gap-12">
					<div className="flex flex-2 flex-col gap-6 max-lg:text-center">
						<div className="text-5xl md:text-7xl">
							<h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
								Set up your
								<span
									className="fade-in-0 zoom-in-95 inline-block animate-in font-bold duration-700"
									style={{
										background:
											"-webkit-linear-gradient(-35deg, #f97316, #f59e0b)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
									}}
								>
									Cloudflare
								</span>{" "}
								instance
							</h1>
						</div>
						<p className="fade-in-0 zoom-in-95 max-w-lg animate-in text-base text-muted-foreground duration-700 max-md:px-4 md:text-lg">
							We can set up your Cloudflare instance, whether you&apos;re using
							Shopify or WordPress, or a even a completely custom application.
							It doesn&apos;t matter if you want to transfer a domain, or set up
							a new one, we can help.
						</p>
						<div className="fade-in-0 zoom-in-95 flex w-full animate-in duration-700 max-lg:justify-center">
							<Button
								variant="default"
								size="lg"
								className="bg-indigo-500 hover:bg-indigo-400"
								asChild
							>
								<Link href="/contact?type=cloudflare&subType=general">
									Contact us about this service
								</Link>
							</Button>
						</div>
					</div>
					<div className="relative flex h-full w-full flex-2 flex-col items-center justify-center gap-8 max-lg:hidden">
						<Image
							src="/images/cloudflare-logo.png"
							alt="Cloudflare Logo"
							width={1000}
							height={1000}
							className="fade-in-0 zoom-in-95 slide-in-from-right-12 w-96 animate-in duration-700 ease-in-out"
						/>
					</div>
				</div>
			</section>
			<section className="md:!px-0 mx-auto grid w-screen max-w-7xl grid-cols-1 gap-16 py-16 lg:grid-cols-2">
				<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-start gap-6 text-start duration-700 ease-in-out">
					<h2 className="font-semibold text-2xl">DNS Configuration</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Get your DNS configuration set up quickly and easily. We can set up
						your DNS configuration to ensure your site is always up and running.
						Have internal subdomains, like{" "}
						<code className="whitespace-nowrap rounded-md bg-muted px-1">
							api.yourdomain.com
						</code>
						, or
						<code className="whitespace-nowrap rounded-md bg-muted px-1">
							blog.yourdomain.com
						</code>
						? We can set that up for you too.
					</p>
					<Button variant="link" className="!p-0 !text-indigo-500" asChild>
						<Link href="/contact?type=cloudflare&subType=dns">
							Ask us about Cloudflare DNS configuration
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="fade-in-0 zoom-in-95 slide-in-from-left-12 flex max-h-64 animate-in flex-col gap-4 overflow-hidden rounded-2xl border border-border shadow-lg duration-700 ease-in-out">
					<Image
						src="/images/example-dns.png"
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
				id="shopify"
			>
				<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-start gap-6 text-start duration-700 ease-in-out">
					<div className="flex items-center gap-2">
						<Image
							src="/images/shopify-logo.png"
							alt="Shopify Logo"
							width={100}
							height={100}
							className="w-12"
						/>
						<h2 className="font-semibold text-2xl">
							Shopify DNS Configuration
						</h2>
					</div>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Link your Cloudflare instance with Shopify&apos;s Cloudflare
						instance, creating a seamless integration between the two, and
						allowing you to use Cloudflare&apos;s powerful features like Web
						Application Firewall and DNS without interrupting Shopify&apos;s
						setup. With this setup, you can use Cloudflare&apos;s Web
						Application Firewall to stop those pesky bots from accessing your
						store
					</p>
					<Button variant="link" className="!p-0 !text-indigo-500" asChild>
						<Link href="/contact?type=cloudflare&subType=shopify">
							Ask us about Shopify x Cloudflare
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="fade-in-0 zoom-in-95 slide-in-from-left-12 flex animate-in flex-col gap-4 overflow-hidden rounded-3xl border border-border shadow-lg duration-700 ease-in-out">
					<Image
						src="/images/example-shopify-dns.png"
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
				id="anti-attack"
			>
				<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-start gap-6 text-start duration-700 ease-in-out">
					<h2 className="font-semibold text-2xl">Anti-attack protection</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						With Cloudflare&apos;s Web Application Firewall, DDoS protection,
						Rate limiting, and other powerful features, you can protect your
						store from attacks. For anything from brute force attacks to DDoS
						attacks, and even intelligent bot attacks, we can get your site
						protected with Cloudflare&apos;s impressive catalog of anti-attack
						features.
					</p>
					<Button variant="link" className="!p-0 !text-indigo-500" asChild>
						<Link href="/contact?type=cloudflare&subType=attack-protection">
							Ask us about attack protection
							<ChevronRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="fade-in-0 zoom-in-95 slide-in-from-left-12 flex max-h-72 animate-in flex-col gap-4 overflow-hidden rounded-3xl border border-border p-2 shadow-lg duration-700 ease-in-out">
					<Image
						src="/images/example-cloudflare-attack-protection.png"
						alt="Cloudflare DNS Configuration"
						width={1000}
						height={1000}
						className="-translate-y-24 w-full"
					/>
				</div>
			</section>
			<section className="md:!px-0 flex w-screen justify-center bg-slate-100 py-16">
				<div className="text-center">
					<div className="fade-in-0 zoom-in-95 slide-in-from-right-12 flex max-w-xl animate-in flex-col items-center gap-6 text-center duration-700 ease-in-out">
						<h2 className="font-semibold text-2xl">
							Don&apos;t want to do it yourself?
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							We can set up your Cloudflare instance for you. Simply contact us,
							and we can work out all the details. Things can move even faster
							if you make a Cloudflare account ahead of time.
						</p>
						<Button variant="link" className="!p-0 !text-indigo-500" asChild>
							<Link href="/contact?type=cloudflare&subType=general">
								Let us do the work
								<ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button className="!bg-indigo-500 hover:!bg-indigo-400" asChild>
							<Link
								href="https://dash.cloudflare.com/sign-up?utm_source=maxintegrations.net"
								target="_blank"
							>
								Set up a Cloudflare account
								<ExternalLink className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
