"use client"
import Image from "next/image";
import Link from "next/link";

const FlightCosts = () => {
  return (
    <section className="w-full max-w-7xl px-3 md:px-5 mx-auto py-20 grid gap-4 grid-cols-1 base:grid-cols-[0.5fr,1fr]">
      <div>
        <div className="relative">
          <h2 className="text-2xl md:text-5xl font-semibold text-dark-blue tracking-tight">
            Flight school costs
          </h2>
          <div
            className="bg-light-blue md:w-[275px] w-52 h-[2px] absolute -top-2 bottom-auto left-0 right-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          ></div>
        </div>
        <Link
          href="#"
          className="flex items-center gap-4 text-blue-berry text-base mt-4 base:mt-8"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 base:mt-0">
        <div className="w-full sm:max-w-sm bg-grey-transparent p-5">
          <Image
            src="/assets/headphone.svg"
            alt="headphone"
            width={32}
            height={32}
            loading="lazy"
          />
          <p className="mt-4 text-sm md:text-base text-dark-blue leading-normal">
            There are many factors that go into the cost of completing your
            Private Pilot License. You will need to purchase learning materials,
            a headset, and a logbook at the minimum.
          </p>
        </div>

        <div className="w-full sm:max-w-sm bg-grey-transparent p-5">
          <Image
            src="/assets/blue-clock.svg"
            alt="blue clock"
            width={32}
            height={32}
            loading="lazy"
          />
          <p className="mt-4 text-sm md:text-base text-dark-blue leading-normal">
            While there are some students who are able to fly the minimums and
            take their check-ride, it is more common to fly between 50 and 70
            hours before being ready to complete your check ride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlightCosts;
