"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };



  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 py-2 bg-white">
      <div className="w-full max-w-screen-xl justify-between items-center mx-auto flex gap-12">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={80}
            height={56}
            className="w-20 h-14"
          />
        </Link>

        {isMobileNavOpen ? (
          <IoClose
            className="text-4xl cursor-pointer"
            onClick={closeMobileNav}
          />
        ) : (
          <Image
            src="/assets/toggle-btn.svg"
            alt="toggle btn"
            width={30}
            height={30}
            className="cursor-pointer block base:hidden"
            onClick={toggleMobileNav}
          />
        )}

        {/* Desktop Screen Header */}
        <nav className="flex-1 hidden base:flex justify-between items-center">
          {/* Nav Links  */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-background-color font-medium text-base tracking-normal ${
                isActive("/")
                  ? "border-b-2 border-b-shade-blue text-shade-blue"
                  : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
              }`}
            >
              Home
            </Link>

            <Link
              href="/pilot"
              className={`text-background-color font-medium text-base tracking-normal ${
                isActive("/pilot")
                  ? "border-b-2 border-b-shade-blue text-shade-blue"
                  : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
              }`}
            >
              Become a Pilot
            </Link>

            <Link
              href="/plane"
              className={`text-background-color font-medium text-base tracking-normal ${
                isActive("/plane")
                  ? "border-b-2 border-b-shade-blue text-shade-blue"
                  : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
              }`}
            >
              Rent a Plane
            </Link>

            <Link
              href="/about"
              className={`text-background-color font-medium text-base tracking-normal ${
                isActive("/about")
                  ? "border-b-2 border-b-shade-blue text-shade-blue"
                  : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-background-color font-medium text-base tracking-normal ${
                isActive("/contact")
                  ? "border-b-2 border-b-shade-blue text-shade-blue"
                  : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/pricing"
              className={`text-background-color font-medium text-base tracking-normal ${
                isActive("/pricing")
                  ? "border-b-2 border-b-shade-blue text-shade-blue"
                  : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
              }`}
            >
              Pricing
            </Link>
          </div>

          <div>
            <Link href="tel:+1405-260-1010"  className="bg-high-blue hover:bg-blue-100 rounded-lg flex items-center justify-center gap-3 py-3 px-5 text-white font-medium text-lg">
              <Image
                src="/assets/call-us.svg"
                alt="call us"
                width={20}
                height={20}
              />
              Call us anytime
            </Link>
          </div>
        </nav>

        {/* Mobile Screen Header  */}
        {isMobileNavOpen && (
          <nav className="flex base:hidden flex-col absolute top-[70px] bg-white w-full left-0 right-0 py-8 px-5 shadow-nav-shadow">
            {/* Nav Links  */}
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className={`text-background-color font-medium py-3 w-fit text-lg tracking-normal ${
                  isActive("/")
                    ? "border-b-2 border-b-shade-blue text-shade-blue"
                    : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
                }`}
              >
                Home
              </Link>

              <Link
                href="/pilot"
                className={`text-background-color font-medium py-3 w-fit text-lg tracking-normal ${
                  isActive("/pilot")
                    ? "border-b-2 border-b-shade-blue text-shade-blue"
                    : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
                }`}
              >
                Become a Pilot
              </Link>

              <Link
                href="/plane"
                className={`text-background-color font-medium py-3 w-fit text-lg tracking-normal ${
                  isActive("/plane")
                    ? "border-b-2 border-b-shade-blue text-shade-blue"
                    : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
                }`}
              >
                Rent a Plane
              </Link>

              <Link
                href="/about"
                className={`text-background-color font-medium py-3 w-fit text-lg tracking-normal ${
                  isActive("/about")
                    ? "border-b-2 border-b-shade-blue text-shade-blue"
                    : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`text-background-color font-medium py-3 w-fit text-lg tracking-normal ${
                  isActive("/contact")
                    ? "border-b-2 border-b-shade-blue text-shade-blue"
                    : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
                }`}
              >
                Contact
              </Link>

              <Link
                href="/pricing"
                className={`text-background-color font-medium py-3 w-fit text-lg tracking-normal ${
                  isActive("/pricing")
                    ? "border-b-2 border-b-shade-blue text-shade-blue"
                    : "hover:text-shade-blue hover:border-b-2 hover:border-b-shade-blue"
                }`}
              >
                Pricing
              </Link>
            </div>

            <div>
              <Link
                href="tel:+1405-260-1010"
                className="bg-high-blue w-full mt-4 hover:bg-blue-100 rounded-lg flex items-center justify-center gap-3 py-3 px-5 text-white font-medium text-lg"
              >
                <Image
                  src="/assets/call-us.svg"
                  alt="call us"
                  width={20}
                  height={20}
                />
                Call us anytime
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
