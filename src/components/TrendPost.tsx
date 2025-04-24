import React from 'react';
import { format } from 'date-fns';
import { TrendPost as TrendPostType } from '../types';
import PriceChart from './PriceChart';
import { useTrend } from '../context/TrendContext';
import { Lock, MessageCircle, Repeat, Heart, BarChart2, TrendingUp, ArrowRight, Newspaper } from 'lucide-react';

interface TrendPostProps {
  post: TrendPostType;
}

const TrendPost: React.FC<TrendPostProps> = ({ post }) => {
  const { userStatus, upgradeAccount } = useTrend();
  const isPremiumLocked = post.isPremium && userStatus === 'free';
  
  const formattedDate = format(new Date(post.timestamp), 'h:mma MMM d');
  
  const formatNumber = (num: number): string => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  };

  const renderEngagementMetrics = (metrics: TrendPostType['engagementMetrics']) => (
    <div className="flex justify-between items-center mt-3">
      <div className="score-container">
        <MessageCircle className="engagement-icon" />
        <span>{formatNumber(metrics.replies)}</span>
      </div>
      <div className="score-container">
        <Repeat className="engagement-icon" />
        <span>{formatNumber(metrics.retweets)}</span>
      </div>
      <div className="score-container">
        <Heart className="engagement-icon" />
        <span>{formatNumber(metrics.likes)}</span>
      </div>
      <div className="score-container">
        <BarChart2 className="engagement-icon" />
        <span>{formatNumber(metrics.views)}</span>
      </div>
    </div>
  );

  return (
    <article className="trend-card">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">{post.title}</h3>
            <div className="flex items-center text-sm text-neutral-400">
              <span>{formattedDate}</span>
              <span className="early-trend-badge ml-3">Early trend alpha</span>
              {post.isHottest && <span className="hottest-badge ml-2">Hottest</span>}
            </div>
          </div>
        </div>

        {/* News Content */}
        {post.type === 'news' && (
          <div className="relative rounded-lg border border-neutral-800 p-3 bg-neutral-900/40 mb-3">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-neutral-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="font-semibold text-white mr-2">{post.author.name}</span>
                  {post.source && (
                    <span className="text-neutral-400 text-sm">{post.source}</span>
                  )}
                </div>
                
                <div className="relative">
                  <p className={`text-white text-sm leading-relaxed ${isPremiumLocked ? 'blur-sm' : ''}`}>
                    {post.content}
                  </p>
                  
                  {isPremiumLocked && (
                    <div className="premium-content-overlay backdrop-blur-md">
                      <Lock className="h-8 w-8 text-primary mb-2 opacity-80" />
                      <p className="text-center text-sm mb-2">$5 to unlock full breakdown</p>
                      <button 
                        onClick={upgradeAccount}
                        className="bg-primary hover:bg-primary-dark text-white text-sm px-4 py-1.5 rounded-full transition"
                      >
                        Unlock Premium
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Tweet for News or Main Tweet */}
        <div className="relative rounded-lg border border-neutral-800 p-3 bg-neutral-900/40 mb-3">
          <div className="flex items-start space-x-3">
            <img 
              src={post.type === 'news' ? post.relatedTweet?.author.avatar : post.author.avatar}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <span className="font-semibold text-white mr-2">
                  {post.type === 'news' ? post.relatedTweet?.author.name : post.author.name}
                </span>
                <span className="text-neutral-400 text-sm">
                  @{post.type === 'news' ? post.relatedTweet?.author.handle : post.author.handle}
                </span>
                <span className="text-neutral-500 text-xs ml-2">1h</span>
              </div>
              
              <div className="relative">
                <p className="text-white text-sm leading-relaxed">
                  {post.type === 'news' ? post.relatedTweet?.content : post.content}
                </p>
              </div>
              
              {renderEngagementMetrics(
                post.type === 'news' 
                  ? post.relatedTweet?.engagementMetrics || post.engagementMetrics
                  : post.engagementMetrics
              )}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-neutral-900/40 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">Virality</span>
              <div className="flex items-center">
                <span className="text-sm font-medium text-primary">{post.viralityScore}%</span>
                {post.viralityChange && (
                  <div className="flex items-center ml-2 text-xs">
                    {post.viralityChange.trend === 'up' && <TrendingUp className="w-3 h-3 text-success mr-1" />}
                    <span className="text-success">
                      +{post.viralityChange.change}% in last {post.viralityChange.timeFrame}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900/40 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">Engagement</span>
              <div className="flex items-center">
                <span className="text-sm font-medium text-secondary">{post.engagementScore}%</span>
                {post.engagementChange && (
                  <div className="flex items-center ml-2 text-xs">
                    {post.engagementChange.trend === 'steady' && <ArrowRight className="w-3 h-3 text-neutral-400 mr-1" />}
                    <span className="text-neutral-400">steady</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tags and impact */}
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <span className="text-xs text-neutral-400 mr-2">Affecting:</span>
            {post.affectedCryptos.map(crypto => (
              <span key={crypto} className={`crypto-tag ${crypto.toLowerCase()}`}>
                {crypto}
              </span>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="text-xs text-neutral-400 mr-2">Sentiment:</span>
            <span className={`sentiment-indicator sentiment-${post.sentiment}`}>
              {post.sentiment === 'positive' ? '+' : post.sentiment === 'negative' ? '-' : '0'}
            </span>
          </div>
        </div>

        {/* Price charts */}
        <div className="mt-4">
          {post.priceImpact.map(impact => (
            <div key={impact.crypto} className="mb-3 last:mb-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <span className={`crypto-tag ${impact.crypto.toLowerCase()}`}>{impact.crypto}</span>
                  <span className="text-white font-medium">${impact.currentPrice.toLocaleString()}</span>
                </div>
                <span className={impact.percentChange24h >= 0 
                  ? 'text-success text-sm' 
                  : 'text-danger text-sm'
                }>
                  {impact.percentChange24h >= 0 ? '+' : ''}{impact.percentChange24h}%
                </span>
              </div>
              <PriceChart 
                data={impact.priceHistory}
                percentChange={impact.percentChange24h}
                authorAvatar={post.type === 'news' ? post.relatedTweet?.author.avatar : post.author.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TrendPost;