import React from 'react';
import './ReviewProducts.css'

const ReviewProducts = ({product}) => {
    const {img, name, price, shipping} = product;
    console.log(product);
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" className='review-card-img' />
            </div>
            <div className='review-card-body'>
                <div>
                    <h1 className='review-card-title'>{name}</h1>
                    <p className='review-price'>Price: <span className='dynamic-price'>${price} </span></p>
                    <p className='review-shipping'>Shipping Charge: <span className='dynamic-shipping'>${shipping}</span></p>
                </div>
                <div>
                    DI
                </div>
            </div>
        </div>
    );
};

export default ReviewProducts;