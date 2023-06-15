import { useLocation } from "react-router-dom";
import CheckoutForm from "../../component/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {


    const location = useLocation()
    const item = (location?.state)
    const total = item?.price;
    const number = parseFloat(total)
    const price = number.toFixed(2);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-10">
        payment for {item?.name} class
      </h2>
      <p>Price: {item?.price}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} item={item}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;