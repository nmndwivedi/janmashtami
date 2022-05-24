import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContributeCard, Nav, Feed } from "../Components";
import { updateCart } from "../Redux/Actions/cart";
import useDataLoader from "../Hooks/useDataLoader";
import useStripeCheckout from "../Pages/Billing/useStripeCheckout";
import { clearCart } from "../Redux/Actions/cart";
import { purchased } from "../Redux/Actions/purchased";

function scrollCustomImplementation(element) {
  let start = null;
  let target = element && element ? element.getBoundingClientRect().top : 0;
  let firstPos = window.pageYOffset || document.documentElement.scrollTop;
  let pos = 0;

  (function () {
    var browser = ["ms", "moz", "webkit", "o"];

    for (
      var x = 0, length = browser.length;
      x < length && !window.requestAnimationFrame;
      x++
    ) {
      window.requestAnimationFrame =
        window[browser[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[browser[x] + "CancelAnimationFrame"] ||
        window[browser[x] + "CancelRequestAnimationFrame"];
    }
  })();

  function showAnimation(timestamp) {
    if (!start) {
      start = timestamp || new Date().getTime();
    } //get id of animation

    var elapsed = timestamp - start;
    var progress = elapsed / 600; // animation duration 600ms
    //ease in function from https://github.com/component/ease/blob/master/index.js

    var outQuad = function outQuad(n) {
      return n * (2 - n);
    };

    var easeInPercentage = +outQuad(progress).toFixed(2); // if target is 0 (back to top), the position is: current pos + (current pos * percentage of duration)
    // if target > 0 (not back to top), the positon is current pos + (target pos * percentage of duration)

    pos =
      target === 0
        ? firstPos - firstPos * easeInPercentage
        : firstPos + target * easeInPercentage;
    window.scrollTo(0, pos);
    console.log(pos, target, firstPos, progress);

    if (
      (target !== 0 && pos >= firstPos + target) ||
      (target === 0 && pos <= 0)
    ) {
      cancelAnimationFrame(start);

      if (element) {
        element.setAttribute("tabindex", -1);
        element.focus();
      }

      pos = 0;
    } else {
      window.requestAnimationFrame(showAnimation);
    }
  }

  window.requestAnimationFrame(showAnimation);
}

export default function Contribute() {
  //Offline
  const products = useSelector((state) => state.catalog.items);
  const cart = useSelector((state) => state.cart.items);
  //Online
  const progress = useSelector((state) => state.progress.items);
  const contributors = useSelector((state) => state.feed.donors);

  const itemsRef = useRef([]);

  const d = useDispatch();
  const history = useHistory();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { stripeCheckout } = useStripeCheckout();
  const [checkedOut, setCheckedOut] = useState(false);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    if(localStorage.getItem("purchased")==='true') {
      d(clearCart());
      d(purchased(false));
    }

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const notify = (msg) => toast(msg);

  useDataLoader({ progress: true, cart: true, feed: true });

  const executeScroll = (toElementIndex) => {
    if (!isMobile) {
      itemsRef.current[toElementIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else {
      scrollCustomImplementation(itemsRef.current[toElementIndex]);
    }
  };

  function routeToBilling(e) {
    // e.preventDefault();

    if (cart && cart.length > 0) stripeCheckout(); //history.push("/checkout");
    else notify("Please donate to at least one item");
  }

  //   // TODO Add link from firebase
  //   useEffect(() => {
  //     const fetchCatalog = async () => {
  //       const newItems = [];

  //       if (newItems && newItems.length > 0) disp(setCatalog(newItems));
  //     };

  //     fetchCatalog();
  //   }, [disp]);

  const handleAddToCart = (id, amount) => {
    let newCart = cart.filter((s) => s.id !== id);
    let newItem = products.find((p) => p.id === id);
    newCart.push({ id, amount, details: newItem });

    d(updateCart(newCart));
  };

  const handleRemoveFromCart = (id) => {
    let newCart = cart.filter((s) => s.id !== id);

    d(updateCart(newCart));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 md:mb-10 text-indigo-700">
              Contribute to Preparations
            </h1>
          </div>
        </header>

        <ToastContainer />

        <main className="flex flex-col items-center xl:items-start xl:flex-row">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-0 xl:mb-48 flex flex-col items-center xl:items-start space-y-12">
            {products.map((p, index) => (
              <ContributeCard
                key={index}
                innerRef={(el) => (itemsRef.current[index] = el)}
                product={p}
                last={index === products.length - 1}
                progress={progress.find((i) => i.id === p.id)}
                initialSelection={cart.find((i) => i.id === p.id)?.amount}
                myIndex={index}
                handleScrollToNext={executeScroll}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                onCheckout={routeToBilling}
                validCheckout={cart && cart.length > 0}
                checkedOut={checkedOut}
                setCheckedOut={setCheckedOut}
              />
            ))}
          </div>

          <div className="mb-40 xl:sticky xl:top-8 xl:block mt-4 xl:mr-10 -ml-0 w-full p-10 xl:p-0 max-w-md xl:w-72 h-96">
            <p className="mb-4">Recent Activity</p>

            <div className="h-96 overflow-y-scroll border border-gray-300 px-4 rounded-2xl">
              <Feed contributors={contributors} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
