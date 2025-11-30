import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <Image src="/images/logo.png" alt="Max Integrations" width={32} height={32} />
              <span className="text-xl font-bold">Unbotify</span>
            </Link>
            <p className="text-sm text-gray-400">
              Unbotify manages your Web Application Firewall and Bot Protection, stopping malicious traffic from
              touching your site.
            </p>
            <div className="flex space-x-4 pt-2" />
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/#discovery-problem">The problem</FooterLink>
              <FooterLink to="/#discovery-solution">Our solution</FooterLink>
              <FooterLink to="/contact">Apply for pilot program</FooterLink>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-500">&copy; {dayjs().year()} Unbotify Ltd. All rights reserved.</p>
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
