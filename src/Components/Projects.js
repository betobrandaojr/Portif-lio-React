import React from "react";
import './Projects.css'

import image1 from '../Assets/img/Projetos/project-img1.png';
import image2 from '../Assets/img/Projetos/project-img2.png';
import image3 from '../Assets/img/Projetos/project-img3.png';
import image4 from '../Assets/img/Projetos/project-img1.png';

const SkillImage = ({ src, alt }) => (
    <div className='projects-image-container'>
      <img src={src} alt={alt} />
    </div>
  );

function Projects (){
        const images = [
            { src: image1, alt: 'Node.js' },
            { src: image2, alt: 'Java' },
            { src: image3, alt: '.NET' },
            { src: image4, alt: 'React' },

          ];
        
          return (
            <section className='section-projects-container' >
                <h2 className='title-projects' id='projetos' > Projetos </h2>
                <div className='div-grid-container-projects'>
                    <div className='grid-container-projects'>
                        {images.map((img, index) => (
                        <SkillImage key={index} src={img.src} alt={img.alt} />
                        ))}
                    </div>
                </div>
            </section>
          );
        }

       /* <div className="container-projects-grid" id="projects">
            <div>
                <span>
                    <a href="" target="_blank">ads via Carbon</a>
                </span>
            </div>
        </div>*/

export default Projects;