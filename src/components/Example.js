import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import you from "../images/you.jpg"
import please from "../images/please.png"
import sorry from "../images/sorry.webp"
import thankyou from "../images/thankyou.png"
import yes from "../images/yes.png"
import help from "../images/help.png"
import good_morning from "../images/good_morning.gif"
import how_are_you from "../images/how_are_you.png"
import ReactPlayer from 'react-player'
import "../App.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Example() {
  return (
    <>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={thankyou}/></SwiperSlide>
        <SwiperSlide><img src={please}/></SwiperSlide>
        <SwiperSlide><img src={yes} /></SwiperSlide>
        <SwiperSlide><img src={help} /></SwiperSlide>
        <SwiperSlide><img src={sorry}/></SwiperSlide>
        <SwiperSlide><img src={good_morning}/></SwiperSlide>
        <SwiperSlide><img src={how_are_you}/></SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
