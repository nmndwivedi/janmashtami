import { useState, useEffect } from "react";
import { Disclosure, Switch } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NumFmt } from "../../Utils";
import validateAuth from "./validateAuth";
import useFormValidation from "../../Hooks/useFormValidation";
import useDataLoader from "../../Hooks/useDataLoader";
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
  const {
    handleSubmit,
    handleChange,
    handleSwitch,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth);

  useEffect(() => {
    handleSwitch(enabled);
  }, [enabled]);

  useDataLoader({cart: true});

  let total = cart.reduce((p, v) => p + v.amount, 0);

  return (
    <div className="bg-white">
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
                            <Link to="/contribute" >
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
                    <Link to="/contribute" >
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
                    <span className="ml-3 text-sm font-light text-red-500">{errors.name}</span>
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

                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                    <span className="ml-3 text-sm font-light text-red-500">{errors.email}</span>
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
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="contact-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                    <span className="ml-3 text-sm font-light text-red-500">{errors.tel}</span>
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

            <form action="/create-checkout-session" method="POST">
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <span className="sr-only">Pay with iDeal</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 306.1 269.8"
                  fill="currentColor"
                  className="h-5 w-auto mr-2"
                >
                  <path
                    className="st0"
                    d="M0 20v229.8c0 11 9 20 20 20h137.3c103.8 0 148.8-58.1 148.8-135.2C306.1 57.9 261.1 0 157.3 0H20C9 0 0 9 0 20z"
                  />
                  <path d="M91.9 56.4v169.8h73.9c67.1 0 96.2-37.9 96.2-91.5 0-51.3-29.1-91.1-96.2-91.1h-61.1c-7.1 0-12.8 5.8-12.8 12.8z" />
                  <path d="M157.3 251.5H37.9c-10.6 0-19.2-8.6-19.2-19.2V37.6c0-10.6 8.6-19.2 19.2-19.2h119.4c113.3 0 130.2 72.9 130.2 116.3 0 75.3-46.3 116.8-130.2 116.8zM37.9 24.8c-7.1 0-12.8 5.7-12.8 12.8v194.7c0 7.1 5.7 12.8 12.8 12.8h119.4c79.8 0 123.8-39.2 123.8-110.4 0-95.6-77.6-109.9-123.8-109.9H37.9z" />
                  <path
                    className="st0"
                    d="M117.9 111.8c2.6 0 5 .4 7.3 1.2 2.3.8 4.2 2.1 5.9 3.7 1.6 1.7 2.9 3.8 3.9 6.2.9 2.5 1.4 5.4 1.4 8.8 0 3-.4 5.7-1.1 8.2-.8 2.5-1.9 4.7-3.4 6.5-1.5 1.8-3.4 3.2-5.7 4.3-2.3 1-5 1.6-8.1 1.6h-17.5v-40.6h17.3zm-.6 33.1c1.3 0 2.5-.2 3.8-.6 1.2-.4 2.3-1.1 3.2-2.1.9-1 1.7-2.2 2.3-3.8.6-1.6.9-3.4.9-5.7 0-2-.2-3.9-.6-5.5-.4-1.6-1.1-3.1-2-4.2s-2.1-2.1-3.6-2.7c-1.5-.6-3.3-.9-5.5-.9h-6.4V145h7.9zM172.5 111.8v7.5h-21.4v8.7h19.7v6.9h-19.7v9.9H173v7.5h-30.8v-40.6h30.3zM203.1 111.8l15.2 40.6H209l-3.1-9h-15.2l-3.2 9h-9l15.3-40.6h9.3zm.5 24.9-5.1-14.9h-.1l-5.3 14.9h10.5zM232.8 111.8v33.1h19.8v7.5h-28.7v-40.6h8.9z"
                  />
                  <g>
                    <circle cx="58.5" cy="132.1" r="18.7" />
                  </g>
                  <path d="M72.6 226.2c-15.7 0-28.3-12.7-28.3-28.3v-22.1c0-7.8 6.3-14.2 14.2-14.2 7.8 0 14.2 6.3 14.2 14.2v50.4z" />
                </svg>
                Pay with iDeal
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
