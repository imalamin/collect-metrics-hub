
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import OverviewHeader from './overview/OverviewHeader';
import ChartTabs from './overview/ChartTabs';

const AnalyticsOverview: React.FC = () => {
  return (
    <Card className="mb-6 animate-fade-in">
      <CardHeader className="pb-3">
        <OverviewHeader 
          title="Collections Overview"
          description="Compare collections over time periods"
          totalAmount="$1,856,244"
        />
      </CardHeader>
      <CardContent>
        <ChartTabs />
      </CardContent>
    </Card>
  );
};

export default AnalyticsOverview;
