import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { LazyImage } from "../LazyMedia";

const MentalFitness = () => {
  const testimonials = [
    {
      image: "/media/organizations/research1.webp",
      title:
        "Improvement in performance through a brief training based on cognitive techniques",
      subtitle: "Source: J Occup Health",
      link: "https://pubmed.ncbi.nlm.nih.gov/25740675/",
    },
    {
      image: "/media/organizations/research6.webp",
      title:
        "Cognitive-behavioral training doubles the chances of sales teams hitting their targets",
      subtitle: "Source: ScienceDirect",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0191886908003462",
    },
    {
      image: "/media/organizations/research2.webp",
      title: "Cognitive training significantly improves stress management at work",
      subtitle: "Source: Front. Psychol.",
      link: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1232172/full",
    },
    {
      image: "/media/organizations/research3.webp",
      title:
        "Communications skills training based on CBT improve communication at the workplace",
      subtitle: "Source: J Occup Environ Med",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5704672/",
    },
    {
      image: "/media/organizations/research4.webp",
      title: "Employee engagement impacts 11 business metrics",
      subtitle: "Source: Gallup report",
      link: "https://www.gallup.com/workplace/321725/gallup-q12-meta-analysis-report.aspx",
    },
    {
      image: "/media/organizations/research5.webp",
      title:
        "Work Stress and Its Impact on Employee Performance, Turnover, and Absenteeism",
      subtitle: "Source: Intl J. Mag. Mgmt",
      link: "https://www.researchgate.net/publication/377759119_Work_Stress_and_Its_Impact_on_Employee_Performance_Turnover_and_Absenteeism_A_Comprehensive_Study_at_E_E_Manufacturing",
    },
  ];

  return (
    <div className="mental-fitness-root">
      <div className="container-custom">
        <div className="mental-fitness-heading-wrapper">
          <h2 className="mental-fitness-heading-primary">
            Mental fitness and cognitive training boosts <br />
            individual and business performance.
          </h2>
          <h3 className="mt-4 max-w-5xl font-sans text-xl leading-tight font-normal tracking-wide text-gray-800 sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[26px] mb-14">
            Extensive research shows the positive linkage between cognitive skills training and
            employee performance and engagement, directly contributing to measurable business
            metrics.
          </h3>
        </div>

        <div className="mental-fitness-slider-wrapper">
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
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="mental-fitness-slide">
                <div className="mental-fitness-card">
                  <LazyImage
                    src={item.image}
                    alt={`testimonial ${index + 1}`}
                    className="mental-fitness-card-img"
                  />
                  <h2 className="mb-4 text-xl font-bold text-teal-900">{item.title}</h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mental-fitness-card-link"
                  >
                    {item.subtitle}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mental-fitness-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default MentalFitness;
