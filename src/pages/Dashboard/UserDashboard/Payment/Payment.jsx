import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);


const Payment = () => {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center">Payment</h1>
            <div>
                <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;