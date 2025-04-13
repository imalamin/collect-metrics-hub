
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Central', amount: 4000 },
  { name: 'North', amount: 3000 },
  { name: 'South', amount: 2000 },
  { name: 'East', amount: 2780 },
  { name: 'West', amount: 1890 },
  { name: 'Metro', amount: 2390 },
  { name: 'Urban', amount: 3490 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border rounded-md shadow-sm">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-dashboard-blue-600 font-semibold">{`Amount: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const BarChart = () => {
  return (
    <div className="dashboard-card h-[350px]">
      <h3 className="text-lg font-medium mb-4">Branch-wise Collection Amount</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RechartsBarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'var(--foreground)' }}
          />
          <YAxis 
            tick={{ fill: 'var(--foreground)' }}
            tickFormatter={(value) => `$${value/1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar 
            dataKey="amount" 
            name="Collection Amount" 
            fill="hsl(var(--primary))" 
            radius={[4, 4, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
