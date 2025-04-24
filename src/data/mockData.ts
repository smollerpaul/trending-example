import { TrendPost } from '../types';

export const mockTrendData: TrendPost[] = [
  {
    id: '1',
    type: 'news',
    title: 'Signal #1',
    content: "Major regulatory development in the US cryptocurrency market signals a significant shift in institutional adoption. This breakthrough decision marks a pivotal moment for digital asset integration into traditional finance.",
    timestamp: '2023-04-25T07:15:00Z',
    source: 'Bloomberg',
    author: {
      name: 'Bloomberg',
      avatar: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
    },
    relatedTweet: {
      author: {
        name: 'Gary Gensler',
        handle: 'GaryGensler',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
      },
      content: "Today marks a significant milestone in our approach to digital asset products. We're maintaining consistency with previous regulatory frameworks while adapting to market evolution.",
      engagementMetrics: {
        likes: 52400,
        retweets: 32400,
        replies: 12500,
        views: 2200000
      }
    },
    sentiment: 'positive',
    viralityScore: 95,
    viralityChange: {
      current: 95,
      change: 15,
      trend: 'up',
      timeFrame: '30m'
    },
    engagementScore: 89,
    engagementChange: {
      current: 89,
      change: 0,
      trend: 'steady',
      timeFrame: '30m'
    },
    isPremium: true,
    isHottest: true,
    affectedCryptos: ['BTC', 'ETH'],
    priceImpact: [
      {
        crypto: 'BTC',
        currentPrice: 88321,
        percentChange24h: 3.65,
        priceHistory: [
          { time: '-3h', price: 86200 },
          { time: '-2h', price: 86500 },
          { time: '-1h', price: 86700 },
          { time: '0h', price: 87100, isPostTime: true },
          { time: '+1h', price: 87300 },
          { time: '+2h', price: 87800 },
          { time: '+3h', price: 88321 }
        ]
      }
    ],
    engagementMetrics: {
      likes: 22400,
      retweets: 22400,
      replies: 22400,
      views: 234000
    }
  },
  {
    id: '2',
    type: 'news',
    title: 'Signal #2',
    content: "Major cryptocurrency exchange announces strategic market stability initiative with substantial capital commitment. The program aims to provide support for qualifying projects in the ecosystem.",
    timestamp: '2023-04-22T14:20:00Z',
    source: 'Reuters',
    author: {
      name: 'Reuters',
      avatar: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
    },
    relatedTweet: {
      author: {
        name: 'CZ 🔶 Binance',
        handle: 'cz_binance',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
      },
      content: "Announcing a new initiative to support ecosystem projects. Details coming soon. Qualified projects can reach out to our team for consideration.",
      engagementMetrics: {
        likes: 42400,
        retweets: 18400,
        replies: 5500,
        views: 1500000
      }
    },
    sentiment: 'positive',
    viralityScore: 88,
    viralityChange: {
      current: 88,
      change: 10,
      trend: 'up',
      timeFrame: '30m'
    },
    engagementScore: 85,
    engagementChange: {
      current: 85,
      change: 0,
      trend: 'steady',
      timeFrame: '30m'
    },
    isPremium: true,
    isHottest: false,
    affectedCryptos: ['BTC', 'ETH', 'USDT'],
    priceImpact: [
      {
        crypto: 'BTC',
        currentPrice: 87500,
        percentChange24h: 2.5,
        priceHistory: [
          { time: '-3h', price: 85500 },
          { time: '-2h', price: 86000 },
          { time: '-1h', price: 86500 },
          { time: '0h', price: 87000, isPostTime: true },
          { time: '+1h', price: 87200 },
          { time: '+2h', price: 87400 },
          { time: '+3h', price: 87500 }
        ]
      }
    ],
    engagementMetrics: {
      likes: 15400,
      retweets: 8200,
      replies: 3100,
      views: 195000
    }
  },
  {
    id: '3',
    type: 'tweet',
    title: 'Signal #3',
    content: "Significant treasury operations update: Our BTC holdings have generated substantial returns for shareholders this month. Strategy continues to prove effective.",
    timestamp: '2023-04-23T03:45:00Z',
    author: {
      name: 'Michael Saylor',
      handle: 'saylor',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=2'
    },
    sentiment: 'positive',
    viralityScore: 92,
    viralityChange: {
      current: 92,
      change: 15,
      trend: 'up',
      timeFrame: '30m'
    },
    engagementScore: 89,
    engagementChange: {
      current: 89,
      change: 0,
      trend: 'steady',
      timeFrame: '30m'
    },
    isPremium: false,
    isHottest: true,
    affectedCryptos: ['BTC'],
    priceImpact: [
      {
        crypto: 'BTC',
        currentPrice: 88321,
        percentChange24h: 4.85,
        priceHistory: [
          { time: '-3h', price: 84500 },
          { time: '-2h', price: 85200 },
          { time: '-1h', price: 85900 },
          { time: '0h', price: 86400, isPostTime: true },
          { time: '+1h', price: 87200 },
          { time: '+2h', price: 87800 },
          { time: '+3h', price: 88321 }
        ]
      }
    ],
    engagementMetrics: {
      likes: 22400,
      retweets: 22400,
      replies: 22400,
      views: 234000
    }
  }
];