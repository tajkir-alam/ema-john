import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart-container'>
            <h3 className='cart-title'>Order Summery</h3>
            <div className="cart-details">
                <p>Selected Items: </p>
                <p>Total Price: </p>
                <p>Total Shipping Charge: </p>
                <p>Tas: </p>
                <h3>Grand Total: </h3>
            </div>
        </div>
    );
};

export default Cart;