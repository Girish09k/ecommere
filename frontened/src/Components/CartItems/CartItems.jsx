import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />  
            {all_product.length > 0 && all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={product.image} alt="" className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>₹ {product.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                                <p>₹ {product.new_price * cartItems[product.id]}</p>
                                <img
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    onClick={() => removeFromCart(product.id)}
                                    alt="Remove"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Checkout</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>Enter promocode</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='Promocode' className='promocode-input' />
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
