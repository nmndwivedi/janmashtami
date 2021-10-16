import { useState, useEffect } from "react";
import { Disclosure, Switch } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NumFmt } from "../../Utils";
import validateAuth from "./validateAuth";
import useStripeCheckout from "./useStripeCheckout";
import useFormValidation from "../../Hooks/useFormValidation";
import useDataLoader from "../../Hooks/useDataLoader";
import Loader from '../../Components/Loader';

// import { ideal } from '../../public/Diwali/ideal.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const INITIAL_STATE = {
  name: "",
  email: "",
  tel: "",
  guests: 0,
  anon: false,
};

export default function Billing() {
  const [enabled, setEnabled] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const { stripeCheckout } = useStripeCheckout();
  let location = useLocation();
  const {
    handleSubmit,
    handleChange,
    handleSwitch,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth, stripeCheckout);

  useEffect(() => {
    handleSwitch(enabled);
  }, [enabled]);

  useDataLoader({ cart: true });

  let total = cart.reduce((p, v) => p + v.amount, 0);

  return (
    <div className="bg-white">
      <ToastContainer />
      <main className="lg:min-h-screen lg:overflow-hidden lg:flex lg:flex-row-reverse">
        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <section
          aria-labelledby="order-heading"
          className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
        >
          <Disclosure as="div" className="max-w-lg mx-auto">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between">
                  <h2
                    id="order-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Your Order
                  </h2>
                  <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                    {open ? (
                      <span>Hide full summary</span>
                    ) : (
                      <span>Show full summary</span>
                    )}
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel>
                  <ul className="divide-y divide-gray-200 border-b border-gray-200">
                    {cart.map((product) => (
                      <li key={product.id} className="flex py-6 space-x-6">
                        <img
                          src={product.details.image.imageSrc}
                          alt={product.details.image.imageAlt}
                          className="flex-none w-20 h-20 object-center object-cover bg-gray-200 rounded-md"
                        />
                        <div className="flex flex-col justify-between space-y-4">
                          <div className="text-sm font-medium space-y-1">
                            <h3 className="text-gray-900">
                              {product.details.name}
                            </h3>
                            <p className="text-gray-900 font-normal">
                              Your contribution: {NumFmt(product.amount)}
                            </p>
                          </div>
                          <div className="flex space-x-4">
                            <Link to="/contribute">
                              <button
                                type="button"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Edit
                              </button>
                            </Link>
                            {/* <div className="flex border-l border-gray-300 pl-4">
                              <button
                                type="button"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>

                <p className="flex items-center justify-between text-sm font-medium text-gray-900 pt-6">
                  <span className="text-base">Total</span>
                  <span className="text-base">{NumFmt(total)}</span>
                </p>
              </>
            )}
          </Disclosure>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="hidden bg-gray-50 w-full max-w-md flex-col lg:flex"
        >
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <ul className="divide-y divide-gray-200 px-6">
            {cart.map((product) => (
              <li key={product.id} className="flex py-6 space-x-6">
                <img
                  src={product.details.image.imageSrc}
                  alt={product.details.image.imageAlt}
                  className="flex-none w-20 h-20 object-center object-cover bg-gray-200 rounded-md"
                />
                <div className="flex flex-col justify-between space-y-4">
                  <div className="text-sm font-medium space-y-1">
                    <h3 className="text-gray-900">{product.details.name}</h3>
                    <p className="text-gray-900 font-normal">
                      Your contribution: {NumFmt(product.amount)}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <Link to="/contribute">
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Edit
                      </button>
                    </Link>
                    {/* <div className="flex border-l border-gray-300 pl-4">
                      <Link to="/contribute" >
                        <button
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="sticky bottom-0 flex-none bg-gray-50 p-6">
            <dl className="text-sm font-medium text-gray-500 mt-0 space-y-6">
              <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt>Total</dt>
                <dd className="text-base">{NumFmt(total)}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Checkout form */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
        >
          <h2 id="payment-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <div className="max-w-lg mx-auto lg:pt-16">
            <span className="text-gray-500">
              Enter your details so we can send you a reminder before the event
            </span>
            <form className="mt-6">
              <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                <div className="col-span-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                    <span className="ml-3 text-sm font-light text-red-500">
                      {errors.name}
                    </span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={`${
                        errors.name && "ring-red-500 ring-offset-1 ring-1"
                      } block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                  </div>
                </div>

                {/* <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                    <span className="ml-3 text-sm font-light text-red-500">
                      {errors.email}
                    </span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={`${
                        errors.email && "ring-red-500 ring-offset-1 ring-1"
                      } block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                  </div>
                </div> */}

                <div className="col-span-full">
                  <label
                    htmlFor="contact-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                    <span className="ml-3 text-sm font-light text-red-500">
                      {errors.tel}
                    </span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="tel"
                      name="tel"
                      autoComplete="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.tel}
                      className={`${
                        errors.tel && "ring-red-500 ring-offset-1 ring-1"
                      } block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How many other people will join with you?
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      min="0"
                      id="guests"
                      name="guests"
                      onChange={handleChange}
                      value={values.guests}
                      className="block w-1/6 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-full flex items-center">
                  <label
                    htmlFor="anon"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Make your donation anonymous?
                  </label>
                  <div className="mt-1 ml-3">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>

              <div className="relative my-12 -mx-8">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-dashed border-gray-300" />
                </div>
                <div className="relative flex justify-center"></div>
              </div>
            </form>

            {/* <form action="/create-checkout-session" method="POST"> */}
            <button
              // type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center ${
                isSubmitting ? "bg-gray-400" : "bg-indigo-500"
              } border border-transparent text-white rounded-md py-2 ${
                isSubmitting
                  ? "cursor-wait"
                  : "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              }`}
            >
              <span className="sr-only">Pay now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mr-3">Pay Now & Complete Donation</p>
              <Loader visible={isSubmitting} />
            </button>
            {/* </form> */}
          </div>
        </section>
      </main>
    </div>
  );
}
