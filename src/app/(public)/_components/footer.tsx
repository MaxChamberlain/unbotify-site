import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <Image src="/images/logo.png" alt="Max Integrations" width={32} height={32} />
              <span className="text-xl font-bold">Max Integrations</span>
            </Link>
            <p className="text-sm text-gray-400">
              From custom web apps to infrastructure configuration, Shopify themes to custom analytics on your users,
              we've got you covered.
            </p>
            <div className="flex space-x-4 pt-2" />
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Services</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/cloudflare">Cloudflare configuration</FooterLink>
              <FooterLink to="/shopify">Shopify development</FooterLink>
              <FooterLink to="/analytics">Enhanced user analytics</FooterLink>
              <FooterLink to="/development">Custom full stack apps</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-500">&copy; {dayjs().year()} Max Integrations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link href={to} className="text-gray-400 transition-colors hover:text-white">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
    {children}
  </a>
);
