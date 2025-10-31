import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useState } from "react";
import { CONTENT_CONFIG } from "../../config/contentConfig";


const MindSkills = () => {
    const testimonials = [
        {
            heading: "Improved focus and concentration",
            text: "Regular mental fitness exercises enhance working memory, attention span, and problem-solving abilities. Just as physical exercise strengthens muscles, practicing Mind Skills strengthens new neural pathways for mental clarity and performance. You'll notice your mind is less distracted and you now have longer attention spans.",
            image: "media/individuals/ms1.png",
            caption: "Improved focus and concentration",
        },
        {
            heading: "Manage intense emotions better",
            text: "Mind Skills help you recognize emotional triggers and develop healthier responses. You'll experience greater emotional balance and fewer instances of feeling overwhelmed by strong emotions.",
            image: "media/individuals/ms2.png",
            caption: "Manage intense emotions better",
        },
        {
            heading: "Recover faster from setbacks",
            text: "You have the tools to bounce back from setbacks more quickly. You'll develop a more adaptive mindset that views challenges and losses as growth opportunities rather than failures.",
            image: "media/individuals/ms3.png",
            caption: "Recover faster from setbacks",
        },
        {
            heading: "Channel stress productively",
            text: "Mind Skills and techniques provide practical methods to calm your nervous system during high stress moments. Practicing these techniques daily can lower stress hormone levels and even improve physical symptoms that accompany acute stress.",
            image: "media/individuals/ms4.png",
            caption: "Channel stress productively",
        },
        {
            heading: "Connecting more deeply",
            text: "As you develop greater emotional intelligence and improved self-awareness, your personal and professional relationships improve. You build the skills for active listening and learn when and how to set boundaries. You start tapping into important human qualities like empathy and gratitude leading to deeper, more meaningful, connections.",
            image: "media/individuals/ms5.png",
            caption: "Connecting more deeply",
        },
        {
            heading: "Creativity and innovation",
            text: "When you can let go of the distractions and noise, you create the mental space and optimal internal conditions for creative thinking. Regular practice helps clear mental blocks like pre-conceived biases, fosters a beginner’s mindset and forges connections between ideas.",
            image: "media/individuals/ms6.png",
            caption: "Creativity and innovation",
        },
        {
            heading: "Improved sleep quality",
            text: "Many techniques you will learn directly address the overthinking that interferes with restful sleep. Consistent practice often results in falling asleep more quickly and experiencing more restorative sleep.",
            image: "media/individuals/ms7.png",
            caption: "Improved sleep quality",
        },
        {
            heading: "Finding joy",
            text: "Perhaps most importantly, the Mind Skills and techniques you learn will help you align your daily life with your core values. This alignment creates a profound sense of meaning and purpose that enhances not only your mental fitness but brings an overall sense of joy and fulfillment in everything you do.",
            image: "media/individuals/ms8.png",
            caption: "Finding joy",
        },
    ];



    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="min-h-[85vh] w-screen bg-[#F0F0F0] select-none flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
            <div className="container-custom">
                <div className="flex flex-col items-start justify-center text-left md:items-center md:text-center ">
                    <h2 className="font-sans font-bold xl:text-[50px] lg:text-[28px] text-2xl leading-tight tracking-wide text-teal-900 max-w-4xl w-full md:w-auto">
                        Outcomes with Mind Skills
                    </h2>
                    <h3 className="font-sans font-normal xl:text-[25px] lg:text-[20px] sm:text-[20px] text-2xl leading-tight tracking-wide text-gray-800 max-w-4xl w-full md:w-auto mt-5">
                        Improve your focus, strengthen your resilience, and navigate through <br />
                        life’s challenges and opportunities with clarity, balance and purpose.
                    </h3>
                </div>

                <div className="flex lg:justify-center h-auto pt-10 ">
                    <a
                        href="https://apps.apple.com/in/app/id6621264428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!py-6 !px-9 bg-red-700 hover:bg-[var(--color-red-hover)] font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
                    >
                        {CONTENT_CONFIG.LANDING_PAGE.HERO.BUTTON_TEXT}
                    </a>
                </div>


                <div className="py-12 max-w-7xl mx-auto overflow-hidden">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={false}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                            el: ".mindskills-pagination",
                        }}

                        allowTouchMove={true}

                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                            },
                        }}
                        className="!overflow-visible"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <motion.div
                                    className="relative rounded-2xl h-[380px] w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-xl mx-auto overflow-hidden cursor-pointer"
                                    style={{ backgroundColor: "var(--color-red-700)" }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >



                                    <motion.img
                                        src={item.image}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        animate={{
                                            opacity: hoveredIndex === index ? 0 : 1,
                                            scale: hoveredIndex === index ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    />


                                    <motion.div
                                        className="absolute bottom-4 left-4 text-white font-medium z-10 max-w-[90%]"
                                        animate={{
                                            opacity: hoveredIndex === index ? 0 : 1,
                                            y: hoveredIndex === index ? 10 : 0,
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h4 className="text-2xl">{item.caption}</h4>
                                    </motion.div>
                                    <motion.div
                                        className="absolute inset-0 flex flex-col justify-start items-start text-left p-6 gap-6"
                                        style={{ backgroundColor: "var(--color-red-700)" }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        <h5 className="text-2xl font-semibold text-white">
                                            {item.heading}
                                        </h5>
                                        <h3 className="text-lg font-normal text-white max-h-[60%] ">
                                            {item.text}
                                        </h3>
                                    </motion.div>

                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="mindskills-pagination mt-6 flex justify-center"></div>
                </div>
            </div>
        </div>
    );
};

export default MindSkills;
