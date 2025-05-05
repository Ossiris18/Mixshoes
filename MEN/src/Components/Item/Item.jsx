import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, new_price, old_price, isNew }) => {
    return (
        <div className='item'>
            {isNew && <div className='label'>Nuevo</div>} {/* Mostrar la etiqueta solo si isNew es true */}
            <Link to={`/product/${id}`}>
                <img onClick={window.scrollTo(0, 0)} src={image} alt={name} />
            </Link>
            <div className="item-info">
                <p>{name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        ${new_price}
                    </div>
                    <div className="item-price-old">
                        ${old_price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
