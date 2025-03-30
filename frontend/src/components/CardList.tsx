// src/components/CardList.tsx
import { Component, For } from 'solid-js';

interface Card {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CardList: Component = () => {
  const cards: Card[] = [
    { id: 1, title: "Classic Pink", price: 299, image: "classic-pink.jpg" },
    { id: 2, title: "Floral Bliss", price: 349, image: "floral-bliss.jpg" },
    { id: 3, title: "Royal Elegance", price: 499, image: "royal-elegance.jpg" },
  ];

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <For each={cards}>
        {(card: Card) => (
          <div class="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div class="relative h-72 bg-gradient-to-t from-pink-50 to-transparent">
              <img
                src={`/images/${card.image}`}
                alt={card.title}
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span class="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-pink-900 mb-2">{card.title}</h3>
              <p class="text-pink-700 font-medium">₹{card.price.toLocaleString()}</p>
              <button class="mt-4 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default CardList;