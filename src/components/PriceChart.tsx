import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';
import { PricePoint } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface PriceChartProps {
  data: PricePoint[];
  percentChange: number;
  authorAvatar?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, percentChange, authorAvatar }) => {
  const isPositive = percentChange >= 0;
  
  const chartData = {
    labels: data.map(point => point.time),
    datasets: [
      {
        label: 'Price',
        data: data.map(point => point.price),
        borderColor: isPositive ? '#10B981' : '#EF4444',
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          if (isPositive) {
            gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
            gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
          } else {
            gradient.addColorStop(0, 'rgba(239, 68, 68, 0.2)');
            gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
          }
          return gradient;
        },
        borderWidth: 2,
        tension: 0.4,
        pointRadius: (context: any) => {
          const point = data[context.dataIndex];
          return point.isPostTime ? 0 : 0;
        },
        pointHoverRadius: 4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: '#1F2937',
        titleColor: '#F9FAFB',
        bodyColor: '#F3F4F6',
        borderColor: '#374151',
        borderWidth: 1,
        padding: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `$${context.parsed.y.toLocaleString()}`;
          }
        }
      },
      legend: {
        display: false,
      }
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
  };

  // Find the post time point index
  const postTimeIndex = data.findIndex(point => point.isPostTime);

  return (
    <div className="chart-container relative">
      <Line data={chartData} options={options} />
      
      {/* Avatar indicator */}
      {postTimeIndex !== -1 && authorAvatar && (
        <div 
          className="absolute border-2 border-background-card rounded-full overflow-hidden w-6 h-6"
          style={{
            left: `${(postTimeIndex / (data.length - 1)) * 100}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10
          }}
        >
          <img 
            src={authorAvatar} 
            alt="Author" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default PriceChart;