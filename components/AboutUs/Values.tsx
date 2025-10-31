import React, { useState } from "react";

const Values: React.FC = () => {
    const imageSrc = "/media/about_us/our_values.png";
    const title = "Our values";

    const heading =
        "At the heart of Q Studio lies three fundamental core values: Integrity, Respect, and Authenticity.";

    // Always visible description
    const alwaysVisibleText =
        "We believe true mental fitness and peak performance stem from making decisions with unwavering honesty, treating each person with dignity regardless of background or position, and encouraging genuine self-expression.";

    // Extra content (shown when expanded)
    const extraContent = `
Our approach to upskilling the workforce is built on these principles—creating experiences where our customers can trust their unique growth journey, tapping into their authentic strengths. 

We actively practice these values within our own team. Integrity shows in our transparent communication and decision-making processes, where we prioritize honest feedback and ethical considerations above all else. Respect manifests in our collaborative approach, where every team member's voice matters and diverse perspectives are actively sought out. Authenticity flourishes in our workspace, where team members are encouraged to bring their whole selves to work, leveraging their unique strengths and experiences. 

By embodying these values in everything we do, we help organizations and individuals build the mental fitness needed to thrive in today's complex work environment.
    `;

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <section className="relative w-screen select-none bg-[#F0F0F0]">
            <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
                <div className="flex flex-col 2xl:flex-row-reverse items-start justify-between gap-10">

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

                        <h1 className="text-gray-700 text-base md:text-xl leading-relaxed mb-4">
                            {heading}
                        </h1>

                        {/* Always visible description */}
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

export default Values;
