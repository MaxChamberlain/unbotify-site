"use client";

import Script from "next/script";
import { Fragment, useRef } from "react";

export default function Testimonials() {
	const widgetRef = useRef<HTMLDivElement>(null);

	const showWidget = () => {
		if (widgetRef.current) {
			widgetRef.current.classList.remove("opacity-0");
			widgetRef.current.classList.add("opacity-100");
			widgetRef.current.classList.remove("scale-95");
			widgetRef.current.classList.add("scale-100");
		}
	};
	return (
		<Fragment>
			<div
				className="senja-embed scale-95 opacity-0 duration-700"
				data-id="deb6a0e7-08d6-4115-9d23-f49e2aa23bf1"
				data-lazyload="false"
				data-mode="shadow"
				ref={widgetRef}
			/>
			<Script
				async
				type="text/javascript"
				src="https://widget.senja.io/widget/deb6a0e7-08d6-4115-9d23-f49e2aa23bf1/platform.js"
				onLoad={showWidget}
			/>
		</Fragment>
	);
}
