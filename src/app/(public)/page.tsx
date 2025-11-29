import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  ChevronRight,
  CircleAlert,
  CreditCard,
  DatabaseZap,
  DollarSign,
  LogOut,
  Mail,
  ShoppingCart,
  Receipt,
  Wrench,
  Hourglass,
  ShieldAlert,
  Globe,
  ShieldCheck,
  LockIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import FeatureCard from "./_components/feature-card";
import type { Metadata } from "next";

interface AttackStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const metadata: Metadata = {
  title: "Shopify Bot Protection & Analytics Shield",
};

const ATTACK_STEPS: AttackStep[] = [
  {
    number: 1,
    title: "Session Initiation",
    description:
      "The bot enters the site, often routing traffic through residential ISPs (like compromised home routers) to appear as a legitimate household.",
    icon: <AlertCircle className="size-5 text-red-600" />,
    color: "from-red-200 to-red-300",
  },
  {
    number: 2,
    title: "Cart Activity",
    description: 'It adds multiple items to the cart specifically to create an "Active Cart Session".',
    icon: <ShoppingCart className="size-5 text-red-900" />,
    color: "from-red-300 to-red-400",
  },
  {
    number: 3,
    title: "The Abandonment",
    description:
      'It leaves the cart at the checkout phase, deliberately triggering "Added to Cart" and "Reached Checkout" pixels which skews your analytics.',
    icon: <LogOut className="size-5 text-red-100" />,
    color: "from-red-400 to-red-500",
  },
  {
    number: 4,
    title: "Data Poisoning",
    description:
      'It injects fake emails into newsletter popups and "Contact Us" forms, inflating your marketing platform costs.',
    icon: <Mail className="size-5 text-red-100" />,
    color: "from-red-500 to-red-600",
  },
  {
    number: 5,
    title: "Financial Fraud",
    description: "In extreme cases, the bot executes fraudulent orders resulting in costly chargebacks.",
    icon: <CreditCard className="size-5 text-red-100" />,
    color: "from-red-600 to-red-700",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 [&_section]:px-8">
      <section className="flex w-screen max-w-7xl justify-center gap-12 !px-0 pt-32 max-lg:flex-col md:pt-32">
        <div className="flex flex-2 flex-col gap-6 max-lg:text-center">
          <div className="text-5xl md:text-7xl">
            <h1 className="fade-in-0 zoom-in-95 animate-in font-bold duration-700">
              Stopping <p className="hidden">Shopify</p> bot traffic
              <br />
              <span
                className="fade-in-0 zoom-in-95 animate-in inline-block pb-1 font-bold duration-700"
                style={{
                  background: "-webkit-linear-gradient(-35deg, #8B5CF6, #F472B6, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                at the door
              </span>
            </h1>
          </div>
          <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground max-w-lg text-base duration-700 md:text-lg">
            Unbotify manages your Web Application Firewall and Bot Protection, stopping malicious traffic from touching
            your site, dirtying your analytics, inflating your mailing lists, and hurting your ROAS.
          </p>
          <div className="fade-in-0 zoom-in-95 animate-in flex w-full duration-700 max-lg:justify-center">
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
        <div className="relative flex h-full w-full flex-2 -translate-x-8 flex-col gap-8 opacity-60 max-lg:hidden">
          <video autoPlay muted preload="none" className="absolute inset-0">
            <source src="/videos/hero-blob.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="w-full max-w-7xl !px-0 max-md:hidden">
        <Link href="/#discovery-problem">
          <Badge
            variant="outline"
            className="fade-in-0 zoom-in-95 group animate-in text-muted-foreground hover:bg-muted flex cursor-pointer items-center gap-4 rounded-full px-4 py-2 text-sm font-extralight transition-colors duration-700 select-none"
          >
            Learn about the Shopify bot problem
            <ChevronRight className="transition-all duration-300 group-hover:translate-x-1" />
          </Badge>
        </Link>
      </section>
      <section className="w-screen gap-6">
        <div className="fade-in-0 zoom-in-95 animate-in mx-auto flex w-full max-w-7xl flex-col gap-6 duration-700">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-indigo-500">Who uses Unbotify?</h2>
            <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground text-sm duration-700">
              We&apos;ve worked with a variety of clients, from startups to established companies.
            </p>
          </div>
          <div
            className="fade-in-0 animate-in grid grid-cols-1 place-items-center gap-x-36 gap-y-8 duration-700 max-md:gap-y-12 max-md:px-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            style={{
              filter: "invert(63%) sepia(25%) saturate(357%) hue-rotate(192deg) brightness(89%) contrast(98%)",
            }}
          >
            <Image src="/images/maven-lane-logo.png" width={320} height={81} alt="Maven Lane Logo" />
            <Image src="/images/max-autolytics-logo.png" width={320} height={43} alt="Max Autolytics Logo" />
            <Image src="/images/vitality-logo.avif" width={320} height={31} alt="Vitality Logo" />
            <Image src="/images/cost-my-formula-logo.png" width={320} height={52} alt="Cost My Formula Logo" />
            <Image src="/images/jc-max-consulting-logo.png" width={320} height={36} alt="JC Max Consulting Logo" />
            <Image src="/images/shurhold-industries-logo.png" width={320} height={33} alt="Shurhold Industries Logo" />
            <Image src="/images/dash-logo.png" width={206} height={40} alt="Dash Logo" />
            <Image
              src="/images/morgana-magick-spells-logo.webp"
              width={206}
              height={40}
              alt="Morgana Magick Spells Logo"
            />
          </div>
        </div>
      </section>
      <section className="bg-muted w-screen gap-6 pt-16 pb-12 max-md:!px-0">
        <div className="fade-in-0 zoom-in-95 animate-in z-50 mx-auto flex w-full max-w-7xl flex-col gap-6 duration-700">
          <div className="z-50 flex flex-col max-md:!px-4">
            <h2 className="text-lg font-bold text-indigo-500" id="discovery-problem">
              Understanding the problem
            </h2>
            <p className="fade-in-0 zoom-in-95 animate-in text-primary text-sm duration-700">
              Learn about Shopify bot traffic, and how it can damage your business.
            </p>
          </div>
          <Card className="overflow-hidden !pb-0">
            <CardContent className="p-0 !pb-0">
              <h3 className="px-6 text-base font-bold">What Does This Cost Me?</h3>
              <div>
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The cost of this bot traffic is hidden in your marketing bills, analytics, and ad spend.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FeatureCard
              title="Inflated Marketing Bills"
              description="Bots inject fake emails into your marketing platforms like Klaviyo and MailChimp, forcing you to pay for profiles that will never convert. These fake subscribers bloat your lists and drain your budget month after month."
              image={{
                src: "/images/example-klaviyo.png",
                alt: "Example of inflated marketing bills",
                width: 1024,
                height: 768,
                offsetX: "2rem",
                offsetY: "7rem",
              }}
              features={[
                {
                  text: "Your marketing lists are bloated with fake emails.",
                },
                {
                  text: "Your email reputation gets ruined, and your emails end up in spam folders.",
                },
                {
                  text: "Your campaigns cost more money to send, without any potential ROI increase.",
                },
              ]}
              link={{
                text: "Uninflate your marketing bills",
                href: "/contact",
              }}
            />
            <FeatureCard
              title="Destroyed Analytics"
              description="When bot traffic floods your store, your conversion rates plummet and your data becomes worthless. You can't trust your metrics to make informed decisions about inventory, marketing spend, or website improvements."
              image={{
                src: "/images/example-analytics.png",
                alt: "Example of destroyed analytics",
                width: 1024,
                height: 768,
                offsetX: "2rem",
                offsetY: "12rem",
              }}
              features={[
                {
                  text: "Your conversion rates plummet, and your data becomes worthless.",
                },
                {
                  text: "Your retargeting audiences are polluted, and you can't trust your attribution data.",
                },
                {
                  text: "Your campaigns are misoptimized, and you can't make informed decisions about your future.",
                },
              ]}
              link={{
                text: "Uninflate your marketing bills",
                href: "/contact",
              }}
            />
            <FeatureCard
              title="Wasted Ad Spend"
              description="Marketing pixels fire on bot sessions, polluting your retargeting audiences and attribution data. You're optimizing campaigns based on fake engagement, leading to poor ROAS and misallocated budgets."
              image={{
                src: "/images/example-ad-spend.png",
                alt: "Example of wasted ad spend",
                width: 1024,
                height: 768,
                offsetX: "2rem",
                offsetY: "7rem",
              }}
              features={[
                {
                  text: "Your ad spend is wasted, and you're not getting the ROI you expect.",
                },
                {
                  text: "Your analytics make your ads looks utterly ineffective.",
                },
                {
                  text: "You lack the data to adjust your campaigns to your customers' behavior.",
                },
              ]}
              link={{
                text: "Regain control of your ad spend",
                href: "/contact",
              }}
            />
            <FeatureCard
              title="Operational Overhead"
              description="Your team wastes countless hours investigating fake orders, cleaning up email lists, and trying to separate real customers from sophisticated bot traffic that mimics genuine user behavior."
              image={{
                src: "/images/example-operational-overhead.png",
                alt: "Example of operational overhead",
                width: 1024,
                height: 768,
                offsetX: "-2rem",
                offsetY: "7rem",
              }}
              features={[
                {
                  text: "Your employees are constantly wasting time.",
                },
                {
                  text: "Your team is forced to try to fix problems that don't exist.",
                },
                {
                  text: "Your customers are frustrated by the constant delays in their orders.",
                },
              ]}
              link={{
                text: "Take back my time",
                href: "/contact",
              }}
            />
          </div>
          <Card className="overflow-hidden !pb-0">
            <CardContent className="p-0 !pb-0">
              <h3 className="px-6 text-base font-bold">The Attack Pattern</h3>
              <div>
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed">
                    Unlike "dumb" scrapers that just load a page, these bots execute a complex sequence of events to
                    simulate high-intent users. This might sound familiar to you:
                  </p>
                </div>
                <div className="max-lg:divide-border pt-4 max-lg:divide-y">
                  {ATTACK_STEPS.map((step, index) => (
                    <div
                      key={step.number}
                      className="group px-8 py-1 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                      <div className="flex gap-6">
                        <div className="-mb-5 flex flex-col items-center gap-2 pt-1">
                          <div
                            className={`relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${step.color} text-lg font-bold text-white opacity-80 shadow-lg transition-shadow group-hover:shadow-xl`}
                          >
                            {step.icon}
                            <div className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-black text-xs font-normal text-white select-none">
                              {step.number}
                            </div>
                          </div>
                          {index < ATTACK_STEPS.length - 1 && (
                            <div className={`h-12 w-0.5 bg-gradient-to-b ${step.color} -translate-y-2 max-lg:hidden`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-foreground flex items-center text-base font-bold">{step.title}</h3>
                          <p className="text-foreground/80 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-border mt-8 border-t bg-stone-200 px-8 py-6">
                  <p className="text-xs text-black">
                    <span className="font-semibold">Pro tip:</span> Understanding these patterns helps you better
                    protect your business and maintain accurate analytics.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden !pb-0">
            <CardContent className="p-0 pb-4">
              <h3 className="px-6 text-base font-bold">Why Standard Defenses Fail</h3>
              <div>
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed">
                    Typical defenses like Blockify fail because they try to stop the bot too late in the lifecycle.
                  </p>
                </div>
              </div>
              <div className="max-lg:divide-border pt-4 max-lg:divide-y">
                <div className="px-6 pb-4">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex gap-4 rounded-lg border border-red-300 p-4">
                      <div className="flex !size-8 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-red-200 to-red-100">
                        <Hourglass className="size-4 text-red-600" />
                      </div>
                      <div className="flex flex-col justify-center pt-1">
                        <h4 className="mb-2 text-base font-semibold">Client-Side Blocking Apps</h4>
                        <p className="text-sm text-black/80">
                          By the time JavaScript loads to block the bot, it has already fired pixels, skewed analytics,
                          and submitted forms. The damage is done.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 rounded-lg border border-red-300 p-4">
                      <div className="flex !size-8 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-red-200 to-red-100">
                        <ShieldAlert className="size-4 text-red-600" />
                      </div>
                      <div className="flex flex-col justify-center pt-1">
                        <h4 className="mb-2 text-base font-semibold">Standard WAFs</h4>
                        <p className="text-sm text-black/80">
                          Indiscriminate CAPTCHAs kill conversion rates. Bots using residential proxies look like real
                          customers, so WAFs won't block them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="relative -mt-20 w-screen gap-6 overflow-hidden bg-slate-900 pt-20 pb-12">
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="fade-in-0 zoom-in-95 animate-in z-50 mx-auto flex w-full max-w-7xl flex-col gap-6 duration-700">
          <div className="z-50 flex flex-col">
            <h2 className="text-lg font-bold text-indigo-500" id="discovery-solution">
              Our solution
            </h2>
            <p className="fade-in-0 zoom-in-95 animate-in text-sm text-white/80 duration-700">
              Learn about how we solve the ever-growing problem of Shopify bot traffic.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Features List */}
            <div className="space-y-10">
              {[
                {
                  icon: Globe,
                  color: "blue",
                  title: "Locality of Behavior Analysis",
                  desc: 'We categorize traffic by "Neighborhood." Legitimate ASNs (Comcast, AT&T) pass freely. Suspicious hosting providers and VPN exits are flagged immediately.',
                },
                {
                  icon: LockIcon,
                  color: "purple",
                  title: "Smart Interception",
                  desc: "Instead of blocking blindly, we serve an interactive challenge to suspicious ASNs. Real humans pass easily; bots get stuck at the gate.",
                },
                {
                  icon: ShieldCheck,
                  color: "emerald",
                  title: "Managed Cloudflare Protection",
                  desc: "We implement this logic directly into your Cloudflare WAF. No heavy JavaScript slowing down your site—protection happens at the edge.",
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex gap-5">
                  <div
                    className={`flex !size-8 shrink-0 items-center justify-center rounded-xl bg-${color}-500/20 text-${color}-400`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-base font-bold text-white">{title}</h4>
                    <p className="text-sm text-slate-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="mb-1 text-sm font-medium text-slate-400">Traffic Analysis</div>
                    <div className="text-base font-bold text-white">Last 24 Hours</div>
                  </div>
                  <div className="rounded-full border border-green-500/20 bg-green-500/10 px-2 py-1 text-xs font-bold text-green-400">
                    SAMPLE DATA
                  </div>
                </div>

                <div className="mb-8 grid grid-cols-2 gap-4">
                  {[
                    { label: "Bots Blocked", val: "14,203", col: "text-red-400" },
                    { label: "Real Visitors", val: "8,540", col: "text-blue-400" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-4">
                      <div className="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">{s.label}</div>
                      <div className={`font-mono text-xl font-bold ${s.col}`}>{s.val}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                    <span>RECENT EVENTS</span>
                    <span>ACTION</span>
                  </div>
                  {[
                    {
                      srv: "Server Farm (Alibaba Cloud)",
                      loc: "China • Residential Proxy",
                      stat: "BLOCKED",
                      col: "text-red-400",
                    },
                    {
                      srv: "Residential ISP (Comcast)",
                      loc: "USA • Residential ISP",
                      stat: "ALLOWED",
                      col: "text-green-400",
                    },
                  ].map((e) => (
                    <div
                      key={e.srv}
                      className="flex items-center justify-between rounded-lg border border-slate-700/30 bg-slate-900/30 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <Globe className="size-4 text-slate-500" />
                        <div>
                          <div className="font-mono text-sm text-slate-300">{e.srv}</div>
                          <div className="text-sm text-slate-500">{e.loc}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold ${e.col}`}>{e.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-screen gap-6 overflow-hidden pb-12">
        <div className="fade-in-0 zoom-in-95 animate-in z-50 mx-auto flex w-full max-w-7xl flex-col gap-6 duration-700">
          <div className="z-50 flex flex-col text-start">
            <h2 className="text-lg font-bold text-indigo-500">Mutual benefit pilot program</h2>
            <p className="fade-in-0 zoom-in-95 animate-in text-muted-foreground text-sm duration-700">
              Enterprise-grade protection at a pilot rate in exchange for helping us build our case studies.
            </p>
          </div>
          <div className="w-screen max-w-7xl text-center">
            {/* The Offer Card */}
            <div className="hover:shadow-3xl relative max-w-xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl transition-shadow duration-300">
              {/* The "Deal" Badge */}
              <div className="absolute top-0 right-0 z-10 rounded-bl-2xl bg-blue-600 px-6 py-2 text-xs font-bold text-white">
                50% OFF FOR 3 MONTHS
              </div>

              <div className="p-8 md:p-14">
                {/* Price Anchor */}
                <div className="mb-6 flex flex-col items-center justify-center gap-2">
                  <span className="text-base font-medium text-gray-400 line-through decoration-red-400/50 decoration-2">
                    $499/mo
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-gray-900">$249</span>
                    <span className="text-xl font-medium text-gray-500">/mo</span>
                  </div>
                  <p className="mt-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    Pilot Pricing
                  </p>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px w-full bg-gray-100" />

                {/* Features List */}
                <div className="mx-auto mb-8 max-w-sm space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Managed Cloudflare WAF Config</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">ASN-Level Traffic Analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Bot & Fraud Prevention</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button asChild className="rounded-full bg-indigo-500">
                  <Link href="/contact" className="flex items-center gap-2">
                    Apply for Pilot Program
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <p className="mt-6 text-sm text-gray-400">Limited spots available for Q4 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Unbotify",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Cloud, Shopify, Next.js, Cloudflare",
            offers: {
              "@type": "Offer",
              price: "249.00",
              priceCurrency: "USD",
              priceValidUntil: "2025-12-31",
            },
            description:
              "Middleware to detect and block bot traffic for Next.js and Shopify applications using Cloudflare WAF.",
          }),
        }}
      />
    </div>
  );
}
