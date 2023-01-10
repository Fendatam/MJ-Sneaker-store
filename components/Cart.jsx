import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {

    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();


    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({ sessionId: data.id });
    }

    return (
        <div className='cart-wrapper' ref={cartRef}>
            <div className='cart-container'>
                <button
                    type='button'
                    className='cart-heading'
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className='heading'>Your Cart</span>
                    <span className='cart-num-items'>({totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 && (
                    <div className='empty-cart'>
                        <div className='flex justify-center'>
                            <AiOutlineShopping size={150} />
                        </div>
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button type='button'
                                className='btn'
                                onClick={() => setShowCart(false)}>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='product-container'>
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className='product' key={item._id}>
                            <img src={urlFor(item?.image[0])} className="cart-product-image" />
                            <div className='item-desc'>
                                <div className='flex top font-semibold'>
                                    <h5>{item.name}</h5>
                                    <h4>SAR{item.price * item.quantity}</h4>
                                </div>
                                <div className='flex bottom'>
                                    <div className="">
                                        <div className='border-4 grid grid-cols-3 items-center'>
                                            <span className=' text-rose-900 cursor-pointer ml-4' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                                            <span className='border-x-4 px-4 h-full py-2'>{item.quantity}</span>
                                            <span className='text-green-900 font-semibold cursor-pointer ml-4' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='remove-item' onClick={() => onRemove(item._id)}>
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                {cartItems.length >= 1 && (
                    <div className='cart-bottom'>
                        <div className='total'>
                            <h3>Subtotal:</h3>
                            <h3>SAR{totalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button type='button'
                                className='btn'
                                onClick={() => handleCheckout()}>
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart