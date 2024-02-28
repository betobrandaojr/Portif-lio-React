import React, { useState, useEffect } from 'react';
import './About.css';
import ProfileImage from '../Assets/img/teste-2.jpg';
import curriculo from '../Assets/docs/Currículo Paulo Roberto Brandão Junior.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import TextAnimator from './TextAnimator';

function About() {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);
  const toRotate = ["Desenvolvedor Full Stack", "Analista de sistemas", "DBA", "Gestor de Projetos"];
  const period = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPhotoVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToSection = () => {
    const section = document.getElementById('contato');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='banner-container'>
      <div className='banner-container-div' id='abaut'>
        <div className="two-column-container">
          <div className="left-column">
            <div>
              <h1 className='intro-about'>Olá, eu sou</h1>
              <h2 className="my-name">Paulo Brandão</h2>
              <h1 className='intro-about'>e eu trabalho como:</h1>
              <p className='text-animator'>
                <TextAnimator toRotate={toRotate} period={period} />
                <span className="cursor"></span>
              </p>
              <div className='about'>
                <p>
                  Sou um <strong>Analista de Sistemas</strong>, <strong>Desenvolvedor Full Stack</strong>, <strong>DBA</strong> e <strong>Gestor de Projetos</strong>  com ampla experiência em uma variedade de tecnologias. 
                </p>
                <p>
                  No back-end, possuo habilidades aprofundadas em <strong>Node.js</strong>, <strong>Java/Spring Boot</strong>, <strong>C#</strong>, <strong>Vb.Net</strong> e <strong>ASP.NET</strong>, complementadas por um conhecimento robusto em linguagens de consulta e manipulação de banco de dados, como <strong>PL/SQL</strong>.
                </p>
                <p>
                  Além disso, tenho grande experiência com sistemas de gerenciamento de banco de dados como: <strong>PostgreSQL</strong>, <strong>SQL Server</strong>, <strong>MySQL</strong> e <strong>MongoDB</strong>.
                </p>
                <p>
                  No front-end, trabalho com <strong>React</strong>, <strong>Angular</strong> e <strong>Vue.js</strong>. Atualmente, faço parte de uma equipe de desenvolvedores que criei, onde promovemos um ambiente colaborativo de aprendizado e enfrentamento de desafios, desde os mais simples aos mais complexos trazendo para nossos clientes soluções para diversos problemas.
                </p>
              </div>
            </div>
            <div className="buttons-container">
              <button className='talk-me' onClick={navigateToSection}>Fale Comigo</button>
            <a href={curriculo} download='Paulo-Brandao-Curriculo.pdf'>
              <button className='curriculo'>
                <FontAwesomeIcon icon={faPrint} /> Currículo
              </button>
            </a>
            </div>
          </div>
          <div className="right-column">
            <img 
              src={ProfileImage} 
              alt="Paulo Brandão"
              className={`fade-in-image ${isPhotoVisible ? 'visible' : ''}`} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
