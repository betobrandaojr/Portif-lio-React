import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './CertificateCarousel.css'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import image1 from '../Assets/img/certificados/JavaScript.png';
import image2 from '../Assets/img/certificados/vue.png';
import image3 from '../Assets/img/certificados/scrum.png';
function Banner(){
  return (
    <div className='background-carousel' id='#certificados'>
      <div className='container-carousel'>
        <h2 className='title-certificates'>Certificados</h2>
        <div className='carousel-overlay'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className='img-swiper'>
                <img src={image1} alt='Certificate 1' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-swiper'>
                <img src={image2} alt='Certificate 2' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-swiper'>
                <img src={image3} alt='Certificate 3' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Banner;
