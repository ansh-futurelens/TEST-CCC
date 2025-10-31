import { CONTENT_CONFIG } from "../../config/contentConfig";

const WellAbove = () => {
    const { HEADING, SUB_HEADING, LEFT_CARDS, RIGHT_CARDS } =
        CONTENT_CONFIG.ORGANIZATION_PAGE.WELLABOVE_PROGRAM;

    return (
        <div className="h-full w-screen bg-[#F0F0F0] select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
            <div className="container-custom">
                <div className="flex flex-col xl:items-center justify-center xl:px-8 xl:text-center">
                    <h2
                        className="font-sans !font-bold sm:font-normal xl:text-[40px] lg:text-[28px] sm:text-2xl md:text-[28px] text-2xl !leading-[100%] !tracking-wide text-teal-900"
                        dangerouslySetInnerHTML={{ __html: HEADING }}
                    ></h2>
                    <h6
                        className="xl:text-[26px] lg:text-[18px] sm:text-[20px] md:text-[20px] text-gray-800 xl:text-center xl:max-w-6xl xl:mx-auto mt-5 xl:font-normal !lg:font-normal"
                        dangerouslySetInnerHTML={{
                            __html: SUB_HEADING
                                .replace("workforce.", "workforce.<br/>")
                                .replace("resilience", "resilience<br/>"),
                        }}
                    ></h6>
                </div>

                <div className="py-10">
                    <div className="flex flex-col xl:flex-row xl:justify-center gap-6 xl:px-6">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6 w-full xl:w-1/2">
                            {LEFT_CARDS.map((card, i) => (
                                <div
                                    key={`left-card-${i}`}
                                    // Added h-full here to make sure all cards in this flex column are the same height
                                    // And items-start to keep content at the top
                                    className="border-white border rounded-4xl p-5 flex items-start gap-4 h-full"
                                >
                                    {/* Image Container */}
                                    {/* Using flex-shrink-0 to prevent the image from shrinking */}
                                    {/* Using a consistent width for the image container across breakpoints for better alignment */}
                                    <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            // Ensure image fills its container and maintains aspect ratio
                                            className="w-full h-auto object-cover rounded-xl select-none"
                                        />
                                    </div>
                                    {/* Text Content */}
                                    {/* flex-grow to take up remaining space, and flex-col for internal stacking */}
                                    <div className="flex-grow flex flex-col text-left">
                                        <h4 className="text-xl font-bold text-teal-900">
                                            {card.title}
                                        </h4>
                                        <h3 className="text-gray-600 text-lg mt-2">{card.desc}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-6 w-full xl:w-1/2">
                            {RIGHT_CARDS.map((card, i) => (
                                <div
                                    key={`right-card-${i}`}
                                    // Added h-full here
                                    className="border-white border rounded-4xl p-5 flex items-start gap-4 h-full"
                                >
                                    {/* Image Container */}
                                    <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-auto object-cover rounded-xl select-none"
                                        />
                                    </div>
                                    {/* Text Content */}
                                    <div className="flex-grow flex flex-col text-left">
                                        <h4 className="text-xl font-bold text-teal-900">
                                            {card.title}
                                        </h4>
                                        <h3 className="text-gray-600 text-lg mt-2">{card.desc}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex 
                justify-start  /* default: left aligned */
                sm:justify-start 
                md:justify-start 
                lg:justify-start 
                xl:justify-center  /* center on extra large screens */
                pt-3"
                >
                    <button
                        className="cursor-pointer py-3 px-6 sm:py-5 sm:px-6 
                   bg-[#50418C] hover:bg-[#7B6CB9] 
                   text-base sm:text-lg md:text-xl lg:text-2xl 
                   font-medium text-white rounded-full 
                   transition duration-300 ease-in-out"
                    >
                        Schedule a Demo
                    </button>
                </div>

            </div>
        </div>
    );
};

export default WellAbove;