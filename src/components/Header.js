import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex  items-center bg-amazon_blue p-1 py-2">
        <div className="mt-2 flex items-center flex-grow ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
          {/* Search bar */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
            />
            <SearchIcon className="h-12 p-4" />
          </div>
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Piotr Gorski</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-amazon_blue font-extrabold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:flex font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex space-x-3 p-2 pl-6 bg-amazon_blue-light text-white items-center text-sm font-semibold">
        <MenuIcon className="h-6 mr-1 cursor-pointer" />
        <p className="link">All</p>
        <p className="link">Customer Service</p>
        <p className="link">Today's Deals</p>
        <p className="link">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Registry</p>
        <p className="link hidden lg:inline-flex">Sell</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Health</p>
        <p className="link hidden lg:inline-flex">Automotive</p>
      </div>
    </header>
  );
}

export default Header;
