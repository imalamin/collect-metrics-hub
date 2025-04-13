
import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Jan 1', amount: 1200 },
  { date: 'Jan 2', amount: 1800 },
  { date: 'Jan 3', amount: 1600 },
  { date: 'Jan 4', amount: 2200 },
  { date: 'Jan 5', amount: 1900 },
  { date: 'Jan 6', amount: 2800 },
  { date: 'Jan 7', amount: 2100 },
  { date: 'Jan 8', amount: 2500 },
  { date: 'Jan 9', amount: 2200 },
  { date: 'Jan 10', amount: 2600 },
];

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

const LineChart = () => {
  return (
    <div className="dashboard-card h-[350px]">
      <h3 className="text-lg font-medium mb-4">Daily Collection Trend</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RechartsLineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
          <XAxis dataKey="date" tick={{ fill: 'var(--foreground)' }} />
          <YAxis 
            tick={{ fill: 'var(--foreground)' }}
            tickFormatter={(value) => `$${value/1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            name="Collection Amount"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2, fill: 'white' }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
