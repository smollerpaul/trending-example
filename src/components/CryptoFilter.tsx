import React from 'react';
import { useTrend } from '../context/TrendContext';
import { CryptoType } from '../types';

const CryptoFilter: React.FC = () => {
  const { selectedCryptos, toggleCryptoFilter } = useTrend();

  const cryptoOptions: { type: CryptoType; label: string }[] = [
    { type: 'BTC', label: 'Bitcoin' },
    { type: 'ETH', label: 'Ethereum' },
    { type: 'USDT', label: 'Tether' },
    { type: 'XRP', label: 'Ripple' }
  ];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
      {cryptoOptions.map(({ type, label }) => (
        <button
          key={type}
          onClick={() => toggleCryptoFilter(type)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none
            ${selectedCryptos.includes(type) 
              ? `crypto-tag ${type.toLowerCase()}` 
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
            }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default CryptoFilter;