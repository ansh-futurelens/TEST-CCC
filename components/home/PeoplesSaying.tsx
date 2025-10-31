import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PeoplesSaying = () => {
  const testimonials = [
    {
      text: "What we like about this Program is that it’s not restricted to a select few. All employees have access to this which helps in bringing collective change for the entire organization.",
      user: "Senior Executive, Fortune 500 company",
    },
    {
      text: "The Program is so powerful that we shouldn’t wait to do pilots or roll it out to a selective group. To get the most out of it, everyone should, and can, get trained on mind skills.",
      user: "CEO, Fast-growing tech company",
    },
    {
      text: "Just one exercise helped me to recover from a pretty emotional situation I was in. If that’s the power of one exercise, I can’t wait to see what I can do when I have a better grasp on all the techniques.",
      user: "Individual user",
    },
    {
      text: "Unlike other programs that require significant administrative involvement and oversight, Q Studio’s program integrates seamlessly with minimal disruption and effort, and almost runs on its own.",
      user: "Individual user",
    },
    {
      text: "Of course mental fitness is paramount, but it’s hard to sustain the change. This is what is unique about Q Studio’s WellAbove program - the continuity of learning and real data to show progress.",
      user: "HR Senior Executive, Professional services firm",
    },
    {
      text: "We know the importance of mental fitness for our employees and the positive impact it can have on performance and the collective results of the organization. What has been missing is how to make this sustainable and quantify the impact.",
      user: "Talent Leader, Global Professional Services Firm",
    },
    {
      text: "What we like about Q Studio’s program is the different ways it can benefit our employees. We can customize the learning to specific needs such as new hires, managers, leadership… the applicability is endless.",
      user: "HR Executive, Fortune 100 company",
    },
  ];

  return (
    <div className=" w-screen bg-gray-50 select-none flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-sans font-bold xl:text-[36px] lg:text-[28px] text-2xl leading-tight tracking-wide text-teal-900 max-w-4xl mx-auto">
            What people are saying about us
          </h2>
        </div>

        <div className="py-12 max-w-7xl mx-auto overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
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
            {testimonials.map((user, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div
                  className="bg-white p-6 rounded-xl
                 h-[300px] w-full max-w-sm mx-auto flex flex-col items-center
                 text-center"
                >
                  <div className="flex flex-col items-center  h-full w-full">
                    <p
                      className="mt-2 !text-[16px] !font-[400] !text-gray-800 text-base  max-w-xs mx-auto  
                      overflow-hidden line-clamp-6"
                    >
                      {user.text}
                    </p>
                    <h3 className="!text-[18px] !font-[500] text-red-700 mt-2">
                      {user.user}
                    </h3>
                  </div>
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

export default PeoplesSaying;
