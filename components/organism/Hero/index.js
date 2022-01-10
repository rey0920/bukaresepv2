import { useState } from "react/cjs/react.development";

export default function Hero() {
  const [search, setSearch] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid justify-items-center">
      <h1 className="text-5xl font-semibold text-transparent bg-gradient-to-br from-blue-600 to-indigo-900 bg-clip-text">
        Cari Resep Makanan
      </h1>
      <p className="mt-2 text-gray-500 mb-6">
        Tidak perlu bingung lagi untuk masak karena{" "}
        <span className="text-blue-500">resepnya</span> ada{" "}
        <span className="text-blue-500">disini!</span>
      </p>
      <form onSubmit={HandleSubmit} className="flex mb-3">
        <div class="relative mr-3 md:mr-0 md:block">
          <div class="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
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
            class="block pl-12 pr-36 py-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Cari Resep"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
