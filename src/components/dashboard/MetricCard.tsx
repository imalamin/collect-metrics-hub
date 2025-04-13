
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard = ({ title, value, icon, trend, className }: MetricCardProps) => {
  return (
    <div className={cn('dashboard-card dashboard-card-hover animate-fade-in', className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="dashboard-stat-label">{title}</p>
          <h3 className="dashboard-stat">{value}</h3>
          {trend && (
            <p className={`text-xs flex items-center mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              <span className="text-muted-foreground ml-1">vs. last month</span>
            </p>
          )}
        </div>
        <div className="p-2 rounded-lg bg-primary/10 animate-pulse-subtle">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
