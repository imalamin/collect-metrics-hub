
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, FileText, Layers, Filter, BarChart4 } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
      <Button className="gap-2 bg-dashboard-blue-600 hover:bg-dashboard-blue-700 transition-colors">
        <PlusCircle size={18} />
        Add New Provider
      </Button>
      
      <Button variant="outline" className="gap-2 border-dashboard-blue-200 hover:bg-dashboard-blue-50 dark:hover:bg-dashboard-blue-900/20 transition-colors">
        <FileText size={18} />
        Detailed Report
      </Button>
      
      <Button variant="outline" className="gap-2 border-dashboard-blue-200 hover:bg-dashboard-blue-50 dark:hover:bg-dashboard-blue-900/20 transition-colors">
        <Download size={18} />
        Export Data
      </Button>
      
      <Button variant="outline" className="gap-2 border-dashboard-teal-200 text-dashboard-teal-600 hover:bg-dashboard-teal-50 dark:text-dashboard-teal-400 dark:hover:bg-dashboard-teal-900/20 transition-colors ml-auto">
        <BarChart4 size={18} />
        Performance Metrics
      </Button>
      
      <Button variant="outline" className="gap-2 border-dashboard-teal-200 text-dashboard-teal-600 hover:bg-dashboard-teal-50 dark:text-dashboard-teal-400 dark:hover:bg-dashboard-teal-900/20 transition-colors">
        <Layers size={18} />
        Data Comparison
      </Button>
      
      <Button variant="outline" className="gap-2 border-dashboard-teal-200 text-dashboard-teal-600 hover:bg-dashboard-teal-50 dark:text-dashboard-teal-400 dark:hover:bg-dashboard-teal-900/20 transition-colors">
        <Filter size={18} />
        Advanced Filters
      </Button>
    </div>
  );
};

export default QuickActions;
