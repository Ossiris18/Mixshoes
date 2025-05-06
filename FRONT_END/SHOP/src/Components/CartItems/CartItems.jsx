import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import ReactDOM from "react-dom"


const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});

{/*const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: "0.01", // Cambia esto para reflejar el total real
                },
            },
        ],
    });
};
const onApprove = (data, actions)=> {
    return actions.order.capture(); 
};*/}



  
const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    // Función para crear un pedido
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: getTotalCartAmount().toString(), // Cambia esto para reflejar el total real
                    },
                },
            ],
        });
    };

    // Función para manejar la aprobación del pago
    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Aquí puedes agregar lógica adicional, como limpiar el carrito
        });
    };

    return (
        <div className="cartitems">
          {/*  <PayPalButton 
         createOrder ={(data, actions) => createOrder(data, actions)}
         onApprove={(data, actions) => onApprove(data, actions)}
         />*/}
            <div className="cartitems-format-main">
                <p>Producto</p>
                <p>Título</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Eliminar</p>
            </div>
            <hr />
            <div>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="" className="carticon-product-icon" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img className='cartiems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="remove" />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                       <h1>Total</h1> 
                       <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Costo de Envio</p>
                            <p>Gratis</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                       </div>
                       
                       <button>Metodos de pago </button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>Aplicar Cupón</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder="Codigo"/>
                            <button>APLICAR</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*button para pagar de paypal*/}
            <PayPalButton 
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </div>
    );
}

export default CartItems;