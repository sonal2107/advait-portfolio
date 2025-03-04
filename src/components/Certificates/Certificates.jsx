import React from "react";
import "./Certificates.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const Certificates = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="main-certificate">
            <div className="certificate-content">
              <div>This is to certify that</div>
              <h1 className="title">Advait Salgaokar</h1>
              <p>has successfully completed</p>
              <h2 className="course">CISCO CERTIFIED NETWORK ASSOCIATE</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="main-certificate">
            <div className="certificate-content">
              <div>This is to certify that</div>
              <h1 className="title">Advait Salgaokar</h1>
              <p>has successfully completed</p>
              <h2 className="course">CISCO CERTIFIED NETWORK PROFESSIONAL</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="main-certificate">
            <div className="certificate-content">
              <div>This is to certify that</div>
              <h1 className="title">Advait Salgaokar</h1>
              <p>has successfully completed</p>
              <h2 className="course">ETH, Cyber Security and Web Penetration</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Certificates;
