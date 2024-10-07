import React, { useEffect, useState } from 'react';
import CartCards from '../Cards/CartCards';
import useCart from '../../Hooks/useCart';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, deleteItem, refetch, total } = useCart()

    return (
        <div className='primary-bg pb-10'>
            <h1 className='text-6xl text-zinc-900 font-bold text-center py-10  '>cart</h1>
            <div className='max-w-[1536px] mx-auto'>
                {
                    cartItems.length === 0 ?
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-zinc-500'>Your Cart is empty</h3>
                            <div className='space-x-2 my-10'>
                                <button className='text-white capitalize px-4 py-3 bg-btn rounded-md hover:bg-blue-400 duration-200 ease-in'>build a custom Glove</button>
                                <span>Or</span>
                                <button className='px-4 py-3 capitalize bg-zinc-300 rounded-md hover:bg-zinc-200 duration-200 ease-in '>View all products</button>
                            </div>
                        </div>
                        :
                        <div className='flex'>
                            <div className='sm:mx-4 w-full'>
                                {
                                    cartItems.map((cart, index) =>
                                        <CartCards key={index} cartItem={cart} deleteItem={() => deleteItem(index)} />
                                    )
                                }
                            </div>
                            <div className='bg-white lg:w-[500px] h-44 p-4 rounded-md'>
                                <div className='flex justify-between text-lg font-bold '>
                                    <h3>Total</h3>
                                    <p>${total}</p>
                                </div>
                                <div className='flex justify-between text-zinc-500 text-sm font-semibold mt-6 '>
                                    <h3>Subtotal</h3>
                                    <p>${total}</p>
                                </div>
                                <Link to='/checkout'>
                                    <button className='capitalize text-lg text-white bg-btn w-full mt-5 py-3 rounded-md hover:bg-blue-400 duration-150 ease-in'>proceed to checkout</button>
                                </Link>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default Cart;