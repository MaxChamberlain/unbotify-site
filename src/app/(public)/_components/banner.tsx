import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex w-screen items-center justify-center gap-1 bg-gradient-to-r from-indigo-400 to-purple-400 py-1 text-center text-sm text-white max-sm:hidden">
      <Button variant="link" size="sm" className="p-0 text-sm text-white" asChild>
        <Link href="/contact">Get 50% off your first 3 months if you join our intelligence network!</Link>
      </Button>
    </div>
  );
}
