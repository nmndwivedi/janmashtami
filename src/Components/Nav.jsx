import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", external: false, href: "/" },
  { name: "Contribute", external: false, href: "/contribute" },
  { name: "About", external: true, href: "https://iskconamsterdam.nl/" },
  {
    name: "Newsletter",
    external: true,
    href: "https://us4.list-manage.com/subscribe?u=1ba7abc2577d7df82c57bb917&id=c90ede89a2",
  },
];

export default function Nav() {
  return (
    <Popover className="max-w-7xl mx-auto">
      <div className="relative w-full pt-6 px-4 sm:px-6 lg:px-8 ">
        <nav
          className="relative flex items-center justify-between sm:h-10 xl:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img className="w-12 sm:h-10 -mt-2" src="./Diwali/logo2.png" alt="" />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-12 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name} 
                to={!item.external ? item.href : { pathname: item.href }}
                target={!item.external ? "_self" : "_blank"}
              >
                <button className="font-medium text-gray-700 hover:text-gray-900">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="./Diwali/logo2.png" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}