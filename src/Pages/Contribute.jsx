import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContributeCard, Nav, Feed } from "../Components";
import { setProgress } from "../Redux/Actions/progress";
import { updateCart } from "../Redux/Actions/cart";

export default function Contribute() {
  //Offline
  const products = useSelector((state) => state.catalog.items);
  const cart = useSelector((state) => state.cart.items);
  //Online
  const progress = useSelector((state) => state.progress.items);
  const contributors = useSelector((state) => state.feed.donors);
  //Dispatch
  const d = useDispatch();

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
        <main className="flex">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-48 flex flex-col items-center xl:items-start space-y-12">
            {products.map((p) => (
              <ContributeCard
                key={p.id}
                product={p}
                last={products.indexOf(p) === products.length - 1}
                progress={progress.find((i) => i.id === p.id)}
                initialSelection={cart.find((i) => i.id === p.id)?.amount}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
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
