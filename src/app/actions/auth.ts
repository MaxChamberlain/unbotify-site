import { signIn } from "@/server/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function signInWithEmail(formData: FormData) {
	"use server";
	const email = formData.get("email");
	console.log(email);
	try {
		await signIn("resend", { email });
	} catch (error) {
		if (error instanceof AuthError) {
			return redirect(`/auth/error?error=${error.type}`);
		}
		throw error;
	}
}
