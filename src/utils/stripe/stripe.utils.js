import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
