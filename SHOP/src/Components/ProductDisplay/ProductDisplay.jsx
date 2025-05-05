import React, { useContext } from 'react';
import './ProductDisplay.css';
import start_icon from "../Assets/start_icon.png";
import start_dull_icon from "../Assets/start_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(47)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
               ¡Prepárate para elevar tu estilo y comodidad al siguiente nivel! 
               Diseñados para ofrecer un rendimiento excepcional y una estética moderna, 
               estos tenis son la elección perfecta tanto para tus entrenamientos como para tu día a día.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Talla:</h1>
                    <div className="productdisplay-right-sizes">
                        <div>25.5</div>
                        <div>26</div>
                        <div>26.5</div>
                        <div>27</div>
                        <div>27.5</div>
                        <div>28</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
