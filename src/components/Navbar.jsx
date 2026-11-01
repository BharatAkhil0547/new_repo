import React from 'react';

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Kick<span className="text-blue-600">Hub</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#categories"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              Categories
            </a>
          </li>

          <li>
            <a
              href="#new-arrivals"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              New Arrivals
            </a>
          </li>

          <li>
            <a
              href="#trending"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              Trending
            </a>
          </li>

          <li>
            <a
              href="#sale"
              className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200"
            >
              Sale
            </a>
          </li>
        </ul>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search sneakers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-52 h-10 pl-4 pr-10 rounded-full border border-gray-300
                       bg-gray-50 text-sm outline-none
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                       transition-all duration-200"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;