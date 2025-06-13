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
			name: "Features",
			link: "#features",
		},
		{
			name: "Pricing",
			link: "#pricing",
		},
		{
			name: "Contact",
			link: "#contact",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<NavbarComponent className="fade-in-0 slide-in-from-top-10 z-[999] animate-in duration-700">
			<NavBody>
				<NavbarLogo />
				<NavItems items={navItems} className="justify-end" />
				{/* <div className="flex items-center gap-4">
          <NavbarButton
            variant="secondary"
            className="flex items-center gap-2"
            href={SIGN_IN_URL}
          >
            Login <ArrowRight className="size-4" />
          </NavbarButton>
          <NavbarButton
            variant="primary"
            href={SIGN_UP_URL}
            className="bg-indigo-500 text-white"
          >
            Sign up - it&apos;s free
          </NavbarButton>
        </div> */}
			</NavBody>
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<MobileNavToggle
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					/>
				</MobileNavHeader>
				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}
				>
					{navItems.map((item, idx) => (
						<a
							key={`mobile-link-${item.name}`}
							href={item.link}
							onClick={() => setIsMobileMenuOpen(false)}
							className="relative text-neutral-600 dark:text-neutral-300"
						>
							<span className="block">{item.name}</span>
						</a>
					))}
					{/* <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="primary"
              href={SIGN_IN_URL}
              className="flex items-center justify-center gap-2 bg-indigo-500 text-white"
            >
              Login <ArrowRight className="size-4" />
            </NavbarButton>
            <NavbarButton
              variant="primary"
              href={SIGN_UP_URL}
              className="bg-indigo-500 text-white"
            >
              Sign up - it&apos;s free
            </NavbarButton>
          </div> */}
				</MobileNavMenu>
			</MobileNav>
		</NavbarComponent>
	);
}
