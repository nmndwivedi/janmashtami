/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function PhoneInput() {
    return (
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          {/* <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>NL</option>
            </select>
          </div> */}
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
            placeholder="+1 (555) 987-6543"
          />
        </div>
      </div>
    )
  }
  