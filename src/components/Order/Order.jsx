import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product => <ReviewProducts key={product.id} product={product}></ReviewProducts>)      
                }
            </div>
            <div>
                <Cart cart={[]} />
            </div>
        </div>
    );
};

export default Order;