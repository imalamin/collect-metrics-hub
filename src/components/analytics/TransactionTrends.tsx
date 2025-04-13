
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Banknote, CreditCard, TrendingUp, SmartphoneNfc, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const transactionTrends = [
  {
    id: 'otc',
    name: 'OTC',
    full: 'Over the Counter',
    current: 367890,
    previous: 359114,
    color: 'bg-emerald-600',
    icon: <Banknote className="h-5 w-5 text-emerald-600" />,
  },
  {
    id: 'npsb',
    name: 'NPSB',
    full: 'National Payment Gateway',
    current: 245600,
    previous: 227197,
    color: 'bg-blue-600',
    icon: <CreditCard className="h-5 w-5 text-blue-600" />,
  },
  {
    id: 'rtgs',
    name: 'RTGS',
    full: 'Real Time Gross Settlement',
    current: 156400,
    previous: 139022,
    color: 'bg-violet-600',
    icon: <TrendingUp className="h-5 w-5 text-violet-600" />,
  },
  {
    id: 'piapps',
    name: 'PI Apps',
    full: 'Payment Interface Apps',
    current: 98760,
    previous: 74424,
    color: 'bg-orange-600',
    icon: <SmartphoneNfc className="h-5 w-5 text-orange-600" />,
  },
];

const TransactionTrends = () => {
  return (
    <Card className="h-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Transaction Trends</CardTitle>
        <CardDescription>Month-over-month performance by mode</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {transactionTrends.map(trend => {
          const percentChange = ((trend.current - trend.previous) / trend.previous * 100).toFixed(1);
          const isPositive = Number(percentChange) > 0;
          
          return (
            <div key={trend.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-md bg-${trend.color.split('-')[1]}-100 dark:bg-${trend.color.split('-')[1]}-900/20`}>
                    {trend.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <div className="font-medium">{trend.name}</div>
                      <div className="text-xs text-muted-foreground">({trend.full})</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${trend.current.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`flex items-center ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                    {isPositive ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <ArrowDownRight size={16} />
                    )}
                    <span className="font-medium">{isPositive ? '+' : ''}{percentChange}%</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Previous: ${trend.previous.toLocaleString()}</span>
                  <span>Current: ${trend.current.toLocaleString()}</span>
                </div>
                <Progress 
                  value={isPositive ? 100 : (trend.current / trend.previous) * 100} 
                  className="h-2" 
                  style={{
                    backgroundColor: `hsl(var(--muted))`,
                    background: `hsl(var(--muted))`
                  }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TransactionTrends;
