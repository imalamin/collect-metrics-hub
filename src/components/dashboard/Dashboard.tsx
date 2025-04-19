
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import FilterPanel from './FilterPanel';
import CollectionTable from './CollectionTable';
import QuickActions from './QuickActions';
import AnalyticsSection from './AnalyticsSection';
import TransactionModes from './TransactionModes';
import { Users, Database, Building2, TrendingUp, Award, Banknote, CreditCard } from 'lucide-react';
import useTotalProvidersApi from './useTotalProvidersApi';
import useTotalCollectionApi from './useTotalCollectionApi';

const Dashboard = () => {
  const totalProviders = useTotalProvidersApi();
  const totalCollection = useTotalCollectionApi();
  
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-6 animate-fade-in">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            <MetricCard 
              title="Total Providers"
              value={totalProviders !== null ? totalProviders.toString() : "Loading..."}
              icon={<Users size={24} className="text-primary" />}
              trend={{ value: 4.5, isPositive: true }}
              variant="primary"
            />
            
            <MetricCard 
              title="Total Collection" 
              value={totalCollection !== null ? `$${totalCollection.toLocaleString()}` : "Loading..."}
              icon={<Database size={24} className="text-primary" />} 
              trend={{ value: 12.3, isPositive: true }}
              variant="secondary"
            />
            
            <MetricCard 
              title="Service Provided Branches" 
              value="28" 
              icon={<Building2 size={24} className="text-primary" />} 
              trend={{ value: 2.1, isPositive: true }}
              variant="success"
            />
            
            <MetricCard 
              title="Today's Collection" 
              value="$42,580" 
              icon={<TrendingUp size={24} className="text-primary" />} 
              trend={{ value: 8.4, isPositive: false }}
              variant="danger"
            />
            
            <MetricCard 
              title="Top Branch" 
              value="Central" 
              icon={<Award size={24} className="text-primary" />} 
              trend={{ value: 5.7, isPositive: true }}
              variant="warning"
            />
          </div>
          
          <FilterPanel />
          
          <QuickActions />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <AnalyticsSection />
            </div>
            <div>
              <TransactionModes />
            </div>
          </div>
          
          <CollectionTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
