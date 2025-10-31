import Header from "../common/Header";

const AboutUsHeroSection = () => {
  return (
    <div
      className="min-h-screen h-full w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/media/about_us/about_us_bg.png')" }}
    >
      <div className="container-custom">
  <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#FFC25E"
          activeTextColor="#FFFFFF"
          hoverBgColor="#FFC25E"
          hoverTextColor="#FFFFFF"
          buttonBgColor="#02514B"
          buttonHoverColor="#007c74"
        />
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
                clear thoughts.

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
                Revolutionizing mental fitness by making<br/>proven strategies and techniques accessible<br/>
                worldwide, empowering everyone to build the<br/>
                mental strength needed for peak performance,<br/>
                meaningful connections, and a deeply fulfilling<br/>life.

              </h2>
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
              src="/media/about_us/about_us_heading.png"

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

export default AboutUsHeroSection;
