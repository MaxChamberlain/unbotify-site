import dayjs from "dayjs";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex max-w-sm flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <Image src="/images/logo.png" alt="Max Integrations" width={32} height={32} />
              <span className="text-xl font-bold">Unbotify</span>
            </Link>
            <p className="text-gray-400">
              Unbotify manages your Web Application Firewall (WAF) and Bot Protection, stopping malicious traffic from
              touching your site.
            </p>
            <Link href="/privacy" className="text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400">
              Terms of Service
            </Link>
            <div className="flex space-x-4 pt-2" />
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/#discovery-problem">The problem</FooterLink>
              <FooterLink to="/#discovery-solution">Our solution</FooterLink>
              <FooterLink to="/site-scan">Scan your site</FooterLink>
              <FooterLink to="/contact">Apply for pilot program</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {/* Email */}
              <li>
                <a
                  href="mailto:info@unbotify.io"
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@unbotify.io</span>
                </a>
              </li>

              {/* Location - Adds "Real Company" Trust */}
              <li>
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPin className="mt-1 h-4 w-4 shrink-0" />
                  <span>
                    Castle Rock, CO
                    <br />
                    United States
                  </span>
                </div>
              </li>
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
