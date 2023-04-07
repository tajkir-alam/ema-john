import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ReviewProducts.css';

const ReviewProducts = ({product, handleRemoveFromCart}) => {
    const {img, name, price, shipping, id} = product;
    console.log(product);


    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" className='review-card-img' />
            </div>
            <div onClick={() => handleRemoveFromCart(id)} className='review-card-body'>
                <div>
                    <h1 className='review-card-title'>{name}</h1>
                    <p className='review-price'>Price: <span className='dynamic-price'>${price} </span></p>
                    <p className='review-shipping'>Shipping Charge: <span className='dynamic-shipping'>${shipping}</span></p>
                </div>
                <div className='delete-icon'>
                    <FontAwesomeIcon icon={faTrashCan} size="2x" color="#EB5757"/>
                </div>
            </div>
        </div>
    );
};

export default ReviewProducts;