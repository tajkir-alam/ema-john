import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product-container'>
            <div className="pd-img-container">
                <img src={img} alt="" className="product-img" />
            </div>
            <div className="card-body">
                <h4 className='card-title'>{name}</h4>
                <h6 className='pd-price'>Price: ${price}</h6>
                <h6 className='card-details product-author'>Manufacturer: {seller}</h6>
                <h6 className='card-details'>Rating: {ratings} start</h6>
            </div>
            <div>
                <button className='btn-cart'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;