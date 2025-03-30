// src/components/Header.tsx
import { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header class="bg-gradient-to-r from-pink-300 via-rose-200 to-pink-200 shadow-lg sticky top-0 z-10">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 class="text-3xl font-extrabold text-pink-900 tracking-tight">
          <a href="/" class="hover:text-pink-700 transition-colors duration-200">
            Shadi Cards Online
          </a>
        </h1>
        <nav class="bg-white bg-opacity-90 backdrop-blur-md rounded-full px-6 py-2 shadow-md">
          <ul class="flex space-x-6">
            {["Home", "Cards", "Contact"].map((item) => (
              <li>
                <a
                  href="#"
                  class="text-pink-700 font-semibold text-base uppercase tracking-wide hover:text-pink-900 hover:underline underline-offset-4 transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
