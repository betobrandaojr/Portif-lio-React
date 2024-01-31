import React, { useState, useEffect } from 'react';
import './About.css';
import ProfileImage from '../Assets/img/teste-2.jpg';//../Assets/img/teste-2.jpg
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
              <p className='about'>
                Sou um analista de sistemas e desenvolvedor Full Stack com ampla experiência em uma variedade de tecnologias. No back-end, possuo habilidades aprofundadas em Node.js, Java/Spring Boot, C#, Vb.Net e ASP.NET, complementadas por um conhecimento robusto em linguagens de consulta e manipulação de banco de dados, como PL/SQL. Além disso, tenho grande experiência com sistemas de gerenciamento de banco de dados como: PostgreSQL, SQL Server, MySQL e MongoDB. No front-end, trabalho com React, Angular e Vue.js. Atualmente, lidero uma equipe de desenvolvedores, onde promovo um ambiente colaborativo de aprendizado e enfrentamento de desafios, desde os mais simples aos mais complexos.
              </p>
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