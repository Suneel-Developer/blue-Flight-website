"use client"
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <section className="w-full max-w-7xl px-3 md:px-5 mx-auto mt-10 py-6">
      {/* Heading section  */}
      <div className="flex justify-center md:justify-start flex-col md:flex-row items-center gap-4 md:gap-8 mb-8">
        <h2 className="text-2xl md:text-5xl font-semibold text-dark-blue tracking-tight">
          How does it works?
        </h2>
        <Link
          href="#"
          className="flex items-center gap-4 text-blue-berry text-base"
        >
          Learn about Private Pilot License
          <Image
            src="/assets/left-arrow.svg"
            alt="left arrow"
            width={18}
            height={18}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Box  */}

      <div className="grid grid-cols md:grid-cols-3 gap-6">
        <div className="bg-grey-transparent w-full rounded-2xl flex justify-start items-center flex-col p-5 max-w-96 mx-auto">
          <img
            src="/assets/global-website-top.svg"
            alt="global-website-top"
            width={64}
            height={64}
            loading="lazy"
          />
          <p className="mt-8 text-sm md:text-base text-dark-blue leading-normal">
            We offer flight training for pilots interested in single engine
            Private and Instrument certificates. If you don’t know what all of
            these mean, we can walk you through the process.
          </p>
        </div>

        <div className="bg-grey-transparent w-full rounded-2xl flex justify-start items-center flex-col p-5 max-w-96 mx-auto">
          <img
            src="/assets/global-website-right.svg"
            alt="global-website-right"
            width={64}
            height={64}
            loading="lazy"
          />
          <p className="mt-8 text-sm md:text-base text-dark-blue leading-normal">
            The private is the most basic level certificate for flying. With
            your private license, you can fly both yourself and others and are
            allowed to split the cost.
          </p>
        </div>

        <div className="bg-grey-transparent w-full rounded-2xl flex justify-start items-center flex-col p-5 max-w-96 mx-auto">
          <img
            src="/assets/global-website-below.svg"
            alt="global-website-top"
            width={64}
            height={64}
            loading="lazy"
          />
          <p className="mt-8 text-sm md:text-base text-dark-blue leading-normal">
            With a Private license, you cannot receive compensation for flying,
            that is reserved for Commercial rated pilots.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
