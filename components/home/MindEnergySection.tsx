import { CONTENT_CONFIG } from "../../config/contentConfig";

const MindEnergySection = () => {
  const { HEADING, SUB_HEADING, LEFT_CARDS, RIGHT_CARDS } =
    CONTENT_CONFIG.LANDING_PAGE.MIND_ENERGY;

  return (
    <div className=" h-full  w-screen bg-gray-bg select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom ">
        <div className="flex flex-col xl:items-center justify-center xl:px-8 xl:text-center">
          <h2 className="font-sans !font-bold sm:font-normal xl:text-[36px] lg:text-[28px] lg:text-xl sm:text-2xl md:text-xl text-2xl !leading-[100%] !tracking-wide text-teal-900">
            {HEADING}
          </h2>
          <h6 className="xl:text-[26px] lg:text-[18px] text-gray-800 xl:text-center xl:max-w-6xl xl:mx-auto mt-4 xl:font-light !lg:font-normal">
            {SUB_HEADING}
          </h6>
        </div>

        <div className="py-10">
          <div className="flex flex-col xl:flex-row xl:justify-center gap-8 xl:px-6">
            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              {LEFT_CARDS.map((card, i) => (
                <div
                  key={`left-card-${i}`}
                  className="border-white border rounded-2xl p-5 flex items-center gap-6 "
                >
                  <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex ">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-33 h-28 object-cover rounded-sm select-none"
                    />
                  </div>
                  <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] sm:w-[70%] w-[60%] text-left">
                    <h4 className="text-lg font-bold text-teal-900 ">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2 ">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              {RIGHT_CARDS.map((card, i) => (
                <div
                  key={`right-card-${i}`}
                  className="border-white border rounded-2xl p-5 flex items-center gap-6"
                >
                  <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-33 h-28 object-cover rounded-sm select-none"
                    />
                  </div>
                  <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] w-[60%]  sm:w-[70%] text-left">
                    <h4 className="text-lg font-bold text-teal-900">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindEnergySection;
