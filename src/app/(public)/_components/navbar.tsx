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
import { ArrowRight, Undo2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "The problem",
      link: "/#discovery-problem",
    },
    {
      name: "Our solution",
      link: "/#discovery-solution",
    },
    {
      name: "Scan your site",
      link: "/site-scan",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <NavbarComponent className="fade-in-0 slide-in-from-top-10 animate-in z-[999] duration-700">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="primary"
            href="https://app.unbotify.io/auth"
            className="flex items-center justify-center gap-2 bg-indigo-500 text-white"
          >
            Go to app
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
          <NavbarButton
            variant="primary"
            href="https://app.unbotify.io/auth"
            className="flex items-center justify-center gap-2 bg-indigo-500 text-white"
          >
            Go to app
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </NavbarComponent>
  );
}
