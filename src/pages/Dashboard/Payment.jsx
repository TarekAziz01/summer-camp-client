import { useLocation } from "react-router-dom";
import CheckoutForm from "../../component/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {


    const location = useLocation()
    const item = (location?.state)
    const price = item?.price;
    // const price = parseFloat(total.toFixed(2));
    console.log(item)

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-10">
        payment for {item?.name} class
      </h2>
      <p>Price: {item?.price}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;