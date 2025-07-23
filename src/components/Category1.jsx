import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function Category1() {
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
        Shop By Category
      </span>
      <div className="overflow-x-auto custom-scroll-1 mt-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={breakpoints}
          modules={[Scrollbar]}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          className="mb-4 swiper-custom-1"
        >
          <SwiperSlide className="w-full flex! flex-col gap-3 mb-5">
            <div className="img w-full h-[500px] sm:h-[600px] md:h-[500px] xl:h-[600px] relative bg-category-1">
              <div className="absolute bottom-[25px] left-[20px] md:bottom-[35px] md:left-[30px] flex flex-col gap-2">
                <p className="text-[16px] text-[#FFFFFF] font-[600] ml-1">
                  Apparel
                </p>
                <a
                  href="#"
                  className="py-[6px] px-5 min-w-[60px] bg-white rounded-full text-black font-[550] text-[16px] max-w-[fit-content]"
                >
                  Shop
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full flex! flex-col gap-3 mb-5">
            <div className="img w-full h-[500px] sm:h-[600px] md:h-[500px] xl:h-[600px] bg-category-2 relative">
              <div className="absolute bottom-[25px] left-[20px] md:bottom-[35px] md:left-[30px] flex flex-col gap-2">
                <p className="text-[16px] text-[#FFFFFF] font-[600] ml-1">
                  Footwear
                </p>
                <a
                  href="#"
                  className="py-[6px] px-5 min-w-[60px] bg-white rounded-full text-black font-[550] text-[16px] max-w-[fit-content]"
                >
                  Shop
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full flex! flex-col gap-3 mb-5">
            <div className="img w-full h-[500px] sm:h-[600px] md:h-[500px] xl:h-[600px] bg-category-3 relative">
              <div className="absolute bottom-[25px] left-[20px] md:bottom-[35px] md:left-[30px] flex flex-col gap-2">
                <p className="text-[16px] text-[#FFFFFF] font-[600] ml-1">
                  Accessories & Equipment
                </p>
                <a
                  href="#"
                  className="py-[6px] px-5 min-w-[60px] bg-white rounded-full text-black font-[550] text-[16px] max-w-[fit-content]"
                >
                  Shop
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Category1;