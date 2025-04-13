
import React from 'react';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from '@/components/ui/chart';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ArrowUpRight, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const barData = [
  { name: 'Central', amount: 4800, lastMonth: 4200 },
  { name: 'North', amount: 3600, lastMonth: 3000 },
  { name: 'South', amount: 2400, lastMonth: 2200 },
  { name: 'East', amount: 3100, lastMonth: 2780 },
  { name: 'West', amount: 2200, lastMonth: 1890 },
  { name: 'Metro', amount: 2800, lastMonth: 2390 },
  { name: 'Urban', amount: 3900, lastMonth: 3490 },
];

const pieData = [
  { name: 'Central', value: 35 },
  { name: 'North', value: 20 },
  { name: 'South', value: 15 },
  { name: 'East', value: 10 },
  { name: 'West', value: 20 },
];

const lineData = [
  { date: 'Jan 1', amount: 1200, target: 1000 },
  { date: 'Jan 2', amount: 1800, target: 1000 },
  { date: 'Jan 3', amount: 1600, target: 1000 },
  { date: 'Jan 4', amount: 2200, target: 1000 },
  { date: 'Jan 5', amount: 1900, target: 1000 },
  { date: 'Jan 6', amount: 2800, target: 1000 },
  { date: 'Jan 7', amount: 2100, target: 1000 },
  { date: 'Jan 8', amount: 2500, target: 1000 },
  { date: 'Jan 9', amount: 2200, target: 1000 },
  { date: 'Jan 10', amount: 2600, target: 1000 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const currentAmount = payload[0].value;
    const lastMonthAmount = payload[0].payload.lastMonth;
    const percentChange = ((currentAmount - lastMonthAmount) / lastMonthAmount * 100).toFixed(1);
    const isPositive = currentAmount > lastMonthAmount;

    return (
      <div className="bg-card p-3 border rounded-md shadow-md animate-fade-in">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-dashboard-blue-600 font-semibold">{`Amount: $${currentAmount.toLocaleString()}`}</p>
        <div className={`text-xs mt-1 flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpRight size={12} /> : <ArrowUpRight size={12} className="rotate-180" />}
          <span>{`${isPositive ? '+' : ''}${percentChange}% vs last month`}</span>
        </div>
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-2 border rounded-md shadow-md animate-fade-in">
        <p className="font-medium">{`${payload[0].name}`}</p>
        <p className="text-dashboard-teal-600 font-semibold">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const CustomLineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const amount = payload[0].value;
    const target = payload[1]?.value || 1000;
    const percentOfTarget = ((amount / target) * 100).toFixed(0);

    return (
      <div className="bg-card p-3 border rounded-md shadow-md animate-fade-in">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-dashboard-blue-600 font-semibold">{`Amount: $${amount.toLocaleString()}`}</p>
        <p className="text-xs mt-1 text-dashboard-teal-600">{`${percentOfTarget}% of target`}</p>
      </div>
    );
  }
  return null;
};

interface AnalyticsSectionProps {
  className?: string;
}

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Performance Analytics</h2>
        <Button variant="outline" size="sm" className="gap-2">
          <Activity size={16} />
          Advanced Insights
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="dashboard-card h-[350px] hover:shadow-md transition-all duration-300 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Branch Collection</h3>
            <BarChart3 size={18} className="text-dashboard-blue-600" />
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={barData}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
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
              <Tooltip content={<CustomBarTooltip />} />
              <Bar 
                dataKey="amount" 
                name="Collection Amount" 
                fill="url(#colorAmount)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                animationEasing="ease-in-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="dashboard-card h-[350px] hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: "150ms" }}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Distribution by Branch</h3>
            <TrendingUp size={18} className="text-dashboard-teal-600" />
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {pieData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    stroke="var(--background)"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                formatter={(value) => <span className="text-xs font-medium">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="dashboard-card h-[350px] hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Daily Collection Trend</h3>
            <Activity size={18} className="text-dashboard-blue-600" />
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart
              data={lineData}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <defs>
                <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
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
              <Tooltip content={<CustomLineTooltip />} />
              <Line
                type="monotone"
                dataKey="amount"
                name="Collection"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 3, fill: 'hsl(var(--primary))', strokeWidth: 0 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2, fill: 'white' }}
                animationDuration={2000}
                animationEasing="ease-out"
              />
              <Line
                type="monotone"
                dataKey="target"
                name="Target"
                stroke="#10B981"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                activeDot={false}
                animationDuration={2000}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
