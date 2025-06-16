"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarButton,
  Navbar as NavbarComponent,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/lib/globals";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    {
      name: "Cloudflare",
      link: "/cloudflare-instance-configuration",
    },
    {
      name: "Shopify",
      link: "/shopify-development",
    },
    {
      name: "Analytics",
      link: "/enhanced-user-analytics",
    },
    {
      name: "Full Stack",
      link: "/full-stack-development",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarComponent className="fade-in-0 slide-in-from-top-10 animate-in z-[999] duration-700">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="primary"
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full bg-indigo-500 font-normal text-white"
          >
            Get in touch
          </NavbarButton>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item) => (
            <a
              key={`mobile-link-${item.name}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="primary"
              href="/contact"
              className="flex items-center justify-center gap-2 bg-indigo-500 text-white"
            >
              Get in touch
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarComponent>
  );
}
