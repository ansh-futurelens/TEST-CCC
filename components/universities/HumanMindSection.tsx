import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { LazyImage } from "../LazyMedia";

const HumanMindSection = () => {
  const testimonials = [
    {
      image: "/media/team/universities_SOF1.webp",
      title: "High-demand for Human Skills in the ongoing age of AI",
      subtitle: "Source: Forbes",
      link: "https://www.forbes.com/councils/forbestechcouncil/2024/06/27/high-demand-human-skills-in-the-ongoing-age-of-ai/",
    },
    {
      image: "/media/team/universities_SOF2.webp",
      title:
        "Cognitive, Self-efficacy, and Working With Others make up Top 7 core skills",
      subtitle: "Source: World Economic Forum",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0191886908003462",
    },
    {
      image: "/media/team/universities_SOF3.webp",
      title:
        "Leaders and employees need to build change skills for growth in an uncertain world",
      subtitle: "Source: Gartner",
      link: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1232172/full",
    },
  ];

  return (
    <div className="human-mind-root">
      <div className="container-custom">
        {/* Heading */}
        <div className="human-mind-heading-wrapper">
          <h2 className="human-mind-heading-primary">
            The future belongs to those who invest in their “human mind”
          </h2>
          <h3 className="human-mind-sub-heading">
            While AI and automation are re-shaping the world, human cognitive skills are more
            critical than ever. Empower your students to build these ‘must-have’ skills with Q
            Studio.
          </h3>
        </div>

        {/* Swiper Section */}
        <div className="human-mind-swiper-wrapper">
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
            className="human-mind-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="human-mind-slide">
                <div className="human-mind-card">
                  <LazyImage
                    src={item.image}
                    alt={`testimonial ${index + 1}`}
                    className="human-mind-card-img"
                  />
                  <h2 className="human-mind-card-title">{item.title}</h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="human-mind-card-link"
                  >
                    {item.subtitle}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination human-mind-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default HumanMindSection;
