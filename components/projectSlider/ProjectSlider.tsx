// @ts-nocheck
"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';



const ProjectSlider = ({images}:{images:any}) => {
  return (
    <div className='h-screen w-full overflow-x-hidden'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
      >
        {
            images.map((image, idx) => (
                <SwiperSlide>
                    <div className="w-full">
                        <Image
                            src={image}
                            alt='Project Image'
                            width={1000}
                            height={500}
                            className='object-cover w-full h-96'
                        />
                    </div>
                </SwiperSlide>
            ))
        }
       
      </Swiper>
    </div>
  );
}

export default ProjectSlider;