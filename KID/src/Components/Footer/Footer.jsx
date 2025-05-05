import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'

const Footer =()=>{
    return (
        <div className='footer'>
            <hr/>
            <div className='footer-logo'>
                <img src={footer_logo} alt="" />
                <p>MIX SHOES</p>
            </div>
            <ul className="footer-links">
                <li>Productos</li>
                <li>Acerca De</li>
                <li>Contáctanos</li>
            </ul>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright MIX-SHOES @2024 - Todos los derechos reservados.</p>
            </div>
        </div>
       
    )
}
export default Footer