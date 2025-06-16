import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  redirect("/");
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return children;
}
