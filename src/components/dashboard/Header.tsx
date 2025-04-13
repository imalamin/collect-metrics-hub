
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-dashboard-blue-900 dark:text-dashboard-blue-100">
            Sales Proceed Portal
          </h1>
        </div>
        
        <div className="relative flex w-96">
          <Input 
            placeholder="Search..." 
            className="w-full pl-10 rounded-md focus-visible:ring-dashboard-teal-500"
          />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
          
          <ModeToggle />
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-dashboard-blue-100 dark:bg-dashboard-blue-800">
              <User size={18} className="text-dashboard-blue-800 dark:text-dashboard-blue-100" />
            </Button>
            <div className="hidden md:block">
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-muted-foreground">admin@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
