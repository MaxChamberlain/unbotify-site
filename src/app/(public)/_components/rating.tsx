"use client";

import Script from "next/script";
import { Fragment, useRef } from "react";

export default function Rating() {
	const widgetRef = useRef<HTMLDivElement>(null);

	const showWidget = () => {
		setTimeout(() => {
			if (widgetRef.current) {
				widgetRef.current.classList.remove("opacity-0");
				widgetRef.current.classList.remove("scale-95");
				widgetRef.current.classList.remove("max-h-0");
				widgetRef.current.classList.add("max-h-12");
				widgetRef.current.classList.remove("blur-xl");
			}
		}, 300);
	};

	return (
		<Fragment>
			<div className="relative max-lg:mx-auto">
				<div
					ref={widgetRef}
					className="senja-embed max-h-0 scale-95 overflow-hidden opacity-0 blur-xl duration-1000"
					data-id="4eb47bd0-b880-43c1-b9b1-64dcb3c7b67c"
					data-lazyload="false"
					data-mode="shadow"
				/>
			</div>
			<Script
				async
				type="text/javascript"
				src="https://widget.senja.io/widget/4eb47bd0-b880-43c1-b9b1-64dcb3c7b67c/platform.js"
				onLoad={showWidget}
			/>
		</Fragment>
	);
}
