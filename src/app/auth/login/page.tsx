import { signInWithEmail } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardSubContent,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SIGN_UP_URL } from "@/lib/globals";
import { signIn } from "@/server/auth";
import { Label } from "@radix-ui/react-label";
import { AuthError } from "next-auth";
import Link from "next/dist/client/link";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage({
	searchParams,
}: {
	searchParams: Promise<{ redirectTo: string }>;
}) {
	const awaitedParams = await searchParams;
	return (
		<main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-primary">
			<div
				className="absolute z-0 aspect-video h-screen scale-110 select-none opacity-50 blur-[96px]"
				draggable={false}
			>
				<Image
					draggable={false}
					src="/images/auth-background.png"
					alt="Login background"
					fill
					className="select-none object-cover"
				/>
			</div>
			<Card className="fade-in-0 zoom-in-90 z-10 w-full max-w-sm animate-in pt-4 duration-300">
				<CardHeader className="flex flex-col items-center gap-2">
					<Image
						src="/images/logo.png"
						alt="Max Integrations"
						width={48}
						height={48}
						className="fade-in-0 zoom-in-95 mt-4 animate-in duration-700"
					/>
					<CardTitle className="fade-in-0 slide-in-from-left-2 -zoom-in-95 mt-4 h-4 animate-in duration-700">
						Sign in to Max Integrations
					</CardTitle>
					<CardDescription className="fade-in-0 slide-in-from-left-2 -zoom-in-95 mb-2 animate-in duration-700">
						Welcome back! Please sign in to continue.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button
						variant="outline"
						className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 flex w-full animate-in items-center gap-2 duration-500"
						onClick={async () => {
							"use server";
							try {
								await signIn("google", {
									redirectTo: awaitedParams.redirectTo ?? "/dashboard",
								});
							} catch (error) {
								if (error instanceof AuthError) {
									return redirect(`/auth/error?error=${error.type}`);
								}
								throw error;
							}
						}}
					>
						<Image
							src="/images/google-logo.png"
							alt="Google"
							width={20}
							height={20}
						/>
						Login with Google
					</Button>
					<div className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 mt-6 mb-4 flex animate-in items-center gap-2 duration-[600]">
						<Separator className="flex-1" />
						<span className="font-light text-muted-foreground text-xs">OR</span>
						<Separator className="flex-1" />
					</div>
					<form
						className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 flex animate-in flex-col gap-4 duration-700"
						action={signInWithEmail}
					>
						<Input
							label="Email address"
							id="email"
							type="email"
							autoComplete="email"
							name="email"
							required
							className=""
						/>
						<Button
							type="submit"
							className="fade-in-0 slide-in-from-bottom-2 -zoom-in-95 w-full animate-in duration-700"
						>
							Login
						</Button>
					</form>
				</CardContent>
				<CardSubContent>
					<div className="flex items-center justify-center gap-1">
						Don&apos;t have an account?
						<Button variant="link" asChild className="p-0">
							<Link href={SIGN_UP_URL} className="font-bold text-xs">
								Sign up
							</Link>
						</Button>
					</div>
				</CardSubContent>
			</Card>
		</main>
	);
}
