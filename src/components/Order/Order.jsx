import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import { removeFromDb } from '../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product => <ReviewProducts key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewProducts>)
                }
            </div>
            <div>
                <Cart cart={cart} handleClearCart={handleClearCart} >
                    <Link to={'/order-review'} className='proceed-link'>
                        <button className='btn-proceed'>
                            Proceed Checkout
                            <FontAwesomeIcon icon={faCreditCard} size='lg' color="white" />
                        </button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Order;