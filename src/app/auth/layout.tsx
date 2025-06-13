import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	if (session?.user) {
		redirect("/dashboard");
	}

	return children;
}
