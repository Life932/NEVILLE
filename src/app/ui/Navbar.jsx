"use client"; // <--- MUST be at the very top for interactivity in Next.js

import Link from "next/link";
import Image from "next/image";
import { HandHeart } from "lucide-react";

export default function Navbar() {
  // THE FIX: This function removes the "stuck" focus immediately after clicking
  const handleClick = (e) => {
    e.currentTarget.blur();

    // This extra line ensures the mobile dropdown closes when a link is clicked!
    const activeElement = document.activeElement;
    if (activeElement) {
      activeElement.blur();
    }
  };

  return (
    <div className="navbar bg-neutral text-neutral-content shadow-sm sticky top-0 z-50">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* MOBILE DROPDOWN */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden focus:!bg-transparent active:!bg-transparent hover:!bg-transparent"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-neutral text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-neutral/50"
          >
            {/* Added onClick={handleClick} to all mobile links */}
            <li>
              <Link
                href="/"
                onClick={handleClick}
                className="hover:bg-white/10 active:!bg-white/20 focus-visible:!bg-white/20 text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/initiatives"
                onClick={handleClick}
                className="hover:bg-white/10 active:!bg-white/20 focus-visible:!bg-white/20 text-white"
              >
                Initiatives
              </Link>
            </li>
            <li>
              <Link
                href="/donation-info"
                onClick={handleClick}
                className="hover:bg-white/10 active:!bg-white/20 focus-visible:!bg-white/20 text-white"
              >
                Donation Info
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleClick}
                className="hover:bg-white/10 active:!bg-white/20 focus-visible:!bg-white/20 text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={handleClick}
                className="hover:bg-white/10 active:!bg-white/20 focus-visible:!bg-white/20 text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* LOGO */}
        <div className="lg:pl-8 pl-2">
          <Link
            href="/"
            onClick={handleClick}
            className="hover:opacity-80 transition-opacity flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Charity Logo"
              width={3938}
              height={2098}
              className="w-20 h-auto object-contain"
              priority
            />
          </Link>
        </div>
      </div>

      {/* CENTER: DESKTOP NAVIGATION */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-medium gap-1">
          {/* Added onClick={handleClick} and simplified the classes! */}
          <li>
            <Link
              href="/"
              onClick={handleClick}
              className="hover:bg-white/10 focus:!bg-transparent focus:!text-white rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/initiatives"
              onClick={handleClick}
              className="hover:bg-white/10 focus:!bg-transparent focus:!text-white rounded-md"
            >
              Initiatives
            </Link>
          </li>
          <li>
            <Link
              href="/donation-info"
              onClick={handleClick}
              className="hover:bg-white/10 focus:!bg-transparent focus:!text-white rounded-md"
            >
              Donation Info
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={handleClick}
              className="hover:bg-white/10 focus:!bg-transparent focus:!text-white rounded-md"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={handleClick}
              className="hover:bg-white/10 focus:!bg-transparent focus:!text-white rounded-md"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end lg:pr-10 pr-2">
        <a
          href="https://your-donate-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-md lg:w-40 text-lg rounded-full text-white shadow-md flex items-center gap-2 border-none"
        >
          <HandHeart className="w-5 h-5" />
          Donate
        </a>
      </div>
    </div>
  );
}
