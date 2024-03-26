"use client"
import Image from "next/image";

const Location = () => {
  return (
    <section className="bg-background-color relative base:pt-20 pt-20 base:pb-20">
      <div className="px-3 md:px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full max-w-xl">
            <div className="mb-8">
              <h2 className="text-2xl md:text-5xl font-semibold text-white tracking-tight">
                BlueSkies location
              </h2>
            </div>
            <div className="grid grid-cols-[min-content,1fr] grid-rows-auto gap-x-5 items-center mb-8">
              <div className="w-8 h-8">
                <Image
                  src="/assets/blue-right-arrow.svg"
                  alt="blue right arrow"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-normal">
                We are located just north of Edmond off of I-35. We operate and
                fly out of the Edmond / Guthrie airport.
              </p>
            </div>

            <div className="grid grid-cols-[min-content,1fr] grid-rows-auto gap-x-5 items-center mb-8">
              <div className="w-8 h-8">
                <Image
                  src="/assets/blue-right-arrow.svg"
                  alt="blue right arrow"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-normal">
                If you are coming from Oklahoma City, you will drive north until
                you reach the Guthrie / Highway 77 North exit number 153. Follow
                Highway 77 for 2.5 miles until you reach the airport entrance.
              </p>
            </div>

            <div className="grid grid-cols-[min-content,1fr] grid-rows-auto gap-x-5 items-center base:mb-0 mb-20">
              <div className="w-8 h-8">
                <Image
                  src="/assets/blue-right-arrow.svg"
                  alt="blue right arrow"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-normal">
                If you are coming from the North headed south, you will take the
                same exit headed south of 153 and follow the same directions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map  */}
      <div className="w-full h-screen max-h-72 base:max-h-full max-w-full base:max-w-[40vw] block static base:absolute top-0 bottom-0 left-auto right-0">
        <div className="w-full h-full max-h-full flex flex-row">
          <iframe
            width="100%"
            src="https://api.mapbox.com/styles/v1/leouxui/ckxjcvqo00tx814pfq8rxdlgt.html?title=false&amp;access_token=pk.eyJ1IjoibGVvdXh1aSIsImEiOiJja2k4dm9udTIwOW15MnlvYXpid2lqNWllIn0.Nlak8iPGWvNhrRAI0ftBrg&amp;zoomwheel=false#17.82/35.852175/-97.417374"
            title="Blueskies Flight School"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
