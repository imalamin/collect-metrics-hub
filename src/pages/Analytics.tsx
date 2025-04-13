
import React from 'react';
import { ThemeProvider } from '@/components/dashboard/ThemeProvider';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';

const Analytics = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <AnalyticsDashboard />
    </ThemeProvider>
  );
};

export default Analytics;
