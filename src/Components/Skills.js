import React from 'react';
import './Skills.css';

import image1 from '../Assets/img/Tecnologias/Node.webp';
import image2 from '../Assets/img/Tecnologias/Java.webp';
import image3 from '../Assets/img/Tecnologias/C.png';
import image4 from '../Assets/img/Tecnologias/React.png';
import image5 from '../Assets/img/Tecnologias/Angular.svg';
import image6 from '../Assets/img/Tecnologias/vue2.png';
import image7 from '../Assets/img/Tecnologias/PostgreSql.png';
import image8 from '../Assets/img/Tecnologias/SqlServer.png';
import image9 from '../Assets/img/Tecnologias/mysql.webp';
import image10 from '../Assets/img/Tecnologias/Git.webp';

const SkillImage = ({ src, alt }) => (
  <div className='skill-image-container'>
    <img src={src} alt={alt} />
  </div>
);

function Skills() {

  const images = [
    { src: image1, alt: 'Node.js' },
    { src: image2, alt: 'Java' },
    { src: image3, alt: '.NET' },
    { src: image4, alt: 'React' },
    { src: image5, alt: 'Angular' },
    { src: image6, alt: 'Vue.js' },
    { src: image7, alt: 'PostgreSQL' },
    { src: image8, alt: 'SQL Server' },
    { src: image9, alt: 'MySQL' },
    { src: image10, alt: 'Git' }
  ];

  return (
    <section className='section-grid-container' >
        <h2 className='title-skills' id='tecnologias' > Tecnologias </h2>
        <div className='div-grid-container'>
            <div className='grid-container'>
                {images.map((img, index) => (
                <SkillImage key={index} src={img.src} alt={img.alt} />
                ))}
            </div>
        </div>
    </section>
  );
}

export default Skills;
