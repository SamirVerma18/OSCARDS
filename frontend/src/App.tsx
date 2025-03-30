// src/App.tsx
import { Component } from 'solid-js';
import CardList from './components/CardList';
import Header from './components/Header';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex flex-col">
      <Header />
      <main class="flex-grow container mx-auto px-6 py-12">
        <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-8">
          <CardList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;