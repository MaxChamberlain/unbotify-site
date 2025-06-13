"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardContent } from "./card";

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
	companyLogo?: string;
	quote: string;
	authorName: string;
	authorPosition: string;
	authorImage?: string;
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
	(
		{
			className,
			companyLogo,
			quote,
			authorName,
			authorPosition,
			authorImage,
			...props
		},
		ref,
	) => {
		return (
			<Card className="w-full px-2 py-6 " ref={ref} {...props}>
				<CardContent className="flex flex-col gap-12">
					<p className="font-light text-lg ">"{quote}"</p>
					<div className="flex items-center gap-2">
						<Avatar className="size-10">
							<AvatarImage src={authorImage} />
							<AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<p className="font-bold text-sm">{authorName}</p>
							<p className="text-muted-foreground text-sm">{authorPosition}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		);
	},
);

Testimonial.displayName = "Testimonial";
