"use client"
import Image from "next/image";
import Link from "next/link";

const PrefightPlanning = () => {
  return (
    <section className="px-3 md:px-5 bg-dark-blue">
      <div className="w-full max-w-screen-xl mx-auto py-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-y-20">
          <div>
            <div className="relative mb-8">
              <h2 className="text-white font-semibold text-2xl md:text-[2rem] leading-[-.176px] text-center md:text-start">
                Preflight Planning
              </h2>
              <div className="max-w-[16rem] h-[2px] bg-light-blue absolute -top-2 left-0 bottom-auto right-0 mx-auto md:mx-0"></div>
            </div>

            <div className="prefight-circle-container grid gap-y-8 md:gap-y-4 base:gap-x-0 gap-x-4 w-full ">
              <div className="flex items-start gap-6">
                <Image
                  src="/assets/circle-blue.svg"
                  alt="circle-1"
                  width={46}
                  height={46}
                  className="block md:hidden"
                />
                <p className="text-white md:mr-12 text-sm :text-base leading-[1.5] tracking-[-.176px] flex-wrap">
                  Our goal here is to provide you with the finest and safest
                  flight training available. In order to do this, it is
                  imperative that the safety procedures listed below be complied
                  with.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src="/assets/circle-blue.svg"
                  alt="circle-1"
                  width={46}
                  height={46}
                  className="block md:hidden"
                />
                <p className="text-white md:mr-12 text-sm :text-base leading-[1.5] tracking-[-.176px]">
                  If you have any questions about the procedures contained in
                  this list, contact your flight instructor for an explanation
                  or Matt Cole at 405-361-5978. Texts can be received there as
                  well.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src="/assets/circle-blue.svg"
                  alt="circle-1"
                  width={46}
                  height={46}
                  className="block md:hidden"
                />
                <p className="text-white md:mr-12 text-sm :text-base leading-[1.5] tracking-[-.176px]">
                  Before you take off for each flight, you should go through
                  both the PAVE test and a simple set of preflight planning
                  tasks.
                </p>
              </div>

              <div className="md:flex items-center hidden">
                <div className="flex">
                  <Image
                    src="/assets/circle-blue.svg"
                    alt="circle-1"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-full h-px bg-circle-border"></div>
              </div>

              <div className="md:flex items-center hidden">
                <div className="flex">
                  <Image
                    src="/assets/circle-blue.svg"
                    alt="circle-1"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-full h-px bg-circle-border"></div>
              </div>

              <div className="md:flex items-center hidden">
                <div className="flex">
                  <Image
                    src="/assets/circle-blue.svg"
                    alt="circle-1"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="w-full h-px bg-circle-border"></div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center flex-col md:flex-row gap-4">
              <div className="w-full md:max-w-[35rem]">
                <h2 className="text-white text-2xl md:text-[2rem] font-semibold tracking-[-.176px] leading-[150%]">
                  Attached are the safety procedures document and private pilot
                  syllabus.
                </h2>
              </div>

              <div className="w-full md:max-w-[35rem]">
                <h2 className="text-white text-sm md:text-base tracking-[-.176px] leading-[1.5]">
                  Always check the current and forecast local, en route and
                  destination weather including the NOTAMS.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 base:grid-cols-5 gap-y-8 sm:gap-x-8 mt-12">
              <Link
                href="https://assets.website-files.com/61c1b225889e5fbb32122680/65c28d15c6c56246b4bd9655_Safety%20Procedures%20%26%20Practices%20BSFT.pdf"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/document-icon.svg"
                  className="document icon"
                  alt="document icon"
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                  Blue Skies Safety Procedures Document
                </p>
              </Link>

              <Link
                href="https://assets.website-files.com/61c1b225889e5fbb32122680/641daff48ab3d80176443719_Cancelation%20Policy.pdf"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/document-icon.svg"
                  className="document icon"
                  alt="document icon"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                  Blue Skies Cancelation Policy
                </p>
              </Link>

              <Link
                href="https://assets.website-files.com/61c1b225889e5fbb32122680/62b5d394c00c481f7f381616_Private%20Pilot%20Syllabus%20BSFT%20(1).pdf"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/document-icon.svg"
                  className="document icon"
                  alt="document icon"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                  Blue Skies Private Pilot Syllabus
                </p>
              </Link>

              <Link
                href="https://assets.website-files.com/61c1b225889e5fbb32122680/624de0d880bd68356ac80884_Radio%20Communications%20BSFT.pdf"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/document-icon.svg"
                  className="document icon"
                  alt="document icon"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                  Blue Skies Radio Communications
                </p>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 base:grid-cols-5 gap-y-8 sm:gap-x-8 md:mt-12">
              <Link
                href="https://aviationweather.gov/"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/external-link-icon.svg"
                  className="external link"
                  alt="external link"
                  width={32}
                  height={32}
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                  Aviation Weather Websites
                </p>
              </Link>

              <Link
                href="https://www.spc.noaa.gov/"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/external-link-icon.svg"
                  className="external link"
                  alt="external link"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                Storm Prediction Websites
                </p>
              </Link>

              <Link
                href="https://www.windalert.com/map#35.8,-97.4,14,1,!15351,2"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/external-link-icon.svg"
                  className="external link"
                  alt="external link"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                Wind Alert Websites
                </p>
              </Link>

              <Link
                href="https://weather.com/weather/tenday/l/USOK0233:1:US"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/external-link-icon.svg"
                  className="external link"
                  alt="external link"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                10 Day Weather Websites
                </p>
              </Link>

              <Link
                href="https://notams.aim.faa.gov/notamSearch/"
                className="flex flex-col rounded-sm border border-light-border200 p-4"
              >
                <Image
                  src="/assets/external-link-icon.svg"
                  className="external link"
                  alt="external link"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <p className="text-white text-base tracking-[-.176px] leading-[1.5] mt-2">
                NOTAM Websites
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrefightPlanning;
