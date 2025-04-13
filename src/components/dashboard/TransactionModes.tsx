
import React from 'react';
import { 
  Building, 
  CreditCard, 
  SmartphoneNfc, 
  Banknote, 
  BarChart3, 
  TrendingUp,
  MoveRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface TransactionMode {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  trend: number;
  icon: React.ReactNode;
  color: string;
}

const transactionModes: TransactionMode[] = [
  {
    id: 'otc',
    name: 'OTC (Over the Counter)',
    amount: 367890,
    percentage: 42,
    trend: -2.5,
    icon: <Banknote className="h-5 w-5 text-emerald-600" />,
    color: 'bg-emerald-600'
  },
  {
    id: 'npsb',
    name: 'NPSB',
    amount: 245600,
    percentage: 28,
    trend: 8.1,
    icon: <CreditCard className="h-5 w-5 text-blue-600" />,
    color: 'bg-blue-600'
  },
  {
    id: 'rtgs',
    name: 'RTGS',
    amount: 156400,
    percentage: 18,
    trend: 12.5,
    icon: <TrendingUp className="h-5 w-5 text-violet-600" />,
    color: 'bg-violet-600'
  },
  {
    id: 'piapps',
    name: 'PI Apps',
    amount: 98760,
    percentage: 12,
    trend: 32.7,
    icon: <SmartphoneNfc className="h-5 w-5 text-orange-600" />,
    color: 'bg-orange-600'
  }
];

const TransactionModes = ({ className }: { className?: string }) => {
  return (
    <Card className={`animate-fade-in ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-xl font-semibold">Transaction Modes</CardTitle>
          <CardDescription>Collection distribution by transaction method</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5">
          <BarChart3 className="h-4 w-4" />
          <span className="hidden sm:inline">View Report</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactionModes.map((mode) => (
          <div key={mode.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md bg-${mode.color.split('-')[1]}-100 dark:bg-${mode.color.split('-')[1]}-900/20`}>
                  {mode.icon}
                </div>
                <div>
                  <div className="font-medium">{mode.name}</div>
                  <div className="text-sm text-muted-foreground">
                    ${mode.amount.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className={`text-xs font-medium mr-2 ${
                  mode.trend > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {mode.trend > 0 ? '+' : ''}{mode.trend}%
                </span>
                <span className="font-medium">{mode.percentage}%</span>
              </div>
            </div>
            <Progress className="h-2" value={mode.percentage} 
              style={{backgroundColor: `hsl(var(--muted))`, 
                     background: `hsl(var(--muted))`,
                     '--progress-foreground': `var(--${mode.color.split('-')[1]})` }} />
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4">
          View All Transaction Details
          <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransactionModes;
