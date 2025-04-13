
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { BarChart3, TrendingUp, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const branchData = [
  { name: 'Central', amount: 16400 },
  { name: 'North', amount: 12800 },
  { name: 'South', amount: 8900 },
  { name: 'East', amount: 10600 },
  { name: 'West', amount: 9200 },
  { name: 'Metro', amount: 14500 },
];

const modeData = [
  { name: 'OTC', value: 42 },
  { name: 'NPSB', value: 28 },
  { name: 'RTGS', value: 18 },
  { name: 'PI Apps', value: 12 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border rounded-md shadow-md">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-primary font-semibold">
          {`Amount: $${payload[0].value.toLocaleString()}`}
        </p>
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border rounded-md shadow-md">
        <p className="font-medium">{`${payload[0].name}`}</p>
        <p className="text-primary font-semibold">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const AnalyticsCharts = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Performance Analysis</CardTitle>
            <CardDescription>Branch performance and transaction modes</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw size={14} />
            Refresh Data
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="branches" className="mt-2">
          <TabsList className="mb-4">
            <TabsTrigger value="branches" className="text-xs sm:text-sm">Branch Performance</TabsTrigger>
            <TabsTrigger value="modes" className="text-xs sm:text-sm">Transaction Modes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="branches" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={branchData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
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
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="amount" 
                    name="Collection Amount"
                    radius={[4, 4, 0, 0]}
                  >
                    {branchData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="modes" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={modeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {modeData.map((entry, index) => (
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
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    wrapperStyle={{ paddingLeft: "20px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCharts;
