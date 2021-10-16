import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { NumFmt } from "../Utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function bgColorClass(p) {
  if (p <= 30) return "bg-red-500";
  else if (p <= 70) return "bg-yellow-400";
  else return "bg-green-500";
}

function textColorClass(p) {
  if (p <= 30) return "text-red-500";
  else if (p <= 70) return "text-yellow-400";
  else return "text-green-500";
}

const denominations = [10, 20, 50, 108, 256, 501, 1001];

function ProgressBar({ prog, goal }) {
  const perc = Math.round(Math.min(Math.max((prog * 100) / goal, 7), 1000));
  let progress = (goal * perc) / 100;

  return (
    <div className="relative pt-5 px-4">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
            Progress {NumFmt(progress)} | Target {NumFmt(goal)}
          </span>
        </div>
        <div className="text-right">
          <span
            className={`text-xs font-semibold inline-block ${textColorClass(
              perc
            )}`}
          >
            {perc}% of goal met
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: perc + "%" }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${bgColorClass(
            perc
          )}`}
        ></div>
      </div>
    </div>
  );
}

function getInitialSelectionType(val, arr) {
  if (!val) return "none";
  else if (arr.includes(val)) return "radio";
  else if (val > 0) return "custom";
  else return "none";
}

export default function ContributeCard({
  innerRef,
  product,
  last,
  progress,
  initialSelection,
  myIndex,
  handleScrollToNext,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}) {
  const [radioAmount, setRadioAmount] = useState("");
  const [customAmt, setCustomAmount] = useState("");

  useEffect(() => {
    const initType = getInitialSelectionType(initialSelection, denominations);
    setRadioAmount(initType === "radio" ? initialSelection : "");
    setCustomAmount(initType === "custom" ? initialSelection : "");
  }, [initialSelection]);

  const checkUnselect = (v) => {
    if (radioAmount.toString() === v.target.innerText.replace("€", "")) {
      if (radioAmount !== "") onRemoveFromCart(product.id);
      setRadioAmount("");
    }
  };

  const handleAmountInput = (value, std) => {
    if (std) {
      setRadioAmount(value);
      setCustomAmount("");
      onAddToCart(product.id, value);
    } else {
      setRadioAmount("");
      setCustomAmount(value);
      if (value === "" || isNaN(parseInt(value)) || parseInt(value) === 0) {
        onRemoveFromCart(product.id);
        return;
      } else onAddToCart(product.id, parseInt(value));
    }
  };

  return (
    <div ref={innerRef} className="bg-white max-w-4xl rounded-3xl">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:max-w-7xl lg:p-8 overflow-hidden rounded-3xl">
        <div className="lg:grid lg:grid-cols-8 lg:auto-rows-min lg:gap-x-8">
          {/* Image gallery */}
          <div className="bg-blue-500 w-full max-h-64 lg:max-h-screen rounded-2xl lg:rounded-none overflow-hidden lg:w-72 mb-4 lg:-m-8">
            <img
              key={product.image.id}
              src={product.image.imageSrc}
              alt={product.image.imageAlt}
              className={"object-cover h-full w-full"}
            />
          </div>
          {/* <div className="h-full -m-6 mb-4 lg:-m-8 lg:mr-5 xl:-m-12 xl:mr-2 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3">
                <img
                    key={product.image.id}
                    src={product.image.imageSrc}
                    alt={product.image.imageAlt}
                    className={"xl:rounded-tl-3xl xl:rounded-bl-3xl w-full h-48 lg:h-auto object-cover object-top"}
                /></div> */}

          {/* <div className="text-xl font-medium text-gray-900 overflow-ellipsis"></div> */}

          <div className="lg:col-span-5 lg:ml-48 lg:-mr-52">
            <form>
              {/* Product details */}
              <div className="-mt-2">
                <div
                  className="font-medium text-lg"
                  dangerouslySetInnerHTML={{ __html: product.name }}
                />
                <div
                  className="prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* Denom picker */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">
                    Choose amount
                  </h2>
                </div>

                <RadioGroup
                  value={radioAmount}
                  onChange={(v) => handleAmountInput(v, true)}
                  onClick={checkUnselect}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose amount
                  </RadioGroup.Label>

                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {denominations.map((denom, i) => (
                      <RadioGroup.Option
                        key={i}
                        value={denom}
                        className={({ active, checked }) =>
                          classNames(
                            "cursor-pointer focus:outline-none",
                            active
                              ? "ring-1 ring-offset-1 ring-indigo-600"
                              : "",
                            checked
                              ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                              : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                            "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                          )
                        }
                      >
                        <RadioGroup.Label as="p">
                          {NumFmt(denom)}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}

                    <div className="mt-0">
                      {/* <span class="flex items-center">
                        or € */}
                      <input
                        type="number"
                        min="1"
                        name="amount"
                        id="amount"
                        className={`h-12 w-40 shadow-sm ${
                          customAmt === "" ? "bg-white" : "bg-indigo-500"
                        } text-white block sm:text-sm border-gray-200 rounded-md`}
                        placeholder="other amount(€)"
                        value={customAmt}
                        onChange={(e) =>
                          handleAmountInput(e.target.value, false)
                        }
                      />
                      {/* </span> */}
                    </div>
                  </div>
                </RadioGroup>

                <ProgressBar prog={progress.progress} goal={progress.goal} />
              </div>

              <div className="mt-7 flex justify-around space-x-2">
                <button
                  onClick={onCheckout}
                  className={`w-${last ? "full" : "1/3"} ${
                    last ? "bg-pink-600" : "bg-white"
                  } border border-pink-600 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium ${
                    !last ? "text-pink-600" : "text-white"
                  } hover:${
                    last ? "bg-pink-700" : "bg-pink-100"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 cursor-pointer`}
                >
                  Checkout
                </button>

                <div
                  onClick={() => handleScrollToNext(myIndex + 1)}
                  className={`${
                    last ? "hidden" : ""
                  } w-1/2 bg-pink-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 cursor-pointer`}
                >
                  Next Item
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
