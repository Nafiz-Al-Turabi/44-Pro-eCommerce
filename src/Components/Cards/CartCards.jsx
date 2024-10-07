import React from 'react';
import { IoClose } from 'react-icons/io5';
import useCart from '../../Hooks/useCart';

const CartCards = ({ cartItem, deleteItem }) => {

    console.log(cartItem);
    const { size, price, personalization, colors } = cartItem
    // Convert colors object to an array of values
    const colorArray = Object.values(colors)
    console.log(colorArray);
    return (
        <div className="max-w-3xl  mb-5 mx-auto bg-white rounded-lg shadow-lg overflow-hidden lg:flex relative ">
            <div className="p-4 w-1/2">
                <h2 className="text-lg font-bold text-center text-gray-800">Product Details</h2>
                <div className="mt-4">
                    <p className="text-gray-700">Price: {price} </p>
                    <p className="text-gray-700">Size: {size}</p>
                    <p className="text-gray-700">Personalization: {personalization}</p>
                </div>
            </div>
            <div className="px-4 py-2 bg-zinc-400 w-full">
                <h3 className="text-md font-semibold text-gray-800">Colors:</h3>
                <ul className="list-disc pl-5 grid grid-cols-2 lg:grid-cols-3">
                    {
                        colorArray.map((color, index) => (
                            <li key={index} style={{ color: `${color}` }} >
                                {color}
                            </li>
                        ))

                    }
                </ul>
            </div>
            <button onClick={deleteItem} className='absolute top-3 right-3 text-2xl bg-red-500 text-white rounded-full hover:bg-red-600 duration-150 active:scale-95'>
                <IoClose />
            </button>
        </div>
    );
};

export default CartCards;
