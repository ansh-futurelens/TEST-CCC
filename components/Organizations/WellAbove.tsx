const WellAbove = () => {
  return (
    <div className="h-full w-screen bg-[#F0F0F0] select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom">
        <div className="flex flex-col xl:items-center justify-center xl:px-8 xl:text-center">
          <h2
            className="font-sans !font-bold sm:font-normal xl:text-[40px] lg:text-[28px] sm:text-2xl md:text-[28px] text-2xl !leading-[100%] !tracking-wide text-teal-900"
            dangerouslySetInnerHTML={{
              __html:
                "The WellAbove Program<br/>A training program for your entire organization.",
            }}
          ></h2>
          <h6
            className="xl:text-[26px] lg:text-[18px] sm:text-[20px] md:text-[20px] text-gray-800 xl:text-center xl:max-w-6xl xl:mx-auto mt-5 xl:font-normal !lg:font-normal"
            dangerouslySetInnerHTML={{
              __html:
                "Technical skills are not enough to navigate complexities facing the workforce.<br/>Equipping Talent with Mind Skills for mental clarity, emotional regulation, and resilience<br/>is necessary for performance and growth.",
            }}
          ></h6>
        </div>

        <div className="py-10">
          <div className="flex flex-col xl:flex-row xl:justify-center gap-6 xl:px-6">
            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              <div className="border-white border rounded-4xl p-5 flex items-start gap-4 h-full">
                <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36">
                  <img
                    src="/media/organizations/upskill1.png"
                    alt="A shift from risk-reduction to competence-enhancement."
                    className="w-full h-auto object-cover rounded-xl select-none"
                  />
                </div>
                <div className="flex-grow flex flex-col text-left">
                  <h4 className="text-xl font-bold text-teal-900">
                    A shift from risk-reduction to competence-enhancement.
                  </h4>
                  <h3 className="text-gray-600 text-lg mt-2">
                    Improve work performance by enhancing cognitive competencies
                    rather than solely relying on resources for detection and
                    treatment of mental illness.
                  </h3>
                </div>
              </div>

              <div className="border-white border rounded-4xl p-5 flex items-start gap-4 h-full">
                <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36">
                  <img
                    src="/media/organizations/upskill3.png"
                    alt="Transform learning into sustainable changes."
                    className="w-full h-auto object-cover rounded-xl select-none"
                  />
                </div>
                <div className="flex-grow flex flex-col text-left">
                  <h4 className="text-xl font-bold text-teal-900">
                    Transform learning into sustainable changes.
                  </h4>
                  <h3 className="text-gray-600 text-lg mt-2">
                    A self-paced learning experience along with expert guidance
                    on workplace applicability helps employees turn learning new
                    skills into lasting workplace changes.
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              <div className="border-white border rounded-4xl p-5 flex items-start gap-4 h-full">
                <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36">
                  <img
                    src="/media/organizations/upskill2.png"
                    alt="So affordable you can roll-it out to the whole company."
                    className="w-full h-auto object-cover rounded-xl select-none"
                  />
                </div>
                <div className="flex-grow flex flex-col text-left">
                  <h4 className="text-xl font-bold text-teal-900">
                    So affordable you can roll-it out to the whole company.
                  </h4>
                  <h3 className="text-gray-600 text-lg mt-2">
                    Learning Mind Skills with Q Studio is at a fraction of the
                    cost as compared to the average corporate training cost.
                  </h3>
                </div>
              </div>

              <div className="border-white border rounded-4xl p-5 flex items-start gap-4 h-full">
                <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36">
                  <img
                    src="/media/organizations/upskill4.png"
                    alt="The program pays for itself."
                    className="w-full h-auto object-cover rounded-xl select-none"
                  />
                </div>
                <div className="flex-grow flex flex-col text-left">
                  <h4 className="text-xl font-bold text-teal-900">
                    The program pays for itself.
                  </h4>
                  <h3 className="text-gray-600 text-lg mt-2">
                    Quantitative and qualitative data demonstrates the ROI and
                    impact on business metrics.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex 
                justify-start  /* default: left aligned */
                sm:justify-start 
                md:justify-start 
                lg:justify-start 
                xl:justify-center  /* center on extra large screens */
                pt-3"
        >
          <button
            className="cursor-pointer py-3 px-6 sm:py-5 sm:px-6 
                   bg-[#50418C] hover:bg-[#7B6CB9] 
                   text-base sm:text-lg md:text-xl lg:text-2xl 
                   font-medium text-white rounded-full 
                   transition duration-300 ease-in-out"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellAbove;
