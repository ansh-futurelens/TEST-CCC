import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="h-full !min-h-screen w-screen bg-cover bg-center bg-[#F0F0F0]">
      <section className=" py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20 ">
        <div className="max-w-7xl mx-auto text-left md:text-center">
          <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl mx-auto font-bold text-[var(--color-teal-900)] leading-normal">
            The answers are all within you.
            <br />
            <span className="block sm:inline text-[var(--color-teal-900)]">
              You just need the right set of skills to tap into them.
            </span>
          </h6>
          <h6 className="text-[#535353] text-base sm:text-lg md:text-2xl max-w-5xl mx-auto mb-10 text-left md:text-center">
            It’s easier than you think. With engaging content backed by science
            and intuitive exercises on the MyQStudio app, you can start seeing
            changes almost immediately!
          </h6>

          <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full sm:w-100 md:w-96 lg:w-[426px] flex">
              <div className="flex flex-col flex-grow bg-[#F3F3F3] rounded-3xl p-4 border border-[#FCFCFC]">
                <img
                  src="/media/individuals/skill1.png"
                  alt="You know who you are."
                  className="rounded-2xl mb-6 w-full h-52 sm:h-56 md:h-60 object-cover"
                />
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h6 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center text-[var(--color-teal-900)]">
                      You know who you are.
                    </h6>
                    <h6 className="text-[#535353] md:text-[20px] leading-relaxed text-center tracking-wide">
                      We just help you understand yourself better. Identify what
                      stresses you out, what sets you off, and why you react the
                      way you do – all explained in simple terms that you can
                      relate to.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 w-full sm:w-100 md:w-96 lg:w-[426px] flex">
              <div className="flex flex-col flex-grow bg-[#F3F3F3] rounded-3xl p-4 border border-[#FCFCFC]">
                <img
                  src="/media/individuals/skill2.png"
                  alt="Learn a different, better way."
                  className="rounded-2xl mb-6 w-full h-52 sm:h-56 md:h-60 object-cover"
                />
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h6 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center text-[var(--color-teal-900)]">
                      Learn a different, better way.
                    </h6>
                    <h6 className="text-[#535353] md:text-[20px] leading-relaxed text-center tracking-wide">
                      Learn useful techniques and strategies with hands-on
                      practice. Try out exercises using real-life scenarios, and
                      practice the skills you learn in everyday life.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 w-full sm:w-100 md:w-96 lg:w-[426px] flex">
              <div className="flex flex-col flex-grow bg-[#F3F3F3] rounded-3xl p-4 border border-[#FCFCFC]">
                <img
                  src="/media/individuals/skill3.png"
                  alt="See the change in you."
                  className="rounded-2xl mb-6 w-full h-52 sm:h-56 md:h-60 object-cover"
                />
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h6 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center text-[var(--color-teal-900)]">
                      See the change in you.
                    </h6>
                    <h6 className="text-[#535353] md:text-[20px] leading-relaxed text-center tracking-wide">
                      Watch yourself transform as you gain awareness and control
                      of your thoughts. Notice how you handle your emotions
                      better, stay more balanced, and respond, not react.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
