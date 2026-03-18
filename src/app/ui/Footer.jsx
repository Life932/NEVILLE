import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, PhoneCall, MapPinned, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content p-10 md:px-20">
      {/* MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* COLUMN 1: Charity Info */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="NEVILLE Logo"
              width={3938}
              height={2098}
              className="w-20 h-auto object-contain"
            />
          </Link>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            NEVILLE is a youth-led non-profit organization from Dhaka,
            Bangladesh, dedicated to building community-centered systems of
            support, skill development, and service.
          </p>

          <div className="text-sm flex flex-col gap-2 mt-2 opacity-90">
            <div className="flex items-start gap-2">
              <PhoneCall className="w-4 h-4 text-primary mt-0.5" />
              <span>
                <strong className="text-white">Phone:</strong> +880 1XXX-XXXXXX
              </span>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-primary mt-0.5" />
              <span>
                <strong className="text-white">Email:</strong>{" "}
                org.neville@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPinned className="w-4 h-4 text-primary mt-0.5" />
              <span>
                <strong className="text-white">Address:</strong> Dhaka,
                Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Join Us */}
        <div className="flex flex-col gap-3">
          <h6 className="font-bold text-white mb-2">Join Us</h6>
          <Link href="/donate" className="link link-hover text-sm">
            Donate Now
          </Link>
          <Link href="/about#volunteers" className="link link-hover text-sm">
            Volunteers
          </Link>
          <Link href="/about#partners" className="link link-hover text-sm">
            Our Partners
          </Link>
          <Link href="/contact#supplier" className="link link-hover text-sm">
            Become a Supplier
          </Link>
        </div>

        {/* COLUMN 3: Useful Links */}
        <div className="flex flex-col gap-3">
          <h6 className="font-bold text-white mb-2">Useful Links</h6>
          <Link href="/faq" className="link link-hover text-sm">
            F.A.Q
          </Link>
          <Link href="/news" className="link link-hover text-sm">
            News
          </Link>
          <Link href="/reports" className="link link-hover text-sm">
            Reports
          </Link>
          <Link href="/terms" className="link link-hover text-sm">
            Terms of Use
          </Link>
          <Link href="/privacy" className="link link-hover text-sm">
            Privacy Policy
          </Link>
        </div>

        {/* COLUMN 4: Initiatives (Images) */}
        <div className="flex flex-col gap-4">
          <h6 className="font-bold text-white">Initiatives</h6>
          <div className="grid grid-cols-3 gap-2 w-48">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-14 h-14 bg-white/10 rounded-md overflow-hidden relative group"
              >
                <Image
                  src={`/initiative-${i}.jpg`}
                  fill
                  sizes="(max-width: 768px) 56px, 56px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  alt={`Initiative ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Socials & Copyright */}
      <div className="border-t border-neutral-content/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61584161175379"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/org.neville/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            className="hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} NEVILLE. Empowering youth, serving
          communities.
        </p>
      </div>
    </footer>
  );
}
