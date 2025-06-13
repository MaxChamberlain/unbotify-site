"use client";

import Script from "next/script";
import { Fragment, useRef } from "react";

export default function Rating() {
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
				ref={widgetRef}
				className="senja-embed h-12 scale-95 opacity-0 duration-700 max-lg:mx-auto"
				data-id="4eb47bd0-b880-43c1-b9b1-64dcb3c7b67c"
				data-lazyload="false"
				data-mode="shadow"
			/>
			<Script
				async
				type="text/javascript"
				src="https://widget.senja.io/widget/4eb47bd0-b880-43c1-b9b1-64dcb3c7b67c/platform.js"
				onLoad={showWidget}
			/>
		</Fragment>
	);
}
