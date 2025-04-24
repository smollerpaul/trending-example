import React from 'react';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import { TrendProvider } from './context/TrendContext';

function App() {
  return (
    <TrendProvider>
      <div className="min-h-screen bg-background-dark">
        <Header />
        <main className="container mx-auto px-4 py-6 max-w-5xl">
          <NewsFeed />
        </main>
      </div>
    </TrendProvider>
  );
}

export default App;