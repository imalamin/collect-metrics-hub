
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, FileText } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="flex gap-2 mb-6">
      <Button className="gap-2">
        <PlusCircle size={18} />
        Add New Provider
      </Button>
      
      <Button variant="outline" className="gap-2">
        <FileText size={18} />
        Detailed Report
      </Button>
      
      <Button variant="outline" className="gap-2">
        <Download size={18} />
        Export Data
      </Button>
    </div>
  );
};

export default QuickActions;
