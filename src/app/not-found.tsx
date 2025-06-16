import { Button } from "@/components/ui/button";
import Banner from "./(public)/_components/banner";
import Footer from "./(public)/_components/footer";
import { Navbar } from "./(public)/_components/navbar";
import Link from "next/link";
import { Undo2 } from "lucide-react";

export default function NotFound() {
  return (
    <main>
      <Banner />
      <Navbar />
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
        <p className="text-muted-foreground">The page you are looking for does not exist.</p>
        <Button asChild className="mt-12 bg-indigo-500 hover:bg-indigo-600">
          <Link href="/">
            Go back to the home page <Undo2 />
          </Link>
        </Button>
      </div>
      <Footer />
    </main>
  );
}
