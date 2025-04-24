import React from 'react';
import TrendPost from './TrendPost';
import CryptoFilter from './CryptoFilter';
import { useTrend } from '../context/TrendContext';

const NewsFeed: React.FC = () => {
  const { posts, selectedCryptos } = useTrend();

  // Filter posts based on selected cryptos
  const filteredPosts = posts.filter(post => 
    post.affectedCryptos.some(crypto => selectedCryptos.includes(crypto))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-white">Today's alpha</h2>
          <p className="text-neutral-400 text-sm">Real time news signals above the noise you need for trades </p>
        </div>
        <CryptoFilter />
      </div>

      <div className="space-y-6">
        {filteredPosts.map(post => (
          <TrendPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;