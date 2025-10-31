import React from "react";
const AdvantageSection: React.FC = () => {
  return (
    <div className="relative w-screen select-none bg-[#F0F0F0]">
      <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 2xl:grid-cols-12 items-center gap-20 2xl:flex-row-reverse">
          <div className="2xl:col-span-8 xl:col-span-8 lg:col-span-8 flex flex-col justify-center text-left 2xl:order-2">
            <h2 className="font-sans font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] text-start">
              The Mind Skills Advantage
            </h2>

            <h6 className="mt-6 text-gray-800 2xl:text-[25px] xl:text-[20px] lg:text-[18px] max-w-5xl">
              Unlock your mind's full potential and gain a competitive edge in
              navigating tomorrow’s challenging environment. Find out how Mind
              Skills can transform your professional trajectory!
            </h6>

            <div className="mt-15">
              <a
                href="https://apps.apple.com/in/app/id6621264428"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-5 px-7 bg-[#279C97] hover:bg-[#4BC7C1] font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-4 flex justify-start xl:justify-start 2xl:justify-center 2xl:order-1">
            <img
              src="/media/team/EBook.png"
              alt="Section Visual"
              className="w-[90%] h-auto sm:w-[60%] lg:w-[80%] xl:w-[60%] 2xl:w-[70%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
