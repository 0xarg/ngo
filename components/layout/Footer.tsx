import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground">
      {/* CTA Banner */}
      <div className="bg-primary py-10">
        <div className="container-custom section-padding py-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground">
              <em>Interested in making a difference for girls & animals?</em>
            </h2>
            <Link href="/donate">
              <Button
                variant="hero"
                size="xl"
                className="whitespace-nowrap shadow-lg"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Yes! I want to help
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <Heart
                  className="w-7 h-7 text-primary-foreground"
                  fill="currentColor"
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-card">
                  HopeHands
                </span>
                <p className="text-xs text-footer-foreground/70">
                  For Girls & Animals
                </p>
              </div>
            </Link>
            <p className="text-sm text-footer-foreground/80 leading-relaxed">
              Empowering underprivileged girls through education and protecting
              the voiceless through compassionate animal welfare.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "What We Do", href: "/what-we-do" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-footer-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {[
                "Girl Education",
                "Animal Rescue",
                "Women Empowerment",
                "Nature Conservation",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/what-we-do"
                    className="text-footer-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              Reach Us
            </h3>
            <ul className="space-y-4 text-sm text-footer-foreground/80">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                info@hopehands.org
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-footer-foreground/10 text-center">
          <p className="text-sm text-footer-foreground/60">
            © {currentYear} HopeHands Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
