
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, TrendingUp, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Jan', amount: 4000, target: 3000 },
  { name: 'Feb', amount: 3000, target: 3000 },
  { name: 'Mar', amount: 2000, target: 3000 },
  { name: 'Apr', amount: 2780, target: 3000 },
  { name: 'May', amount: 1890, target: 3000 },
  { name: 'Jun', amount: 2390, target: 3000 },
  { name: 'Jul', amount: 3490, target: 3000 },
  { name: 'Aug', amount: 4290, target: 3000 },
  { name: 'Sep', amount: 5200, target: 3000 },
  { name: 'Oct', amount: 5800, target: 3000 },
  { name: 'Nov', amount: 6100, target: 3000 },
  { name: 'Dec', amount: 6500, target: 3000 },
];

const yearlyData = [
  { name: '2019', amount: 31000 },
  { name: '2020', amount: 38000 },
  { name: '2021', amount: 42000 },
  { name: '2022', amount: 51000 },
  { name: '2023', amount: 63000 },
  { name: '2024', amount: 76000 },
];

const AnalyticsOverview = () => {
  return (
    <Card className="mb-6 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Collections Overview</CardTitle>
            <CardDescription>Compare collections over time periods</CardDescription>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-end">
              <div className="text-sm text-muted-foreground">Total Collections</div>
              <div className="text-2xl font-bold">$1,856,244</div>
            </div>
            <div className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 p-1.5 rounded-full">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="mt-2">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="monthly" className="text-xs sm:text-sm">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="text-xs sm:text-sm">Yearly</TabsTrigger>
              <TabsTrigger value="weekly" className="text-xs sm:text-sm">Weekly</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-xs text-muted-foreground">Collections</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-muted-foreground">Target</span>
              </div>
            </div>
          </div>
          
          <TabsContent value="monthly" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
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
                    labelFormatter={(label) => `Month: ${label}`}
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
                    fill="url(#colorAmount)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(142, 71%, 45%)" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="yearly" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={yearlyData}
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
          </TabsContent>
          
          <TabsContent value="weekly" className="mt-0">
            <div className="h-[300px] w-full flex items-center justify-center">
              <p className="text-muted-foreground">Weekly data coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsOverview;
