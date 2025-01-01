import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SlideImage() {
  return (
    <div className="mx-auto max-w-[80rem] my-2 px-2 -z-10">
        <Swiper
            className="rounded-lg" 
            modules={[ Pagination, Navigation, Autoplay ]}
            loop
            spaceBetween={5}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
        >
            <SwiperSlide><img src="./slide/1.png" alt="1" /></SwiperSlide>
            <SwiperSlide><img src="./slide/2.png" alt="2" /></SwiperSlide>
            <SwiperSlide><img src="./slide/ม้าม่วง.png" alt="3" /></SwiperSlide>
        </Swiper>
    </div>
  )
}
