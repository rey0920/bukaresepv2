import LinkItem from "./LinkItem";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 drop-shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-6 md:px-16">
          <a href="/" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              <span className="text-blue-700 font-semibold">Buka</span>Resep
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="hidden relative mr-3 md:mr-0 md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="block pl-12 pr-10 py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Cari Resep"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
