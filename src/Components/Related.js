import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default class Related extends Component {
  render() {
    return (
      <div className="pt-4 pb-10 bg-[#FDF2FF]">
        <h1 className="text-4xl pl-10 py-2">Related Items</h1>
        <Swiper
          className=""
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2.7}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6.7,
              spaceBetween: 30,
            },
          }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="Lipstick.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>

          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="perfume.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>

          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="perfume2.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>

          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="Tshirt.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>

          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="jacket.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>
          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="Tshirt.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>
          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="jacket.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>

          <SwiperSlide className=" bg-white rounded-xl px-4 py-2 shadow-xl">
            <img className="bg-[#FDF2FF]" src="Tshirt.png" />
            <h1 className="text-xs text-[#697475]">Bin Bakar Electronics</h1>
            <p className="text-black text-sm font-medium">Samsung 40N5300 </p>
            <p className="space-x-3">
              <small className="line-through">RS 60.000</small>
              <strong>RS.56000</strong>
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
