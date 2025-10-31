import { useState } from "react";

const MindSkillsSection = () => {
  const CARDS = [
    {
      img: "/media/team/department1.png",
      title: "Leadership",
      desc: "Clear strategic thinking and effective decision-making directly impacts growth and stakeholder confidence.",
      points: [
        "Motivate and create safe space",
        "Maintain a clear mind in high-pressure",
        "Agile and adaptive during disruptions",
        "Fully engaged in stakeholder interactions",
      ],
    },
    {
      img: "/media/team/department2.png",
      title: "Sales",
      desc: "Increase new lead generation, improve deal conversion rate, improve customer retention",
      points: [
        "Sustained momentum even when faced with losses",
        "Authentic connections with customers",
        "Staying focused on targets",
        "Prioritize facts and data, rather than getting influenced by biases",
      ],
    },
    {
      img: "/media/team/department3.png",
      title: "Operations",
      desc: "Improve efficiency, maintain quality standards, optimize productivity",
      points: [
        "Sustained focus over long durations minimizing defect rates",
        "Higher productivity with improved engagement",
        "Being fully present helps identify safety issues",
        "Consistent throughput even during high-demand periods",
      ],
    },
    {
      img: "/media/team/department4.png",
      title: "Finance",
      desc: "Accurate budgeting and financial reporting, insightful data for decision making, cost optimization",
      points: [
        "Enhanced analytical reasoning",
        "Minimize emotion-led decisions during high-pressure periods",
        "Sustained attention helps prevent and detect errors",
        "Enhanced cross-functional collaboration",
      ],
    },
    {
      img: "/media/team/department5.png",
      title: "Human Resources",
      desc: "Improved retention rates, enhanced employee experience and engagement, recruiting right talent when needed",
      points: [
        "Critical, unbiased approach to candidate evaluation",
        "Active listening to understand employee concerns",
        "Objectivity in performance reviews",
        "Guide others through uncertainty and changes",
      ],
    },
    {
      img: "/media/team/department6.png",
      title: "Information Technology",
      desc: "Faster resolution to outages, on-time deployment, effective collaboration, timely detection of security breaches",
      points: [
        "Sustained attention improves threat detection",
        "Critical evaluation of procedures and protocols",
        "Clear thinking during critical outages and deadlines",
        "Effective communication and collaboration with users",
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleButtonClick = () => {
    setShowAll(true);
  };

  const displayedCards = showAll ? CARDS : CARDS.slice(0, 3);

  return (
    <div className="min-h-screen h-full w-screen bg-gray-50 select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom ">
        <div className="flex flex-col lg:items-center justify-center 2xl:px-20 3xl:px-50 lg:text-center">
          <h2 className="font-sans !font-bold text-2xl sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-teal-900 mx-auto lg:max-w-lg xl:max-w-7xl 2xl:text-[30px] 3xl:text-[40px]">
            Mind Skills are a performance multiplier for your team.
          </h2>
        </div>

        <div className="w-full flex justify-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
            {displayedCards.map((card, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center w-full xl:w-[32%] group"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-44 sm:w-48 md:w-52 lg:w-full h-44 sm:h-48 md:h-52 lg:h-[500px] object-cover rounded-2xl select-none transition duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-teal-600 rounded-2xl text-white p-5 flex flex-col  items-start opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out z-20 ">
                  <h2 className="mb-4 text-start  2xl:text-[18px] xl:text-[20px] lg:text-[14px]  2xl:text-start lg:text-center xl:max-w-6xl xl:mx-auto font-semibold leading-7">
                    {card.desc}
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-start text-xl">
                    {card.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-4 left-4 z-10 text-white text-2xl font-semibold transition duration-500 ease-in-out group-hover:opacity-0">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="flex lg:justify-center h-auto pt-8 ">
            <button
              onClick={handleButtonClick}
              className="cursor-pointer !py-4 !px-7 bg-teal-600 hover:bg-teal-button2-hover font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
            >
              {showAll ? "Get Started" : "View all Teams"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindSkillsSection;
