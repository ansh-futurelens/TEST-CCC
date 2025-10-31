import React, { useState } from "react";

const Approach: React.FC = () => {
    const imageSrc = "/media/about_us/our_approach.png";
    const title = "Our approach";

    // Always visible description
    const alwaysVisibleText =
        "To us, mental fitness is a state of optimal functioning characterized by intentional control over our thoughts, an acute awareness of our emotions and feelings, and an ability to respond with wisdom to life’s opportunities and challenges.";

    // Extra content (shown when expanded)
    const extraContent = `
Q Studio brings a unique approach to mental fitness by building and practicing Mind Skills. The Mind Skills incorporate science-based concepts, result-driven techniques, and habit building tools – all in bite-sized, easy to understand, and customizable ways.

Our content experts with extensive background in psychology, psychotherapy, mindfulness practices, and mindfulness-based self-compassion practices have leveraged established techniques and more than 200 pieces of scientific research and studies to develop our content. 

When the Mind Skills and techniques are practiced over time, these build new neural pathways, changing our thought patterns, strengthening our mindset, and empowering us to perform at our best. By continuing to apply the Mind Skills in various aspects of your life – work, relationships, family, self – you develop the ability to think, feel, do better.
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

export default Approach;
