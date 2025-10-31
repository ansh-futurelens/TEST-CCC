const MindEnergySection = () => {
  return (
    <div className=" h-full  w-screen bg-gray-bg select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom ">
        <div className="flex flex-col xl:items-center justify-center xl:px-8 xl:text-center">
          <h2 className="font-sans !font-bold sm:font-normal xl:text-[36px] lg:text-[28px] lg:text-xl sm:text-2xl md:text-xl text-2xl !leading-[100%] !tracking-wide text-teal-900">
            Complexity. Disruption. Chaos.
          </h2>
          <h6 className="xl:text-[26px] lg:text-[18px] text-gray-800 xl:text-center xl:max-w-6xl xl:mx-auto mt-4 xl:font-light !lg:font-normal">
            Our brains are not wired to handle this velocity of change. The
            relentless pressure to remain constantly productive in a
            hyperconnected world keeps us on the edge.
          </h6>
        </div>

        <div className="py-10">
          <div className="flex flex-col xl:flex-row xl:justify-center gap-8 xl:px-6">
            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              <div className="border-white border rounded-2xl p-5 flex items-center gap-6">
                <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                  <img
                    src="/media/landing/feeling.png"
                    alt="Feeling overwhelmed"
                    className="w-33 h-28 object-cover rounded-sm select-none"
                  />
                </div>
                <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] sm:w-[70%] w-[60%] text-left">
                  <h4 className="text-lg font-bold text-teal-900">
                    Feeling overwhelmed
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Constantly operating in crisis mode with variables that lie
                    outside our control.
                  </p>
                </div>
              </div>

              <div className="border-white border rounded-2xl p-5 flex items-center gap-6">
                <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                  <img
                    src="/media/landing/difficulty.png"
                    alt="Difficulty concentrating"
                    className="w-33 h-28 object-cover rounded-sm select-none"
                  />
                </div>
                <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] sm:w-[70%] w-[60%] text-left">
                  <h4 className="text-lg font-bold text-teal-900">
                    Difficulty concentrating
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Information overload and incessant juggling make it
                    difficult to focus on any single item.
                  </p>
                </div>
              </div>

              <div className="border-white border rounded-2xl p-5 flex items-center gap-6">
                <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                  <img
                    src="/media/landing/lack_motivation.png"
                    alt="Lack of motivation"
                    className="w-33 h-28 object-cover rounded-sm select-none"
                  />
                </div>
                <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] sm:w-[70%] w-[60%] text-left">
                  <h4 className="text-lg font-bold text-teal-900">
                    Playing catchup
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Accelerated timelines for decision making, often with
                    incomplete information.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full xl:w-1/2">
              <div className="border-white border rounded-2xl p-5 flex items-center gap-6">
                <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                  <img
                    src="/media/landing/stress.png"
                    alt="Stressed about the future"
                    className="w-33 h-28 object-cover rounded-sm select-none"
                  />
                </div>
                <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] w-[60%] sm:w-[70%] text-left">
                  <h4 className="text-lg font-bold text-teal-900">
                    Stressed about the future
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Your mind is constantly filled with worst-case scenarios.
                  </p>
                </div>
              </div>

              <div className="border-white border rounded-2xl p-5 flex items-center gap-6">
                <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                  <img
                    src="/media/landing/irritate.png"
                    alt="Irritability and short-temper"
                    className="w-33 h-28 object-cover rounded-sm select-none"
                  />
                </div>
                <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] w-[60%] sm:w-[70%] text-left">
                  <h4 className="text-lg font-bold text-teal-900">
                    Irritability and escalating conflicts
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Hyper-engaged minds turn minor incidents into full blown
                    arguments.
                  </p>
                </div>
              </div>

              <div className="border-white border rounded-2xl p-5 flex items-center gap-6">
                <div className="2xl:w-[20%] xl:w-[30%] sm:w-[30%] w-[40%] md:w-[20%] flex">
                  <img
                    src="/media/landing/reduce_productivity.png"
                    alt="Reduced productivity"
                    className="w-33 h-28 object-cover rounded-sm select-none"
                  />
                </div>
                <div className="2xl:w-[80%] xl:w-[70%] md:w-[80%] w-[60%] sm:w-[70%] text-left">
                  <h4 className="text-lg font-bold text-teal-900">Always on</h4>
                  <p className="text-gray-600 text-sm mt-2">
                    The lines between work and personal life haven't just
                    blurred, they have vanished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindEnergySection;
