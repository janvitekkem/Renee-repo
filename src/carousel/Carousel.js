
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swiperdata from './Swiperdata'
import { EffectFlip,Parallax, Pagination, Navigation } from "swiper";
import { GiPurpleTentacle, GiWhiteBook } from "react-icons/gi";



function Carousel() {

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgb(156, 142, 236)",
          "--swiper-pagination-color": "rgb(156, 142, 236)",
        }}
        effect={"flip"}
        speed={350}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          style={{
            "background-repeat": "no-repeat",
            "background-size":"cover",
            "backgroundColor":"rgb(235, 231, 231)"
          }}
          data-swiper-parallax="-23%"
        ></div>

        {Swiperdata.map((slide,index)=>{
            return(

            <div >
              <SwiperSlide >
                <div className="wrap">
                <img className="sw1" src={slide.picture} alt="image"/>
                    <div className="sw2">
                        {slide.story}
                    </div>
                    <div className="sw3">
                        {slide.author}
                    </div>
                </div>
              </SwiperSlide>
            </div>
            )
      })}
      </Swiper>
    </>
  );
}

export default Carousel;
