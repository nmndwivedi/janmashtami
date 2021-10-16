import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { setPerson } from "../../Redux/Actions/person";
import { createStripeCheckout, getStripePubKey } from '../../firebase-config';

export default function useStripeCheckout() {
  const [stripe, setStripe] = useState();
  const cart = useSelector((state) => state.cart.items);
  const d = useDispatch();

  // const createStripeCheckout = httpsCallable(fns, "createStripeCheckout");
  // createStripeCheckout({ text: 'Hi' }).then((result) => {
  //   console.log(stripe);
  //   stripe.redirectToCheckout({ sessionId:result.data })
  // });
  useEffect(() => {
    async function load() {
      const requestOptions = {
        method: "GET",
      };

      const res = await fetch(
        getStripePubKey,
        requestOptions
      );

      const t = await res.json();

      const s = await loadStripe(t.data);
      setStripe(s);
    }
    load();
  }, []);

  function stripeCheckout(personData) {
    async function execute() {
      //Load req body
      /*
        {
          name:
          tel:
          guests:
          anon:
          items:[
            {
              id:
              name:
              amount:
            }
          ]
        }
      */

      d(setPerson(personData));

      const filteredCart = cart.map((i) => ({
        id: i.details.id,
        name: i.details.name,
        amount: i.amount,
      }));

      const reqBody = {
        name: personData.name,
        tel: personData.tel,
        guests: personData.guests,
        anon: personData.anon,
        items: filteredCart,
        total: cart.reduce((p, v) => p + v.amount, 0),
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      };

      localStorage.setItem("ros", JSON.stringify(requestOptions));

      const res = await fetch(
        createStripeCheckout,
        requestOptions
      );

      const t = await res.json();
      stripe.redirectToCheckout({ sessionId: t.data });
    }
    execute();
  }

  return { stripeCheckout };
}
