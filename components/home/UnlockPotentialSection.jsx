import React from "react";

const UnlockPotentialSection = () => {
  return (
    <div className="relative w-screen select-none bg-gray-bg">
      <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex flex-col items-center 2xl:items-start justify-between gap-10 2xl:flex-row">
          <div className="flex flex-col 2xl:w-[60%] xl:pt-20 lg:pt-10 pt-10 z-10">
            <h2 className="font-sans !font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] 2xl:text-start lg:text-center">
              Unlock the full potential of your organization.
            </h2>

            <h6 className="mt-8 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center xl:max-w-6xl xl:mx-auto">
              In today's rapidly evolving business landscape, technical skills
              alone are no longer sufficient for growth. Organizations need to
              invest in upskilling employees with Mind Skills to navigate
              complexities, drive innovation, and adapt to change.
            </h6>

            <h6 className="mt-4 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center">
              Find out how Q Studio’s business solutions can help you unlock
              growth.
            </h6>

            <div className="flex flex-col lg:flex-col 2xl:flex-row lg:items-center 2xl:items-start justify-start lg:justify-center 2xl:justify-start items-start xl:mt-16 lg:mt-10 mt-6 gap-6 xl:items-center">
              <a
                href="https://apps.apple.com/in/app/id6621264428"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 bg-teal-900 hover:bg-teal-800 font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out select-none"
              >
                Schedule a Demo
              </a>

              <a
                href="https://apps.apple.com/in/app/id6621264428"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lg md:text-xl 2xl:text-2xl text-gray-800 hover:text-teal-900 border-b border-gray-800 transition duration-300 ease-in-out lg:self-center"
              >
                Check out our solutions
              </a>
            </div>
          </div>

          <div className="flex justify-center 2xl:w-[40%] select-none">
            <img
              src="/media/landing/unlock.png"
              alt="Unlock Potential Illustration"
              className="w-[500px] max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockPotentialSection;
