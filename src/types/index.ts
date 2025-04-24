export type CryptoType = 'BTC' | 'ETH' | 'USDT' | 'XRP';
export type Sentiment = 'positive' | 'negative' | 'neutral';
export type SignalType = 'tweet' | 'news';

export interface PricePoint {
  time: string;
  price: number;
  isPostTime?: boolean;
}

export interface EngagementMetrics {
  likes: number;
  retweets: number;
  replies: number;
  views: number;
}

export interface MetricChange {
  current: number;
  change: number;
  trend: 'up' | 'down' | 'steady';
  timeFrame: string;
}

export interface Author {
  name: string;
  handle?: string;
  avatar: string;
}

export interface Tweet {
  author: Author;
  content: string;
  engagementMetrics: EngagementMetrics;
}

export interface TrendPost {
  id: string;
  type: SignalType;
  title: string;
  content: string;
  timestamp: string;
  source?: string;
  author: Author;
  relatedTweet?: Tweet;
  sentiment: Sentiment;
  viralityScore: number;
  viralityChange?: MetricChange;
  engagementScore: number;
  engagementChange?: MetricChange;
  isPremium: boolean;
  isHottest: boolean;
  affectedCryptos: CryptoType[];
  priceImpact: {
    crypto: CryptoType;
    currentPrice: number;
    priceHistory: PricePoint[];
    percentChange24h: number;
  }[];
  engagementMetrics: EngagementMetrics;
}