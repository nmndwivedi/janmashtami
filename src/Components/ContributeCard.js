import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const denominations = ['€10', '€20', '€50', '€108', '€256', '€501', '€1001'];

function ProgressBar() {
    return (
        <div className="relative pt-5 px-4">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                        Progress €300 | Target €1001
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-500">
                        30%
                    </span>
                </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div style={{"width":"34" + "%"}}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-400">
                </div>
            </div>
        </div>
    );
}

export default function ContributeCard({ product }) {
  const [selectedDenom, setSelectedDenom] = useState(denominations[3])

  return (
    <div className="bg-white max-w-4xl rounded-3xl">
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

            <h1 className="text-xl font-medium text-gray-900 overflow-ellipsis"></h1>

            <div className="lg:col-span-5 lg:ml-20 lg:-mr-24">
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
                    <h2 className="text-sm font-medium text-gray-900">Choose amount</h2>
                  </div>

                  <RadioGroup value={selectedDenom} onChange={setSelectedDenom} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose amount</RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {denominations.map((denom, i) => (
                        <RadioGroup.Option
                          key={i}
                          value={denom}
                          className={({ active, checked }) =>
                            classNames(
                              'cursor-pointer focus:outline-none',
                              active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                              checked
                                ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                              'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                            )
                          }
                        >
                          <RadioGroup.Label as="p">{denom}</RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}

                      <div className="mt-0">
                        <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="h-12 w-40 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-200 rounded-md"
                        placeholder="other amount(€)"
                        />
                    </div>
                    </div>
                  </RadioGroup>

                  <ProgressBar />
                </div>
                
                <div className="mt-7 flex justify-around space-x-2">
                    <button
                        type="submit"
                        className="w-1/3 bg-white border border-indigo-600 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Checkout
                    </button>

                    <button
                        type="submit"
                        className="w-1/2 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next Item
                  </button>

                </div>
              </form>


            </div>
          </div>
      </div>
    </div>
  )
}
