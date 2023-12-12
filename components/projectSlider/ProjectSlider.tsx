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

const TestImages = [
    "https://cdn.pixabay.com/photo/2023/11/11/19/58/whisky-8381774_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/21/17/47/plum-blossoms-7942343_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/12/09/15/04/dog-8439530_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/23/14/22/trees-8336189_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/25/15/45/mountains-8411954_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/26/00/09/hibiscus-8276215_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/21/07/02/girl-8402582_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/22/10/28/sheep-7943526_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/29/14/15/forest-8419725_1280.jpg",
]

const ProjectSlider = () => {
  return (
    <div className='h-96 w-full overflow-x-hidden'>
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
          }}
      >
        {
            TestImages.map((image, idx) => (
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