import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { Data } from '../../Constants/Data'

import './Stories.css';

const Stories = () => {
  return (
    <div>
      <Swiper slidesPerView={7} className="stories-container">
        {Data.stories.map(storie => (
          <SwiperSlide>
            <div className="storie">
              <div className={storie.active ? "gradient-yes": "gradient-no"}>
                <img src="https://img.freepik.com/free-icon/user_318-563642.jpg"/>
              </div>
              <span className={storie.active ? "active": ""}>{storie.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
