import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axiosInstance from '../../Axios/AxiosInstance';


const CheckoutForm = ({ total }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const onSubmit = async (data) => {
        if (!stripe || !elements) return;
        setLoading(true);
        setError(null);

        try {
            // Create payment intent on your server
            const { data: { clientSecret } } = await axiosInstance.post('/create-payment-intent', {
                amount: total * 100, 
            });

            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement),
                    },
                }
            );

            if (stripeError) {
                setError(stripeError.message);
            } else if (paymentIntent.status === 'succeeded') {
                // Handle successful payment here
                alert('Payment successful!');
            }
        } catch (err) {
            setError('An error occurred while processing your payment.');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className="mb-4">
                <CardElement className="p-3 border rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-zinc-300 sm:text-sm`}
                    placeholder="Enter your name"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            {/* Phone Field */}
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]{11}$/,
                            message: 'Phone number must be 11 digits',
                        },
                    })}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-zinc-300 sm:text-sm`}
                    placeholder="Enter your phone number"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Enter a valid email',
                        },
                    })}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-zinc-300 sm:text-sm`}
                    placeholder="Enter your email"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            {/* Address Field */}
            <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    id="address"
                    rows="3"
                    {...register('address', { required: 'Address is required' })}
                    className={`mt-1 block w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-zinc-300 sm:text-sm`}
                    placeholder="Enter your address"
                />
                {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button
                    type="submit"

                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {loading ? 'Processing...' : `Pay $${total}`}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
