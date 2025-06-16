import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
		offsetX: `${number}rem`;
		offsetY: `${number}rem`;
	};
	features: {
		text: string;
		shopifyRelated?: string;
		wordpressRelated?: string;
	}[];
	link: {
		text: string;
		href: string;
	};
};

export default function FeatureCard({
	title,
	description,
	image,
	features,
	link,
}: Props) {
	return (
		<Link href={link.href}>
			<Card className="group h-full w-screen max-w-lg select-none overflow-hidden max-sm:max-w-sm max-lg:max-w-md lg:pt-0">
				<div className="relative flex h-84 w-full items-center justify-center overflow-hidden rounded-2xl border-8 border-white bg-muted px-12 transition-all duration-300 group-hover:h-72 max-lg:hidden">
					<Image
						src={image.src}
						width={image.width}
						height={image.height}
						alt={image.alt}
						className={
							"!select-none pointer-events-none relative z-50 scale-125 rounded-xl border object-contain opacity-60 shadow-lg contrast-150 transition-all duration-300 hover:mt-2 group-hover:opacity-100"
						}
						style={{
							transform: `translate(${image.offsetX}, ${image.offsetY})`,
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-fuchsia-500/20 to-sky-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />
					<div className="absolute bottom-0 left-0 h-4 w-full bg-gradient-to-b from-transparent to-muted-foreground/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />
				</div>
				<CardHeader className="gap-6">
					<CardTitle className="text-2xl">{title}</CardTitle>
					<CardDescription className="text-lg text-primary">
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className="pb-0 transition-all duration-300 group-hover:pb-12 max-lg:pb-12">
					<ul className="flex flex-col gap-4 [&_li]:flex [&_li]:items-start [&_li]:gap-1 [&_li]:text-base [&_li]:text-primary/80">
						{features.map((feature) => (
							<li key={feature.text}>
								<CheckCircle2 className="!h-5 !w-5 flex-shrink-0 translate-y-0.5 fill-indigo-500/50 text-white" />
								<div>
									{feature.text}
									{feature.shopifyRelated && (
										<Tooltip>
											<TooltipTrigger className="ml-2 inline translate-y-0.5 opacity-50 transition-all duration-300 group-hover:opacity-100">
												<Image
													src="/images/shopify-logo.png"
													width={16}
													height={16}
													alt="Shopify Logo"
												/>
											</TooltipTrigger>
											<TooltipContent
												side="right"
												className="pointer-events-none"
											>
												{feature.shopifyRelated}
											</TooltipContent>
										</Tooltip>
									)}
									{feature.wordpressRelated && (
										<Tooltip>
											<TooltipTrigger className="ml-2 inline translate-y-1.5 opacity-50 transition-all duration-300 group-hover:opacity-100">
												<Image
													src="/images/wordpress-logo.webp"
													width={24}
													height={24}
													alt="WordPress Logo"
												/>
											</TooltipTrigger>
											<TooltipContent
												side="right"
												className="pointer-events-none"
											>
												{feature.wordpressRelated}
											</TooltipContent>
										</Tooltip>
									)}
								</div>
							</li>
						))}
					</ul>
					<p className="group/link group-hover:-translate-y-12 max-lg:-translate-y-12 absolute top-full flex scale-90 items-center gap-1 font-medium text-indigo-500 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 max-lg:scale-100 max-lg:opacity-100">
						{link.text}{" "}
						<ChevronRight className="size-4 transition-all duration-300 group-hover/link:translate-x-1" />
					</p>
				</CardContent>
			</Card>
		</Link>
	);
}
