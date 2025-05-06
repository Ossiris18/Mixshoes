import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NUEVA COLECCIÓN</h2>
                <div className="hero-hand-icon">
                    <p>Tu Huella, <br/> Tu Estilo</p>
                    
                </div>

                <div className="hero-lastest-btn">
                    <div>Última Colección</div>
                    <img src={arrow_icon} alt=''/>
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image} alt=''/> 
            </div>
        </div>
    );
}

export default Hero;
