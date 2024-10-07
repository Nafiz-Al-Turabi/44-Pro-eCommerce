import React from "react";
import CheckoutForm from "./CheckoutForm";
import { LuShieldCheck } from "react-icons/lu";
import useCart from "../../Hooks/useCart";
import { StripeContainer } from "../StripeContainer/StripeContainer";


const CheckOut = () => {
    const { cartItems, total } = useCart()
    return (
        <div className="min-h-screen flex items-center justify-between  bg-gray-100 ">
            <div className="max-w-5xl mx-auto flex justify-between w-full gap-6">
                <div className="w-4/5 bg-white border border-zinc-200 rounded-md p-6">
                    <h1 className="text-xl text-center mb-3">Order Summary</h1>
                    <hr />
                    <div className="h-72 overflow-auto p-2">
                        {
                            cartItems.map((cartItem, index) =>
                                <div key={index}>
                                    <div className="flex items-center justify-between bg-gray-50 border border-zinc-200 p-1.5 mt-5 rounded">
                                        <div className="text-sm">
                                            <p className="text-gray-700 font-semibold">Price: {cartItem.price} </p>
                                            <p className="text-gray-700 font-semibold">Size: {cartItem.size}"</p>
                                            <p className="text-gray-700 font-semibold">Personalization: {cartItem.personalization} </p>
                                        </div>
                                        <div className="text-sm">
                                            <p className="text-gray-700">5-6 Week Lead Time</p>
                                            <p className="text-gray-700">5-6 Week Lead Time</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="flex items-center text-xs text-gray-700 bg-blue-50 py-1.5 px-2 rounded-full mt-2"><LuShieldCheck className="text-lg mr-2" /> 1 Year Warranty Included</p>
                                        <div className="flex items-center gap-2 text-xs">
                                            <p>Quantity</p>
                                            <p className="w-4 h-4 bg-gray-300 flex justify-center items-center rounded-full">1</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <div className="mt-16">
                        <div>
                            <div className='flex justify-between text-zinc-500 text-sm font-semibold  '>
                                <h3>Subtotal</h3>
                                <p>$ {total}</p>
                            </div>
                            <div className='flex justify-between text-lg font-bold mt-6'>
                                <h3>Total</h3>
                                <p>${total}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-zinc-200 w-full ">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Checkout
                    </h2>

                    <div className="flex gap-5 items-center">
                        <StripeContainer >
                            <CheckoutForm total={total} />
                        </StripeContainer>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;
