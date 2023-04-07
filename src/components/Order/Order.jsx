import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import { removeFromDb } from '../utilities/fakedb';
const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product => <ReviewProducts key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewProducts>)      
                }
            </div>
            <div>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Order;