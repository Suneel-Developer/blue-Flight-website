"use client"

const Table = () => {
  return (
    <section className="bg-dark-blue px-3 md:px-5">
      <div className="w-full max-w-screen-xl mx-auto py-10 md:py-20">
        <div className="grid gap-y-12">
          <div>
            <h3 className="text-light-blue font-semibold uppercase text-base">
              Breakdown
            </h3>
            <h1 className="text-white font-semibold text-3xl mt-4">
              Private pilot cost
            </h1>
          </div>
          <div className="grid grid-cols-1 grid-rows-13 gap-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Minimum 40 hours aircraft rental
                </p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  @$160/hour
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $6,400
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Minimum 70 hours aircraft rental
                </p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  @$160/hour
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $11,200
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Minimum 20 hours dual flight instruction
                </p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  @$50/hour
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $1,000
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Minimum 60 hours dual flight instruction
                </p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  @$50/hour
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $3,000
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Average 40 hours ground instruction
                </p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  @$50/hour
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $2,000
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Average Annual Aircraft Rental Insurance
                </p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  w/ $100,000 Hull Coverage
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $1,000
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Average home study curriculum, online testing <br />
                  programs, ground school books, supplies
                </p>
              </div>

              <div className="bg-light-blue hidden sm:flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                ></p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $650
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  FAA Practical Check Ride
                </p>
              </div>

              <div className="bg-light-blue hidden sm:flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                ></p>
              </div>

              <div className="bg-shade-blue   flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $600
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  Headset (Range $150- $1200)
                </p>
              </div>

              <div className="bg-light-blue hidden sm:flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                ></p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $350
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  FAA Written
                </p>
              </div>

              <div className="bg-light-blue hidden sm:flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                ></p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $175
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-grey-200 flex items-center py-4 px-3">
                <p
                  className="text-base text-dark-blue"
                  style={{ lineHeight: "1.5" }}
                >
                  FAA Medical Certificate
                </p>
              </div>

              <div className="bg-light-blue hidden sm:flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                ></p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $6150
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-transparent hidden sm:flex items-center py-4 px-3">
                <p className="text-base text-dark-blue"></p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  Minimum Total
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $12,325
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-transparent hidden sm:flex items-center py-4 px-3">
                <p className="text-base text-dark-blue"></p>
              </div>

              <div className="bg-light-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  National Average (70 hours) Total
                </p>
              </div>

              <div className="bg-shade-blue flex items-center justify-center py-4 px-3">
                <p
                  className="text-base text-white"
                  style={{ lineHeight: "1.5" }}
                >
                  $19,125
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white font-normal text-base" style={{lineHeight: '1.5', letterSpacing: '-.176px'}}>
              DISCLAIMER: This is a good faith ESTIMATE. Every student learns
              differently, consistency may vary, weather and
              <br />
              aircraft availability may vary, and therefore, quoted flight
              rental times, flight instruction times &amp; ground instruction
              <br />
              times may vary. Thus, the above range is only an estimate and may
              vary further from above listed ranges. Quoted
              <br />
              rental and instruction prices are current as of February 2024 and
              are based on wet rate rental of N20464- $160/ hour.
              <br />
              Blue Skies Flight Training LLC reserves the right to adjust rental
              and/or instruction prices as fuel prices change,
              <br />
              aircraft upgrades are accomplished, and/or operating expenses
              change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
