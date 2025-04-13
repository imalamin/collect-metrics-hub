
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartDataPoint {
  name: string;
  amount: number;
}

interface YearlyChartProps {
  data: ChartDataPoint[];
}

const YearlyChart: React.FC<YearlyChartProps> = ({ data }) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorYearly" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'var(--foreground)' }}
            tickLine={false}
            axisLine={{ stroke: 'var(--border)' }}
          />
          <YAxis 
            tick={{ fill: 'var(--foreground)' }}
            tickFormatter={(value) => `$${value/1000}k`}
            tickLine={false}
            axisLine={{ stroke: 'var(--border)' }}
          />
          <Tooltip 
            formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Amount']}
            labelFormatter={(label) => `Year: ${label}`}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              borderColor: 'hsl(var(--border))',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="amount" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorYearly)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearlyChart;
