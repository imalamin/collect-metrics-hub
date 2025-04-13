
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
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const MetricCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className,
  variant = 'default'
}: MetricCardProps) => {
  const variantClasses = {
    default: 'dashboard-card dashboard-card-hover animate-fade-in',
    primary: 'dashboard-card dashboard-card-hover animate-fade-in bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    secondary: 'dashboard-card dashboard-card-hover animate-fade-in bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    success: 'dashboard-card dashboard-card-hover animate-fade-in bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    warning: 'dashboard-card dashboard-card-hover animate-fade-in bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    danger: 'dashboard-card dashboard-card-hover animate-fade-in bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
  };

  const iconClasses = {
    default: 'text-primary',
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-purple-600 dark:text-purple-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-amber-600 dark:text-amber-400',
    danger: 'text-red-600 dark:text-red-400',
  };

  return (
    <div className={cn(variantClasses[variant], className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="dashboard-stat-label">{title}</p>
          <h3 className="dashboard-stat">{value}</h3>
          {trend && (
            <p className={`text-xs flex items-center mt-1 ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              <span className="text-muted-foreground ml-1">vs. last month</span>
            </p>
          )}
        </div>
        <div className={`p-2 rounded-lg bg-primary/10 animate-pulse-subtle ${iconClasses[variant]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
