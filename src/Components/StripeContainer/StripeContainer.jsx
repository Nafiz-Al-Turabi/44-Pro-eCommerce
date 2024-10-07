import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET);

export function StripeContainer({ children }) {
    return <Elements stripe={stripePromise}>{children}</Elements>;
}