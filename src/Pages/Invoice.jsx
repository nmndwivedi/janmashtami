import { Invite } from '../Components';
import { NumFmt } from '../Utils'

/* This example requires Tailwind CSS v2.0+ */
const productsAdded = [
    {
        id: 0,
        name: '🪞 Deity Shringaar',
        image: {
            imageSrc: './Diwali/Deities 3.jpeg',
            imageAlt: "Ornaments and clothing for the Deities",
        },
        amount: 108
    },
    {
        id: 1,
        name: '🪔 Diyas',
        image: {
            imageSrc: './Diwali/Diyas.jpeg',
            imageAlt: "Diyas (ghee lamps) to honour the deities",
        },
        amount: 20
    }
];

const details = {
    name: "Mike Andre",
    number: 2,
    amount: 1008,
};

function print(e) {
    window.print();
}
  
export default function Invoice(props) {
    const sum = productsAdded.map((p)=>(p.amount)).reduce((p, c)=>(p + c), 0);

    return (
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-12 lg:px-8 flex flex-col items-center">
          <div className="max-w-xl">
            <h1 className="text-lg font-semibold uppercase tracking-wide text-indigo-600 text-center">Thank you for your contribution</h1>
            {/* <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-center">Mark the Date!</p> */}
            <p className="mt-1 font-semibold text-gray-500 text-center">We look forward to seeing you soon!</p>
          </div>

          <div className="mt-8 w-full flex flex-col items-center">
            <Invite name={details.name} number={details.number} amount={details.amount} />
          </div>
  
          <div className="my-24 p-8 pt-4 border border-gray-300">
            <h2 className="sr-only">Your order</h2>
  
            <h3 className="sr-only">Items</h3>
            {productsAdded.map((product) => (
              <div key={product.id} className="py-4 border-b border-gray-200 flex space-x-6">
                <img
                  src={product.image.imageSrc}
                  alt={product.image.imageAlt}
                  className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-16 sm:h-16"
                />
                <div className="flex-auto flex flex-col">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      <div>{product.name}</div>
                    </h4>
                  </div>
                  <div>
                    <h4 className="mt-3 font-light text-gray-900">
                      <div>Amount: {NumFmt(product.amount)}</div>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
  
            <div className="sm:ml-40 sm:pl-6">
              <h3 className="sr-only">Your information</h3>
  
              <h4 className="sr-only">Addresses</h4>
              <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">Shipping address</dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Billing address</dt>
                  <dd className="mt-2 text-gray-700">
                    <address className="not-italic">
                      <span className="block">Kristin Watson</span>
                      <span className="block">7363 Cynthia Pass</span>
                      <span className="block">Toronto, ON N3Y 4H8</span>
                    </address>
                  </dd>
                </div>
              </dl>
  
              <h4 className="sr-only">Payment</h4>
              <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
                <div>
                  <dt className="font-medium text-gray-900">Payment method</dt>
                  <dd className="mt-2 text-gray-700">
                    <p>Apple Pay</p>
                    <p>Mastercard</p>
                    <p>
                      <span aria-hidden="true">•••• </span>
                      <span className="sr-only">Ending in </span>1545
                    </p>
                  </dd>
                </div>
              </dl>
  
              <h3 className="sr-only">Summary</h3>
  
              <dl className="space-y-6 border-t border-gray-200 text-sm pt-8">
                <div className="flex justify-between items-center">
                  <dt className="font-medium text-gray-900">Total Contribution Amount</dt>
                  <dd className="text-gray-700 text-lg">{NumFmt(sum)}</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <button className="mb-40 w-full px-8 py-3 max-w-sm bg-indigo-500 rounded-full text-white font-semibold text-lg" onClick={print}>Print Me</button>
        </div>

      </div>
    )
  }
  