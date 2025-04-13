
import React from 'react';
import { ThemeProvider } from '@/components/dashboard/ThemeProvider';
import Dashboard from '@/components/dashboard/Dashboard';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Dashboard />
    </ThemeProvider>
  );
};

export default Index;
