import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = ({ cart, handleClearCart }) => {
    let totalPrice = 0;
    let totalShippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCharge = totalShippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }
    const totalTax = totalPrice * 5 / 100;
    const grandTotal = totalPrice + totalShippingCharge + totalTax;
    return (
        <div className='cart-container'>
            <h3 className='cart-title'>Order Summery</h3>
            <div className="cart-details">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShippingCharge}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
            <div onClick={handleClearCart} className='btn-container'>
                <div className='clear-btn-container'>
                    <button className='clear-btn'> Clear Cart </button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTrashCan} size='lg' color="white" />
                </div>
            </div>
        </div>
    );
};

export default Cart;