import { Nav } from "../Components";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-0 h-full xl:h-screen bg-white sm:pb-16 md:pb-20 xl:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden xl:block absolute right-0 inset-y-0 h-full w-48 transform translate-x-1/2 text-white"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Nav />

            <main className="mt-4 lg:mt-10 xl:mt-16 mb-6 lg:-mb-16 xl:mb-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center xl:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-indigo-700 sm:text-5xl md:text-6xl flex flex-col space-y-2">
                  <span className="block xl:inline">Deepawali 2021</span>{" "}
                  <span className="block opacity-40 xl:inline">Amsterdam</span>
                </h1>
                <p className="mt-3 text-base text-gray-700 opacity-40 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg xl:mx-0">
                  Deepawali - The Festival of Lights - is celebrated to
                  commemorate the return of Lord Rama to the kingdom of Ayodhya
                  after defeating Ravana, having spent 14 years in exile.
                </p>
                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg xl:mx-0 text-left">
                  <p>Join us for an evening of</p>
                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-9">Fantastic Kirtans</p>
                  </dt>

                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-9">Enlivening Kathas</p>
                  </dt>

                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-9">Special Aarti Offerings</p>
                  </dt>

                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-9">Cultural & Kids Programs</p>
                  </dt>

                  <dt>
                    <svg
                      class="absolute h-6 w-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p class="ml-9">Prasadam (take away Dinner)</p>
                  </dt>
                </p>
                <div className="mt-5 sm:mt-8 xl:mt-12 sm:flex sm:justify-center xl:justify-center">
                  <div className="rounded-md shadow">
                    <Link to="/contribute">
                        <button
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-12"
                        >
                        Join the Celebration
                        </button>
                    </Link>
                  </div>
                  {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                            >
                                Sign Up for Newsletter
                            </a>
                            </div> */}
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="relative xl:absolute lg:inset-y-0 lg:right-0">
          <img
            className="hidden inset-0 h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full object-right filter blur-lg"
            src="./Diwali/ayodhya2.jpeg"
            alt=""
          />
          <img
            className="z-10 sm:z-0 inset-0 h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full object-right"
            src="./Diwali/ayodhya2.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
