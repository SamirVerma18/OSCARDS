// src/components/Header.tsx
import { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header class="bg-pink-200 shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-pink-800">Shadi Cards Online</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-pink-600 hover:text-pink-800">Home</a></li>
            <li><a href="#" class="text-pink-600 hover:text-pink-800">Cards</a></li>
            <li><a href="#" class="text-pink-600 hover:text-pink-800">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;