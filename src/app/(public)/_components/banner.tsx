import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex w-screen items-center justify-center gap-1 bg-gradient-to-r from-indigo-400 to-purple-400 py-1 text-center text-sm text-white">
      <Button variant="link" size="sm" className="p-0 text-sm text-white" asChild>
        <Link href="/cloudflare#shopify">
          <Image src="/images/shopify-logo.png" alt="Shopify Logo" width={16} height={16} priority />
          Here to stop bots from accessing your Shopify store? Click here
        </Link>
      </Button>
    </div>
  );
}
