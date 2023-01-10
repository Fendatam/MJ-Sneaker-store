import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51MO7x4L1vONArxWEu2bsVFhTbL3qNB9jtS4SwVMfuWuje0ad0l6ZcL7Nt7wfLOzb5kRZ5FiP1AsQ78F8VUY9veC900bS5t7bjZ');
    }

    return stripePromise;
}

export default getStripe;