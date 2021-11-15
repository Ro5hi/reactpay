import {withRouter} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { 
    CardElement,
    Elements,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event, stripe, elements) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    
        if (!error) {
            console.log('Payment Method', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

const stripePromise = loadStripe('');
