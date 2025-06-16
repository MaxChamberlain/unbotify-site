import { Sidebar, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
  redirect("/");
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <SidebarProvider>
      <Sidebar variant="floating" className="fade-in-0 slide-in-from-left-2 zoom-in-95 animate-in duration-200" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
