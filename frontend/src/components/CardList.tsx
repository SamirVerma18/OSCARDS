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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <For each={cards}>
        {(card: Card) => (
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-64 bg-pink-100 flex items-center justify-center">
              <img 
                src={`/images/${card.image}`} 
                alt={card.title}
                class="max-h-full object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-pink-800">{card.title}</h3>
              <p class="text-pink-600">₹{card.price}</p>
              <button class="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors">
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