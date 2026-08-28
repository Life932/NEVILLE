import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  PhoneCall,
  MapPinned,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const JOIN_LINKS = [
  { name: "Donate Now", href: "/donate" },
  { name: "Volunteers", href: "/about#volunteers" },
  { name: "Our Partners", href: "/about#partners" },
  { name: "Become a Supplier", href: "/contact#supplier" },
];

const USEFUL_LINKS = [
  { name: "F.A.Q", href: "/faq" },
  { name: "News", href: "/news" },
  { name: "Reports", href: "/reports" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const INITIATIVES = [
  { name: "Youth Empowerment", href: "/initiatives/empowerment" },
  { name: "Youth Networking", href: "/initiatives/networking" },
  { name: "Skill Development", href: "/initiatives/skills" },
  { name: "Community Service", href: "/initiatives/service" },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border p-10 md:px-20 transition-colors duration-300">
      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {/* COLUMN 1: Charity Info */}
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="NEVILLE Logo"
              width={200}
              height={100}
              className="w-24 h-auto object-contain brightness-0 dark:brightness-100 opacity-85 dark:opacity-100 transition-all"
              priority
            />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            NEVILLE is a youth-led non-profit organization from Dhaka,
            Bangladesh, dedicated to building community-centered systems of
            support, skill development, and service.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href="tel:+8801764078003"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <PhoneCall className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="underline-offset-4 group-hover:underline">
                +8801764078003
              </span>
            </a>

            <a
              href="mailto:org.neville@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="underline-offset-4 group-hover:underline">
                org.neville@gmail.com
              </span>
            </a>

            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPinned className="w-4 h-4 text-primary mt-1" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Join Us */}
        <div className="flex flex-col gap-4">
          <h6 className="font-bold text-foreground uppercase tracking-wider text-xs">
            Join Our Mission
          </h6>
          <ul className="flex flex-col gap-3">
            {JOIN_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-all group"
                >
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: Useful Links */}
        <div className="flex flex-col gap-4">
          <h6 className="font-bold text-foreground uppercase tracking-wider text-xs">
            Information
          </h6>
          <ul className="flex flex-col gap-3">
            {USEFUL_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4: Key Initiatives & Gallery */}
        <div className="flex flex-col gap-6">
          <div>
            <h6 className="font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Our Focus
            </h6>
            <ul className="flex flex-col gap-3">
              {INITIATIVES.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all font-medium"
                  >
                    # {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MINI GALLERY */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-50">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-md overflow-hidden relative group border border-border"
              >
                <Image
                  src={`/initiative-${i}.jpg`}
                  fill
                  sizes="64px"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  alt={`Initiative display ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Socials & Copyright */}
      <div className="max-w-7xl mx-auto border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61584161175379"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2.5 bg-background border border-border rounded-xl text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/org.neville/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 bg-background border border-border rounded-xl text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} NEVILLE. All rights reserved.
          </p>
          <p className="text-[10px] mt-1 text-muted-foreground/80 uppercase tracking-wider">
            Empowering youth • Serving communities • Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
