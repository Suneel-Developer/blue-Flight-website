"use client"
import Image from "next/image";
import Link from "next/link";

const Steps = () => {
  return (
    <section>
      <div className="px-3 md:px-5 w-full max-w-screen-xl mx-auto py-20">
        <div className="grid grid-cols-1 gap-y-16">
          <div className="w-full max-w-xl mx-auto">
            <h2 className="text-center font-semibold text-[2rem] text-dark-blue">
              Next steps
            </h2>
            <p className="text-center text-base text-dark-blue mt-4 leading-[1.5]">
              Once you have met these requirements, your instructor will meet
              with you to go over your logbook and to make sure you are ready to
              take the oral exam and check ride with an FAA examiner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-x-8">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/pen-icon.svg"
                alt="pen icon"
                width={49}
                height={48}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">
                Written test
              </h3>
              <p className="text-center tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2">
                A written test is also required prior to taking the check ride
                and includes a 60 question multiple choice exam.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/clock-icon-3.svg"
                alt="clock icon"
                width={49}
                height={48}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">Time</h3>
              <p className="text-center tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2">
                Two hours are allotted to take the test. After all the
                requirements are met, we call the FAA Examiner.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/question-mark-icon.svg"
                alt="pen icon"
                width={49}
                height={48}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">
                Questions
              </h3>
              <p className="text-center tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2">
                Those 60 questions are pooled from a question bank of
                approximately 102-400 questions.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/medal-icon.svg"
                alt="pen icon"
                width={49}
                height={48}
              />
              <h3 className="font-medium text-xl text-dark-blue mt-4">
                Requirements
              </h3>
              <p className="text-center tracking-[-.176px] text-sm md:text-base leading-[1.5] textdark-blue mt-2">
                They will administer an oral examination and a flight
                examination. This is known as a check ride and has a cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shade-purple">
        <div className="px-3 md:px-5 w-full max-w-screen-xl mx-auto py-16 md:py-20">
          <div className="w-full mx-auto max-w-[64rem]">
            <div className="pilotsteps-banner grid md:gap-x-8 gap-y-8">
              <div className="border border-white rounded p-2 flex items-center gap-4">
                <Image
                  src="/assets/circle-tikmark.svg"
                  alt="circle-tikmark"
                  width={33}
                  height={32}
                />
                <p className="text-sm md:text-base text-white leading-[1.5] tracking-[1.5]">
                  Upon successful completion of an FAA exam, you will be
                  licensed as a Private Pilot and ready to take to the Skies!
                </p>
              </div>

              <Link href="/about" className="self-center justify-self-center flex gap-4 max-w-[18.75rem] bg-light-blue rounded-lg py-4 px-7 text-white font-medium text-base">
                <Image src="/assets/circle-leftArrow.svg" alt="left arrow" width={25} height={24} />
                Learn more about costs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
