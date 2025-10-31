const EveryRole = () => {
  const CARDS = [
    {
      img: "/media/organizations/impact1.png",
      title: "Everyone",
      points: [
        "Adaptability",
        "Focus",
        "Collaboration",
        "Initiative",
        "Resilience",
        "Self-awareness",
      ],
    },
    {
      img: "/media/organizations/impact2.png",
      title: "Managers",
      points: [
        "Empathy",
        "Decisiveness",
        "Composure",
        "Flexibility",
        "Active listening",
        "Conflict mediation",
      ],
    },
    {
      img: "/media/organizations/impact3.png",
      title: "Leadership",
      points: [
        "Inspirational",
        "Confidence",
        "Authenticity",
        "Agility",
        "Vulnerability",
        "Strategic thinking",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 select-none overflow-hidden">
      <div className="container-custom h-full pt-16 sm:pt-20 lg:pt-28 xl:pt-34 px-4 sm:px-6 lg:px-10 2xl:px-20">
        <div className="flex flex-col lg:items-center justify-center lg:text-center mb-10">
          <h2
            className="font-sans font-bold text-teal-900 
                        text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] 2xl:text-[42px] 
                        leading-snug tracking-wide mx-auto max-w-4xl"
          >
            Mind Skills for every role and goal.
          </h2>

          <h6
            className="text-gray-800 mt-4 
                        text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 
                        font-normal lg:font-semibold xl:max-w-5xl xl:mx-auto leading-relaxed"
          >
            From frontline employees to C-suite executives, every person across
            an organization benefits when equipped with Mind Skills.
          </h6>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="relative group 
                                w-full sm:w-full md:w-full lg:w-full xl:w-[45%] 2xl:w-[30%]
                                flex flex-col items-center text-center rounded-2xl overflow-hidden"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full 
                                    h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[440px] 2xl:h-[460px]
                                    object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-[#50418C]/95 
                                    rounded-2xl flex flex-col items-center justify-center 
                                    text-white opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 ease-in-out p-4 sm:p-6 lg:p-8"
                >
                  <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 sm:mb-6">
                    {card.title}
                  </h2>

                  <div className="flex flex-col items-center space-y-3">
                    {card.points.map((point, idx) => (
                      <h3
                        key={idx}
                        className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-center"
                      >
                        {point}
                      </h3>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute bottom-4 left-4 
                                    text-white text-lg sm:text-xl md:text-2xl lg:text-3xl 
                                    font-semibold transition duration-500 ease-in-out group-hover:opacity-0"
                >
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-8 pb-12">
          <button
            className="cursor-pointer py-3 px-6 sm:py-4 sm:px-8 
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

export default EveryRole;
