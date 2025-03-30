// src/App.tsx
import { Component } from 'solid-js';
import CardList from './components/CardList';
import Header from './components/Header';
import Footer from './components/Footer';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-pink-50 flex flex-col">
      <Header />
      <main class="flex-grow container mx-auto px-4 py-8">
        <CardList />
      </main>
      <Footer />
    </div>
  );
};

export default App;