// Projects.js
import React, { useState } from "react";
import './Projects.css';

import image1 from '../Assets/img/Projetos/project-img1.png';
import image2 from '../Assets/img/Projetos/project-img2.png';
import image3 from '../Assets/img/Projetos/project-img3.png';
import image4 from '../Assets/img/Projetos/project-img1.png';

const ProjectsImage = ({ src, alt, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='projects-image-container'
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <img src={src} alt={alt} />
      {isHovered && (
        <div className="overlay">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Repositório</a>
        </div>
      )}
    </div>
  );
};

function Projects() {
  const images = [
    { src: image1, alt: 'Node.js', title: 'Projeto 1', description: 'O projeto visa o desenvolvimento de uma plataforma de aprendizado online interativa e intuitiva, destinada a estudantes de todas as idades, com o objetivo de proporcionar uma experiência educacional rica e acessível. A plataforma, batizada de "EduConnect", oferecerá cursos em uma ampla gama de áreas, desde ciências exatas até humanas, incluindo programação, matemática, história e artes.', link: 'https://github.com/betobrandaojr' },
    { src: image2, alt: 'Java', title: 'Projeto 2', description: 'O projeto visa o desenvolvimento de uma plataforma de aprendizado online interativa e intuitiva, destinada a estudantes de todas as idades, com o objetivo de proporcionar uma experiência educacional rica e acessível. A plataforma, batizada de "EduConnect", oferecerá cursos em uma ampla gama de áreas, desde ciências exatas até humanas, incluindo programação, matemática, história e artes.', link: 'https://github.com/betobrandaojr' },
    { src: image3, alt: '.NET', title: 'Projeto 3', description: 'O projeto visa o desenvolvimento de uma plataforma de aprendizado online interativa e intuitiva, destinada a estudantes de todas as idades, com o objetivo de proporcionar uma experiência educacional rica e acessível. A plataforma, batizada de "EduConnect", oferecerá cursos em uma ampla gama de áreas, desde ciências exatas até humanas, incluindo programação, matemática, história e artes.', link: 'https://github.com/betobrandaojr' },
    { src: image4, alt: 'React', title: 'Projeto 4', description: 'O projeto visa o desenvolvimento de uma plataforma de aprendizado online interativa e intuitiva, destinada a estudantes de todas as idades, com o objetivo de proporcionar uma experiência educacional rica e acessível. A plataforma, batizada de "EduConnect", oferecerá cursos em uma ampla gama de áreas, desde ciências exatas até humanas, incluindo programação, matemática, história e artes.', link: 'https://github.com/betobrandaojr' }
  ];

  return (
    <section className='section-projects-container'>
      <h2 className='title-projects' id='projetos'>Projetos</h2>
      <div className='div-grid-container-projects'>
        <div className='grid-container-projects'>
          {images.map((img, index) => (
            <ProjectsImage key={index} src={img.src} alt={img.alt} title={img.title} description={img.description} link={img.link} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;