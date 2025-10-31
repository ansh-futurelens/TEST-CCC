const Qstudio = () => {
  const CARDS = [
    {
      img: "/media/team/upskill.png",
      title: "Upskill.",
      desc: "Each team member learns Mind Skills boosting their mental performance.",
    },
    {
      img: "/media/team/transform.png",
      title: "Transform",
      desc: "Teams incorporate Mind Skills into ways of working, transforming their experience. ",
    },
    {
      img: "/media/team/elevate.png",
      title: "Elevate",
      desc: "Collaborate better, adapt to changes, and maintain focus even under pressure.",
    },
  ];

  return (
    <div className="min-h-screen h-full w-screen bg-[#F3F3F3] select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom ">
        <div className="flex flex-col lg:items-center justify-center 2xl:px-20 3xl:px-50 lg:text-center">
          <h2 className="font-sans !font-bold text-2xl sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-teal-900 mx-auto lg:max-w-lg xl:max-w-7xl 2xl:text-[30px] 3xl:text-[40px]">
            How teams excel with Q Studio
          </h2>
        </div>

        <div className="py-10 w-full flex justify-center">
          <div className="flex flex-col xl:flex-row  justify-between items-start w-full max-w-7xl gap-6">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 w-full"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
                />
                <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                  {card.title}
                </h4>
                <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-5 2xl:pt-10  w-full   ">
          <div className="flex flex-col   w-full  gap-6">
            <h2 className="font-sans !font-bold text-2xl  sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-gray-800  2xl:text-[30px] 3xl:text-[40px] ">
              What to expect
            </h2>
            <div className="relative mt-10">
              <div className="absolute lg:left-[320px] top-0 bottom-0 w-[2px] bg-gray-line"></div>

              <div className="absolute lg:left-[313px] -left-[5px] z-10">
                <div className="absolute -top-[2px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[270px]  lg:top-[320px] top-[450px]  w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[520px]   lg:top-[640px] top-[880px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[780px]  lg:top-[930px] top-[1330px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
              </div>
              <div className="flex flex-col gap-14">
                {[
                  {
                    img: "/media/team/whatE1.png",
                    title: "Seamless learning",
                    desc: "Unlimited access to all content on the MyQStudio app. A growing library of more than 40 micro-learning courses, monthly challenges, quick guided exercises, and much more.",
                  },
                  {
                    img: "/media/team/whatE2.png",
                    title: "Practical guides",
                    desc: "Latest trends and insights from Q Studio experts on mental fitness and Mind Skills at the workplace.",
                  },
                  {
                    img: "/media/team/whatE3.png",
                    title: "Reporting and analytics",
                    desc: "See team engagement and progress, drive accountability, motivate team members.",
                  },
                  {
                    img: "/media/team/whatE4.png",
                    title: "Exclusive webinars",
                    desc: "An opportunity to hear from Q Studio experts on key topics, ask questions, and network with a like-minded community - all from the convenience of your own workspace.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row ml-[40px] lg:ml-0 items-start gap-8 relative"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl lg:w-64 w-full h-48 object-cover"
                      />
                    </div>

                    <div className="flex flex-col lg:ml-[100px] mt-2">
                      <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-teal-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[24px] ">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full   ">
          <div className="flex lg:justify-center h-auto pt-14">
            <a
              href="https://apps.apple.com/in/app/id6621264428"
              target="_blank"
              rel="noopener noreferrer"
              className="!py-5 !px-7 bg-[#279C97] hover:bg-[#4BC7C1] font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qstudio;
