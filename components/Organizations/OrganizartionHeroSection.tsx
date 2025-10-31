import Header from "../common/Header";

const OrganizartionHeroSection = () => {
  return (
    <div
      className="min-h-screen h-full w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/media/organizations/organizations_bg.jpg')" }}

    >
      <div className="container-custom">
        <Header />
        <div
          className="
            pt-20 lg:pt-24 xl:pt-32
            flex flex-col xl:flex-row
            h-auto xl:h-[80vh]
            items-start
            gap-8 xl:gap-16
            pb-16
          "
        >
          <div
            className="
              w-full xl:w-[68%]
              h-auto
              text-left
            "
          >
            <div
              className="
                pt-15
                h-auto
                max-w-full
                select-none
              "
            >
              <h1
                className="
                  !font-sans !font-bold !text-white
                  text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl
                  leading-snug sm:leading-tight lg:leading-tight
                "
              >
                Channel human capacity <br/> into unstoppable growth.

              </h1>
              <h2
                className="
                  font-medium sm:font-seminormal
                  text-base sm:text-lg lg:text-xl xl:text-2xl
                  leading-normal tracking-normal
                  text-white !mt-8
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Tap into the full potential of your entire organization and unlock<br/>
                 levels of growth and innovation never seen before - all driven by<br/>
                  highly-engaged, balanced, and resilient employees.

              </h2>
            </div>

            <div className="center-v h-auto pt-14 pb-12">
              <a
                href="#"
                className="!py-4 !px-7 bg-white hover:bg-white-hover font-medium text-2xl antialiased text-[#4F418C] rounded-full transition duration-300 ease-in-out"
              >
                Schedule a Demo
              </a>
            </div>

          </div>

          <div
            className="
    w-full xl:w-[30%]
    h-auto
    flex justify-start items-start
    xl:mt-0
  "
          >
            <img
              src="/media/organizations/organizations.png"

              alt="Landing Girl"
              className="
      w-full h-auto object-contain
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full 2xl:max-w-full
      mt-6  // Added slight bottom padding by moving image down
    "
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrganizartionHeroSection;
