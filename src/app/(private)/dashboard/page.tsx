"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<Button
				onClick={async () => {
					await signOut({
						redirectTo: "/",
					});
				}}
			>
				Sign Out
			</Button>
		</div>
	);
}
