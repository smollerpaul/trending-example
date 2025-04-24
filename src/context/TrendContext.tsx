import React, { createContext, useState, useContext, ReactNode } from 'react';
import { mockTrendData } from '../data/mockData';
import { TrendPost, CryptoType } from '../types';

interface TrendContextType {
  posts: TrendPost[];
  userStatus: 'free' | 'premium';
  selectedCryptos: CryptoType[];
  toggleCryptoFilter: (crypto: CryptoType) => void;
  upgradeAccount: () => void;
}

const TrendContext = createContext<TrendContextType | undefined>(undefined);

export const TrendProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<TrendPost[]>(mockTrendData);
  const [userStatus, setUserStatus] = useState<'free' | 'premium'>('free');
  const [selectedCryptos, setSelectedCryptos] = useState<CryptoType[]>(['BTC', 'ETH', 'USDT', 'XRP']);

  const toggleCryptoFilter = (crypto: CryptoType) => {
    if (selectedCryptos.includes(crypto)) {
      setSelectedCryptos(selectedCryptos.filter(c => c !== crypto));
    } else {
      setSelectedCryptos([...selectedCryptos, crypto]);
    }
  };

  const upgradeAccount = () => {
    setUserStatus('premium');
  };

  return (
    <TrendContext.Provider
      value={{
        posts,
        userStatus,
        selectedCryptos,
        toggleCryptoFilter,
        upgradeAccount
      }}
    >
      {children}
    </TrendContext.Provider>
  );
};

export const useTrend = () => {
  const context = useContext(TrendContext);
  if (context === undefined) {
    throw new Error('useTrend must be used within a TrendProvider');
  }
  return context;
};