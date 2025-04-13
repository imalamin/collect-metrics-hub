
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import FilterPanel from './FilterPanel';
import CollectionTable from './CollectionTable';
import QuickActions from './QuickActions';
import AnalyticsSection from './AnalyticsSection';
import { Users, Database, Building2, TrendingUp, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-6 animate-fade-in">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <MetricCard 
              title="Total Providers" 
              value="157" 
              icon={<Users size={24} className="text-primary" />} 
              trend={{ value: 4.5, isPositive: true }}
            />
            
            <MetricCard 
              title="Total Collection" 
              value="$1,856,244" 
              icon={<Database size={24} className="text-primary" />} 
              trend={{ value: 12.3, isPositive: true }}
            />
            
            <MetricCard 
              title="Branches with Service" 
              value="28" 
              icon={<Building2 size={24} className="text-primary" />} 
              trend={{ value: 2.1, isPositive: true }}
            />
            
            <MetricCard 
              title="Today's Collection" 
              value="$42,580" 
              icon={<TrendingUp size={24} className="text-primary" />} 
              trend={{ value: 8.4, isPositive: false }}
            />
            
            <MetricCard 
              title="Top Branch" 
              value="Central" 
              icon={<Award size={24} className="text-primary" />} 
              trend={{ value: 5.7, isPositive: true }}
            />
          </div>
          
          <FilterPanel />
          
          <QuickActions />
          
          <AnalyticsSection className="mb-6" />
          
          <CollectionTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
