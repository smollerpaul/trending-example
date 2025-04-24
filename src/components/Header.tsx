import React, { useState } from 'react';
import { Bell, Search, User, TrendingUp } from 'lucide-react';
import { useTrend } from '../context/TrendContext';

const Header: React.FC = () => {
  const { userStatus, upgradeAccount } = useTrend();
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className="bg-background-card border-b border-neutral-800 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-5xl">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold">TrendAlpha</h1>
          <div className="ml-8 hidden md:flex items-center space-x-4 text-sm">
            <a href="#" className="text-white hover:text-primary-light transition">Newsfeed</a>
            <a href="#" className="text-neutral-400 hover:text-white transition">Market</a>
            <a href="#" className="text-neutral-400 hover:text-white transition">Insights</a>
            <a href="#" className="text-neutral-400 hover:text-white transition">Learn</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className={`relative ${isSearchActive ? 'w-48 md:w-64' : 'w-8 md:w-8'} transition-all duration-200`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search 
                className="h-4 w-4 text-neutral-400" 
                onClick={() => setIsSearchActive(!isSearchActive)}
              />
            </div>
            <input 
              type="text" 
              className={`bg-neutral-800 rounded-full py-1 pl-8 pr-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary ${
                isSearchActive ? 'opacity-100 w-full' : 'opacity-0 w-0 md:w-0'
              } transition-all duration-200`}
              placeholder="Search trends, topics..."
              onBlur={() => setIsSearchActive(false)}
            />
          </div>

          <button className="relative">
            <Bell className="h-5 w-5 text-neutral-400 hover:text-white transition" />
            <span className="absolute -top-1 -right-1 bg-primary rounded-full w-2 h-2"></span>
          </button>

          <div className="flex items-center">
            {userStatus === 'free' ? (
              <button 
                onClick={upgradeAccount}
                className="bg-primary hover:bg-primary-dark text-white text-xs px-3 py-1 rounded-full transition"
              >
                Upgrade
              </button>
            ) : (
              <div className="flex items-center space-x-1">
                <span className="text-xs text-primary font-medium">Premium</span>
                <div className="h-6 w-6 rounded-full bg-neutral-700 flex items-center justify-center">
                  <User className="h-3 w-3 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;