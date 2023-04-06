import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1>Order page is working</h1>
        </div>
    );
};

export default Order;