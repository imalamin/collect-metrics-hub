
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MonthlyChart from './MonthlyChart';
import YearlyChart from './YearlyChart';
import ChartLegend from './ChartLegend';

// Chart data
const monthlyData = [
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

const ChartTabs: React.FC = () => {
  return (
    <Tabs defaultValue="monthly" className="mt-2">
      <div className="flex items-center justify-between mb-4">
        <TabsList>
          <TabsTrigger value="monthly" className="text-xs sm:text-sm">Monthly</TabsTrigger>
          <TabsTrigger value="yearly" className="text-xs sm:text-sm">Yearly</TabsTrigger>
          <TabsTrigger value="weekly" className="text-xs sm:text-sm">Weekly</TabsTrigger>
        </TabsList>
        
        <ChartLegend 
          items={[
            { color: "bg-primary", label: "Collections" },
            { color: "bg-emerald-500", label: "Target" }
          ]} 
        />
      </div>
      
      <TabsContent value="monthly" className="mt-0">
        <MonthlyChart data={monthlyData} />
      </TabsContent>
      
      <TabsContent value="yearly" className="mt-0">
        <YearlyChart data={yearlyData} />
      </TabsContent>
      
      <TabsContent value="weekly" className="mt-0">
        <div className="h-[300px] w-full flex items-center justify-center">
          <p className="text-muted-foreground">Weekly data coming soon</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ChartTabs;
