
import React from 'react';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import AnalyticsOverview from './AnalyticsOverview';
import AnalyticsCharts from './AnalyticsCharts';
import AnalyticsFilters from './AnalyticsFilters';
import AnalyticsMetrics from './AnalyticsMetrics';
import TransactionTrends from './TransactionTrends';

const AnalyticsDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/20">
          <h1 className="text-2xl font-bold mb-6 animate-fade-in">Analytics Dashboard</h1>
          
          <AnalyticsFilters />
          
          <AnalyticsOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <AnalyticsCharts />
            </div>
            <div>
              <TransactionTrends />
            </div>
          </div>
          
          <AnalyticsMetrics />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
