
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Central', value: 35 },
  { name: 'North', value: 20 },
  { name: 'South', value: 15 },
  { name: 'East', value: 10 },
  { name: 'West', value: 20 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-2 border rounded-md shadow-sm">
        <p className="font-medium">{`${payload[0].name}`}</p>
        <p className="text-dashboard-teal-600 font-semibold">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieChart = () => {
  return (
    <div className="dashboard-card h-[350px]">
      <h3 className="text-lg font-medium mb-4">Collection Distribution by Branch</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
