"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Heart, Menu, X, ChevronDown, Phone } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Overview", href: "/what-we-do" },
      {
        label: "Rise Of Women Empowerment",
        href: "/what-we-do/women-empowerment",
      },
      {
        label: "Education For Child Development",
        href: "/what-we-do/child-education",
      },
      { label: "Nature Conservation", href: "/what-we-do/nature-conservation" },
      { label: "Upholding Humanity", href: "/what-we-do/humanity" },
      { label: "Kindness Towards Animals", href: "/what-we-do/animal-welfare" },
      { label: "Awareness For A Better World", href: "/what-we-do/awareness" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Girl Education", href: "/projects/girl-education" },
      { label: "Animal Rescue", href: "/projects/animal-rescue" },
      { label: "Community Programs", href: "/projects/community" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-navbar/98 backdrop-blur-xl shadow-navbar py-2"
            : "bg-transparent text-black py-4"
        }`}
      >
        <div className="container-custom section-padding py-0">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`w-11 h-11 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-card ${
                  isScrolled ? "bg-primary" : "bg-primary"
                }`}
              >
                <Heart
                  className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground"
                  fill="currentColor"
                />
              </div>
              <div className="hidden sm:block">
                <span
                  className={`text-lg lg:text-xl font-semibold tracking-tight transition-colors ${
                    isScrolled ? "text-foreground" : "text-foreground"
                  }`}
                >
                  HopeHands
                </span>
                <p
                  className={`text-xs font-medium tracking-wide transition-colors ${
                    isScrolled ? "text-muted-foreground" : "text-foreground/80"
                  }`}
                >
                  For Girls & Animals
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && handleDropdownEnter(item.label)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-full ${
                      pathname === item.href ||
                      (item.children &&
                        item.children.some((c) => pathname === c.href))
                        ? isScrolled
                          ? "text-primary bg-primary/8"
                          : "text-primary bg-card/95 shadow-soft"
                        : isScrolled
                          ? "text-foreground/75 hover:text-foreground hover:bg-muted/60"
                          : "text-foreground/90 hover:text-foreground hover:bg-card/15"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown - Fixed hover issue */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="w-72 bg-card rounded-2xl shadow-hover border border-border/60 py-2 overflow-hidden">
                        {item.children.map((child, idx) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-all duration-150 ${
                              idx === 0
                                ? "font-semibold text-primary bg-primary/5 border-b border-border/50 mx-2 mb-1 rounded-lg"
                                : "text-foreground/80 hover:bg-primary/5 hover:text-primary mx-2 rounded-lg"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 font-medium rounded-full transition-all duration-200 ${
                  isScrolled
                    ? "text-foreground/75 hover:text-primary hover:bg-primary/5"
                    : "text-foreground/90 hover:text-foreground hover:bg-card/15"
                }`}
                onClick={() => setContactOpen(true)}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Button>
              <Link href="/donate">
                <Button
                  variant="donate"
                  size="lg"
                  className="shadow-card hover:shadow-glow rounded-full px-6 gap-2 font-semibold"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <Link href="/donate">
                <Button
                  variant="donate"
                  size="sm"
                  className="rounded-full gap-1.5 shadow-soft"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate
                </Button>
              </Link>
              <button
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-foreground hover:bg-card/15"
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-card border-t border-border/50 overflow-hidden transition-all duration-400 ${
            isOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-custom py-4 space-y-1 overflow-y-auto max-h-[80vh]">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-border/30 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 flex items-center px-4 py-3.5 rounded-xl font-medium transition-all ${
                      pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => !item.children && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="p-3.5 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedMobile === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedMobile === item.label
                        ? "max-h-96 pb-2"
                        : "max-h-0"
                    }`}
                  >
                    <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-0.5">
                      {item.children.slice(1).map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 px-2">
              <Button
                variant="outline"
                className="w-full gap-2 rounded-xl py-5 font-medium"
                onClick={() => {
                  setIsOpen(false);
                  setContactOpen(true);
                }}
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-22" />

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
