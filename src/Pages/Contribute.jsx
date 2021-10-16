import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContributeCard, Nav, Feed } from "../Components";
import { updateCart } from "../Redux/Actions/cart";
import useDataLoader from "../Hooks/useDataLoader";

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

  const notify = (msg) => toast(msg);

  useDataLoader({ progress: true, cart: true, feed: true });

  const executeScroll = (toElementIndex) => {
    itemsRef.current[toElementIndex].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  function routeToBilling(e) {
    e.preventDefault();

    if (cart && cart.length > 0) history.push("/checkout");
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

        <main className="flex">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-48 flex flex-col items-center xl:items-start space-y-12">
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
              />
            ))}
          </div>

          <div className="hidden sticky top-8 xl:block mt-4 mr-16 -ml-12 w-72 h-96">
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
