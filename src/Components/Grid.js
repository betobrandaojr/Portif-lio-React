import React from 'react';
import './Grid.css';
import image1 from '../Assets/img/Tecnologias/nodejs-removebg-preview.png';
import image2 from '../Assets/img/Tecnologias/React.png';
import image3 from '../Assets/img/Tecnologias/Angular.svg';
import image4 from '../Assets/img/Tecnologias/java.svg';

function Grid() {

  return (
    <div className='grid-container' id='#habilidades'>
        <div className='image1'>
            <img src={image1} alt='titulo' />
        </div>
        <div className='image2'>
            <img src={image2} alt='titulo' />
        </div>
        <div className='image3'>
            <img src={image3} alt='titulo' />
        </div>
        <div className='image4'>
            <img src={image4} alt='titulo' />
        </div>
    </div>
  );
}

export default Grid;
