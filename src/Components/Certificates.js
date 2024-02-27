import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Certificates.css'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  { src: require('../Assets/img/certificados/agilidade.png'), alt: 'Agilidade' },
  { src: require('../Assets/img/certificados/full-stack-1.png'), alt: 'Full Stack 1' },
  { src: require('../Assets/img/certificados/full-stack-2.png'), alt: 'Full Stack 2' },
  { src: require('../Assets/img/certificados/full-stack-3.png'), alt: 'Full Stack 3' },
  { src: require('../Assets/img/certificados/full-stack-4.png'), alt: 'Full Stack 4' },
  { src: require('../Assets/img/certificados/gestao-agil.png'), alt: 'Gestão Ágil' },
  { src: require('../Assets/img/certificados/java-script-0.png'), alt: 'JavaScript 0' },
  { src: require('../Assets/img/certificados/java-script-1.png'), alt: 'JavaScript 1' },
  { src: require('../Assets/img/certificados/metricas-ageis.png'), alt: 'Métricas Ágeis' },
  { src: require('../Assets/img/certificados/postgressql-0.png'), alt: 'PostgreSQL 0' },
  { src: require('../Assets/img/certificados/postgressql-1.png'), alt: 'PostgreSQL 1' },
  { src: require('../Assets/img/certificados/postgressql-2.png'), alt: 'PostgreSQL 2' },
  { src: require('../Assets/img/certificados/product-manager.png'), alt: 'Product Manager' },
  { src: require('../Assets/img/certificados/scrum.png'), alt: 'Scrum' },
  { src: require('../Assets/img/certificados/startupismo.png'), alt: 'Startupismo' },
  { src: require('../Assets/img/certificados/team-build.png'), alt: 'Team Building' },
  { src: require('../Assets/img/certificados/vb-1.png'), alt: 'VB 1' },
  { src: require('../Assets/img/certificados/vb-2.png'), alt: 'VB 2' },
  { src: require('../Assets/img/certificados/vb-3.png'), alt: 'VB 3' },
  { src: require('../Assets/img/certificados/vue-0.png'), alt: 'Vue 0' },
  { src: require('../Assets/img/certificados/vue-1.png'), alt: 'Vue 1' },
  { src: require('../Assets/img/certificados/vue-2.png'), alt: 'Vue 2' },
  { src: require('../Assets/img/certificados/vue-3.png'), alt: 'Vue 3' },
  { src: require('../Assets/img/certificados/LGPD.png'), alt: 'LGPD' },
];

function Certificates(){
  return (
    <div className='background-carousel' id='certificate'>
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
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='img-swiper'>
                  <img src={image.src} alt={image.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Certificates;