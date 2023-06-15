import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";

const CheckoutForm = ({ price }) => {
  const { user } = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const axios=useAxiosSecure()
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const[transactionId, setTransactionId]=useState('')



  useEffect(() => {
    axios.post("/create-payment-intent", { price })
      .then(data => {
      console.log(data.data.clientSecret);
      setClientSecret(data.data.clientSecret);
    })
  },[price,axios])



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // console.log('card',card)
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    }
    else {
      // console.log("payment method", paymentMethod);
      setCardError("");
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
      
    if (confirmError) {
        console.log(confirmError)
    }
    console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      //TODO: next 
    }

  };

  return (
    <>
      <form className="w-2/3 m-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-400 m-5">{cardError}</p>}
      {transactionId && <p className="text-success">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;