// src/components/Footer.tsx
import { Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <footer class="bg-pink-200 mt-8">
      <div class="container mx-auto px-4 py-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 class="text-pink-800 font-semibold">About Us</h4>
            <p class="text-pink-600">Premium shadi cards for your special day</p>
          </div>
          <div>
            <h4 class="text-pink-800 font-semibold">Contact</h4>
            <p class="text-pink-600">support@shadicards.com</p>
            <p class="text-pink-600">+91 123-456-7890</p>
          </div>
          <div>
            <h4 class="text-pink-800 font-semibold">Follow Us</h4>
            <div class="flex space-x-2">
              <a href="#" class="text-pink-600 hover:text-pink-800">Facebook</a>
              <a href="#" class="text-pink-600 hover:text-pink-800">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;