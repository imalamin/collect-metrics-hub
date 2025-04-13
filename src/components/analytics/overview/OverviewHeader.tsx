
import React from 'react';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

interface OverviewHeaderProps {
  title: string;
  description: string;
  totalAmount: string;
}

const OverviewHeader: React.FC<OverviewHeaderProps> = ({ 
  title, 
  description, 
  totalAmount 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-end">
          <div className="text-sm text-muted-foreground">Total Collections</div>
          <div className="text-2xl font-bold">{totalAmount}</div>
        </div>
        <div className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 p-1.5 rounded-full">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
