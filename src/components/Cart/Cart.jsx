import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShippingCharge = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShippingCharge = totalShippingCharge + product.shipping;
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
        </div>
    );
};

export default Cart;