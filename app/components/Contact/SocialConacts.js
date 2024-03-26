"use client"
import Image from "next/image";
import Link from "next/link";

const SocialConacts = () => {
  return (
    <section className="bg-dark-blue px-3 md:px-5 py-10 md:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <div>
          <h4 className="text-light-blue uppercase text-center font-semibold text-base mb-4">
            CONTACT US
          </h4>
          <h2 className="text-white text-center font-semibold text-[2rem] tracking-tight">
            We’d love to hear from you
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 base:grid-cols-[max-content,max-content,max-content] base:gap-x-4 base:gap-y-0 gap-y-4 mx-auto mt-12">
            <div className="border border-light-blue max-w-[19rem] rounded-sm py-6 px-4 flex items-center">
              <Image
                src="/assets/Location-icon.svg"
                alt="location icon"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <p className="text-white text-base mb-4">Location</p>
                <p className="text-white text-base leading-normal tracking-tight">
                  Blue Skies Flight School, 520 Airport Rd, Hangar 4, Guthrie,
                  OK 73044
                </p>
              </div>
            </div>

            <div className="border border-light-blue max-w-[19rem] rounded-sm py-6 px-4 flex items-center">
              <Image
                src="/assets/Phone-icon.svg"
                alt="phone icon"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <p className="text-white text-base">Call Us</p>
                <p className="text-white text-base leading-normal tracking-tight mb-4">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  href="#"
                  className="text-light-blue text-base leading-normal tracking-tight"
                >
                  +1 405-260-1010
                </Link>
              </div>
            </div>

            <div className="border border-light-blue max-w-[19rem] rounded-sm py-6 px-4 flex items-center">
              <Image
                src="/assets/Message-icon.svg"
                alt="Message icon"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <p className="text-white text-base">Chat to Instructors</p>
                <p className="text-white text-base leading-normal tracking-tight mb-4">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  href="#"
                  className="text-light-blue text-base leading-normal tracking-tight"
                >
                  Send us a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConacts;
