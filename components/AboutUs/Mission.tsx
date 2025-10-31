import React, { useState } from "react";

const Mission: React.FC = () => {
    const imageSrc = "/media/about_us/our_mission.png";
    const title = "Our mission";

    // Always visible description
    const alwaysVisibleText =
        "At Q Studio, we champion mental fitness as the cornerstone of a happy, holistic, and fulfilling life. Just like for our physical health we need to prioritize physical fitness; long-lasting mental fitness can be achieved only with a deliberate focus.";

    // Extra content (shown when expanded)
    const extraContent = `
Our unwavering commitment is to help you unlock your full potential, enjoy meaningful relationships, and find joy and purpose in everything you do. 
Our mission is to bring the knowledge, methods, and support you need to build and sustain mental fitness. 
Through personalized, science-based concepts, tools, and techniques, you can achieve genuine, long-lasting transformation to the best version of yourself.

We believe that nurturing mental fitness and wellbeing isn't just a personal journey - it's the catalyst for creating a more compassionate, innovative, and harmonious world. Join us in revolutionizing mental fitness for everyone, one mind at a time.

    `;

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <section className="relative w-screen select-none bg-[#F0F0F0]">
            <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
                <div className="flex flex-col 2xl:flex-row items-start justify-between gap-10">

                    {/* Image Section */}
                    <div className="flex justify-center 2xl:w-[40%] select-none">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-[500px] max-w-full h-auto object-contain rounded-2xl"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col w-full 2xl:w-[60%] items-start text-left z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-teal-900 mb-4">
                            {title}
                        </h2>

                        {/* Always visible text */}
                        <h3 className="text-gray-700 text-base md:text-xl leading-relaxed mb-4 whitespace-pre-line">
                            {alwaysVisibleText}
                        </h3>

                        {/* Extra content shown only when expanded */}
                        {showMore && (
                            <h3 className="text-gray-700 text-base md:text-xl leading-relaxed mb-4 whitespace-pre-line">
                                {extraContent}
                            </h3>
                        )}

                        <button
                            onClick={handleToggle}
                            className="block text-gray-800 text-2xl underline underline-offset-4 hover:text-red-700 transition"
                        >
                            {showMore ? "View less" : "Learn more"}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Mission;
