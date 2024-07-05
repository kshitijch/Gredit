import React from 'react';
import Marquee from "react-fast-marquee";

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import V1 from './V1.mp4'
import V2 from './V2.mp4'
import V3 from './V3.mp4'
import V5 from './V5.mp4'



export default function CoverFlow() {
  return (
    <section className=" bg-black p-2" id='Edits'>
      <div className="">
        <Marquee autoFill gradient gradientColor='black' gradientWidth={200} direction='right' className=' pt-40 pb-32  overflow-hidden  bg-black text-white font-extrabold  md:text-8xl text-6xl '>
          <h1 className="px-32  text-transparent  transition-colors duration-300 hover:text-white"
            style={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: 'white',
            }}>Work</h1>

        </Marquee>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={'coverflow'}
          loop={true}
          spaceBetween={80}
          slidesPerView={3}
          breakpoints={{
            100: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },

            900: {
              slidesPerView: 3,
            },


          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow lg:mx-auto max-w-6xl mx-[1.5rem]"
        >

          <SwiperSlide >
            <video className=' rounded-lg' autoPlay muted loop>
              <source src={V1} type='video/mp4' />
            </video>
          </SwiperSlide>

          <SwiperSlide >
            <video className=' rounded-lg' autoPlay muted loop>
              <source src={V2} type='video/mp4' />
            </video>
          </SwiperSlide>

          <SwiperSlide  >
            <video className=' rounded-lg' autoPlay muted loop>
              <source src={V3} type='video/mp4' />
            </video>
          </SwiperSlide>

          <SwiperSlide  >
            <video className=' rounded-lg' autoPlay muted loop>
              <source src={V5} type='video/mp4' />
            </video>
          </SwiperSlide>



        </Swiper>
      </div>
    </section>
  );
}
