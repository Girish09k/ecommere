import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');

    // Example for dynamically generating stars based on rating
    const totalStars = 5;
    const rating = 4; // Assuming the rating is 4 out of 5
    const stars = Array.from({ length: totalStars }, (_, i) => (
        <img key={i} src={i < rating ? star_icon : star_dull_icon} alt={`${i < rating ? 'filled' : 'empty'} star`} />
    ));

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize);
        } else {
            alert('Please select a size before adding to cart');
        }
    };

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    {stars}
                    <p>(122)</p> {/* Assuming 122 reviews */}
                </div>
                <div className="productdisplay-right-prices">
                    <div className='productdisplay-right-price-old'>₹{product.old_price}</div>
                    <div className='productdisplay-right-price-new'>₹{product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    Experience the ultimate in comfort and style with our premium cotton t-shirt, designed to keep you looking sharp all day long. Crafted with care, this versatile piece is perfect for any occasion, whether you're dressing up or keeping it casual.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select size</h1>
                    <div className='productdisplay-right-sizes'>
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div
                                key={size}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;