
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import Logo from '../Assets/img/Logo-PB.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-logo">
                <img src={Logo} alt="Descrição da imagem"/>
            </div>

            <div className="navbar-links">
                <a href="#sobre">Sobre</a>
                <a href="#certificados">Certificados</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </div>

            <div className="navbar-icons">
                <a href="https://www.linkedin.com/in/paulo-roberto-brand%C3%A3o-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-4b0456287/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/betobrandaojr" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
