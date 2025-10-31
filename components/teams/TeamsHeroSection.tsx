import Header from "../common/Header";

const TeamsHeroSection = () => {
  return (
    <div
      className="min-h-screen h-full w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/media/bgs/teams_bg.webp')" }}
    >
      <div className="container-custom">
        <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#4eaea9"
          activeTextColor="#FFFFFF"
          hoverBgColor="#4eaea9"
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
                Collaborate,
                <br /> Innovate, Excel,
                <br />
                Together.
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
                Clear minds are catalysts to innovation, emotional intelligence
                <br />
                facilitates constructive conflict resolution, and open
                <br />
                communication creates an environment for authentic
                <br /> collaboration - transforming individual strengths into
                collective
                <br /> excellence.
              </h2>
            </div>

            <div className="pt-14 pb-12 flex justify-start">
              <a
                href="https://apps.apple.com/in/app/id6621264428"
                target="_blank"
                rel="noopener noreferrer"
                className="!py-4 !px-7 bg-white hover:bg-white-hover font-medium text-2xl antialiased text-teal-600 rounded-full transition duration-300 ease-in-out select-none"
              >
                Get Started
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
              src="/media/team/teams_img.png"
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

export default TeamsHeroSection;
