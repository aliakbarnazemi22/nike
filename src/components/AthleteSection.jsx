import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function AthleteSection() {
  const athletes = [
    {
      id: 1,
      title: "Alexia Putellas",
      imageUrl: "/images/showProducts/Alexia-Putellas1.jpeg",
    },
    {
      id: 2,
      title: "Catlin Clark",
      imageUrl: "/images/showProducts/Catlin-Clark1.jpeg",
    },
    {
      id: 3,
      title: "Sabrina Ionescu",
      imageUrl: "/images/showProducts/Sabrina-Ionescu1.jpeg",
    },
    {
      id: 4,
      title: "ShaCarri Richardson",
      imageUrl: "/images/showProducts/ShaCarri-Richardson1.jpeg",
    },
  ];

  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };

  return (
    <section className="container mx-auto max-w-[93.5%] my-[100px] px-2">
      <span className="text-[24px] font-[500] text-[#B4A596]">
        Shop By Athlete
      </span>
      <div className="w-full mt-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints = {breakpoints}
          modules={[Scrollbar]}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          className="mb-4 swiper-custom-1"
        >
          {athletes.map((item) => (
            <SwiperSlide className="w-full flex! flex-col gap-3 mb-5" key={item.id}>
              <img
                src={item.imageUrl}
                className="img w-full h-[500px] sm:h-[600px] md:h-[500px] xl:h-[600px] object-cover"
              />
              <a href="#" className="text-[#FFFFFF] font-[600] text-xl">
                {item.title}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default AthleteSection;
