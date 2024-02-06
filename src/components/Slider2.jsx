import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//  import "../../styles.css";
import { Pagination, Navigation } from "swiper/modules";

const Slider2 = ({ title, suptitle, price, name }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="md:w-[80%] mob:w-[95%] m-auto shadow-2xl my-8 rounded-xl py-10">
      <p className="text-[23px] ml-8 font-bold">{title}</p>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-xl">
          <img
            src="src/assets/images/test3.webp"
            alt=""
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <p className="text-[white] bg-[red] m-3 rounded-lg w-[20%]">{suptitle}</p>
            <p className="font-bold w-[20%] m-2">{price}</p>
            <p className="font-mono text-start ml-4">{name}</p>
            <button className="md:w-[130px] md:h-[40px] text-[white] md:p-1 m-3 rounded-xl font-mono bg-[#3f84e4]">
              В корзину
            </button>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="rounded-xl">
          <img
            src="src/assets/images/test3.webp"
            alt=""
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <p className="text-[white] bg-[red] m-3 rounded-lg w-[20%]">{suptitle}</p>
            <p className="font-bold w-[20%] m-2">{price}</p>
            <p className="font-mono text-start ml-4">{name}</p>
            <button className="md:w-[130px] md:h-[40px] text-[white] md:p-1 m-3 rounded-xl font-mono bg-[#3f84e4]">
              В корзину
            </button>
          </div>
        </SwiperSlide>
       
        <SwiperSlide className="rounded-xl">
          <img
            src="src/assets/images/test3.webp"
            alt=""
            className="rounded-xl"
          />
          <div className="flex flex-col">
            <p className="text-[white] bg-[red] m-3 rounded-lg w-[20%]">{suptitle}</p>
            <p className="font-bold w-[20%] m-2">{price}</p>
            <p className="font-mono text-start ml-4">{name}</p>
            <button className="md:w-[130px] md:h-[40px] text-[white] md:p-1 m-3 rounded-xl font-mono bg-[#3f84e4]">
              В корзину
            </button>
          </div>
        </SwiperSlide>
       

      </Swiper>
    </div>
  );
};

export default Slider2;
