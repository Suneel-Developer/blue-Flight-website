"use client"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-shade-purple px-3 md:px-5 py-10 md:py-20">
      <div className="w-full max-w-7xl mx-auto grid gap-y-8 grid-cols-1">
        {/* Logo with Links  */}
        <div className="flex items-center flex-col md:flex-row gap-8 md:gap-16">
          <div>
            <Image
              src="/assets/logo.png"
              alt="blue flies logo"
              className="max-h-14"
              width={80}
              height={54}
              loading="lazy"
            />
          </div>
          <ul className="flex items-center flex-col md:flex-row justify-start gap-6 base:gap-16">
            <li>
              <Link
                href="/"
                className="text-white font-medium text-lg hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pilot"
                className="text-white font-medium text-lg hover:underline"
              >
                Become a Pilot
              </Link>
            </li>
            <li>
              <Link
                href="/plane"
                className="text-white font-medium text-lg hover:underline"
              >
                Rent a Plane
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-white font-medium text-lg hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white font-medium text-lg hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-white font-medium text-lg hover:underline"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider  */}
        <div className="bg-divider-bg w-full h-px"></div>

        {/* Address & Social Links  */}
        <div className="flex justify-between flex-col md:flex-row gap-2">
          <div>
            <div className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-4">
              <Image
                src="/assets/location.svg"
                alt="loaction"
                width={32}
                height={32}
              />
              <p className="text-white text-sm md:text-base leading-normal text-center md:text-start">
                Blue Skies Flight School, 520 Airport Rd, Guthrie, OK 73044
              </p>
            </div>
            <Link
              href="https://www.facebook.com/blueskiesflightschool/"
              target="_blank"
              className="flex items-center justify-center md:justify-start flex-col mt-4 md:flex-row gap-4"
            >
              <Image
                src="/assets/facebook.svg"
                alt="loaction"
                width={32}
                height={32}
              />
              <p className="text-white text-sm md:text-base leading-normal underline text-center md:text-start">
                Blue Skies Flight School
              </p>
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start md:items-end mt-2 md:mt-0">
            <p className="text-blue-gray text-sm md:text-base leading-normal text-center md:text-start">
              © 2024 BlueSkies Flight School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
