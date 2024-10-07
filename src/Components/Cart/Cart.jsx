import React, { useEffect, useState } from 'react';
import CartCards from '../Cards/CartCards';
import useCart from '../../Hooks/useCart';

const Cart = () => {
    const [carts, setCarts] = useState([])
    const { cartItems,deleteItem,refetch} = useCart()
    useEffect(() => {
        const fetchCarts = () => {
            const storedItems = localStorage.getItem('cartItems');
            if (storedItems) {
                setCarts(JSON.parse(storedItems));
            }
        };

        fetchCarts();
    }, []);
    
    return (
        <div className='primary-bg pb-10'>
            <h1 className='text-6xl text-zinc-900 font-bold text-center py-10  '>cart</h1>
            {
                cartItems.length === 0 ?
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold text-zinc-500'>Your Cart is empty</h3>
                        <div className='space-x-2 my-10'>
                            <button className='text-white capitalize px-4 py-3 bg-btn rounded-md hover:bg-blue-400 duration-200 ease-in'>build a custom Glove</button>
                            <span>Or</span>
                            <button className='px-4 py-3 capitalize bg-zinc-200 rounded-md hover:bg-zinc-100 duration-200 ease-in '>View all products</button>
                        </div>
                    </div>
                    :
                    <div className='sm:mx-4'>
                        {
                            carts.map((cart, index) =>
                                <CartCards key={index} cartItem={cart} deleteItem={()=> deleteItem(index)} />
                            )
                        }
                    </div>
            }

        </div>
    );
};

export default Cart;