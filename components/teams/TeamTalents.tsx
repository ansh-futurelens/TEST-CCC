import React from "react";

const TeamTalent: React.FC = () => {
    return (
        <div className="bg-[#F9F9F9] flex flex-col justify-center text-center py-16 px-4 py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
            <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-teal-900 mb-6 
                           text-left sm:text-left md:text-left lg:text-left xl:text-center">
                Maximize your team's talents starting today!
            </h2>
            <div className="w-full xl:flex xl:justify-center">
                <h3 className="text-xl sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl
                   text-left sm:text-left md:text-left lg:text-left xl:text-center">
                    Equip your team with Mind Skills, so they not only perform, but thrive.
                </h3>
            </div>

            <div className="w-full flex justify-start sm:justify-start md:justify-start lg:justify-start xl:justify-center h-auto pt-14 pb-12">
                <a
                    href="https://apps.apple.com/in/app/id6621264428"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 sm:py-4 px-5 sm:px-7 bg-[#279C97] hover:bg-[#4BC7C1] font-medium text-lg sm:text-2xl text-white rounded-full transition duration-300 ease-in-out select-none text-center"
                >
                    Get Started
                </a>
            </div>

            <h2 className="text-xl md:text-lg lg:text-xl xl:text-2xl text-gray-800 text-base
               text-left sm:text-left md:text-left lg:text-left xl:text-center">
                Have questions?{" "}
                <a
                    href="#"
                    className="border-b-2 border-gray-400 hover:border-red-700 text-gray-800 hover:text-red-700 transition-colors duration-300"
                >
                    Contact Us
                </a>
            </h2>

        </div>
    );
};

export default TeamTalent;
