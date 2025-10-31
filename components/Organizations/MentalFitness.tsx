import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MentalFitness = () => {
    const testimonials = [
        {
            image: "/media/organizations/research1.png",
            title: "Improvement in performance through a brief training based on cognitive techniques",
            subtitle: "Source: J Occup Health",
        },
        {
            image: "/media/organizations/research2.png",
            title: "Cognitive training significantly improves stress management at work",
            subtitle: "Source: Front. Psychol.",
        },
        {
            image: "/media/organizations/research3.png",
            title: "Communications skills training based on CBT improve communication at the workplace",
            subtitle: "Source: J Occup Environ Med",
        },
        {
            image: "/media/organizations/research4.png",
            title: "Employee engagement impacts 11 business metrics",
            subtitle: "Source: Gallup report",
        },
        {
            image: "/media/organizations/research5.png",
            title: "Work Stress and Its Impact on Employee Performance, Turnover, and Absenteeism",
            subtitle: "Source: Intl J. Mag. Mgmt",
        },
    ];

    return (
        <div className="min-h-[85vh] w-screen bg-[#F0F0F0] select-none flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
            <div className="container-custom">
                <div className="flex flex-col justify-center text-center xl:items-center xl:text-center items-start text-left px-6 sm:px-8 md:px-10">
                    <h2 className="font-sans font-bold 2xl:text-[40px] xl:text-[30px] lg:text-[28px] text-2xl leading-tight tracking-wide text-teal-900 max-w-4xl">
                        Mental fitness and cognitive training boosts <br />
                        individual and business performance.
                    </h2>
                    <h3 className="font-sans mt-4 font-normal xl:text-[23px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-xl leading-tight tracking-wide text-gray-800 max-w-5xl">
                        Extensive research shows the positive linkage between cognitive skills training and employee
                        performance and engagement, directly contributing to measurable business metrics.
                    </h3>
                </div>


                <div className="py-12 max-w-6xl mx-auto overflow-hidden">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={true}
                        centeredSlides={false}
                        autoplay={{ delay: 3000 }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
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
                            <SwiperSlide key={index} className="flex justify-center ">
                                <div
                                    className="bg-[#F3F3F3] border border-[#FCFCFC] p-4 rounded-3xl
                                     h-[350px] w-full max-w-sm mx-auto flex flex-col items-center
                                     text-center"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={`testimonial ${index + 1}`}
                                        className="w-full h-40 object-cover rounded-xl mb-4"
                                    />

                                    {/* H2 text */}
                                    <h2 className="font-bold text-xl text-teal-900 mb-2">
                                        {item.title}
                                    </h2>

                                    {/* H4 text */}
                                    <h4 className="font-semiboldl text-lg text-gray-700 border-b border-gray-600 pb-1">
                                        {item.subtitle}
                                    </h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="custom-pagination mt-6 flex justify-center"></div>
                </div>
            </div>
        </div>
    );
};

export default MentalFitness;
