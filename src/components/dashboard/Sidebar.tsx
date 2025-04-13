
import React from 'react';
import { 
  BarChart3, 
  Home, 
  PieChart, 
  FileText, 
  Users, 
  LayoutDashboard, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Sidebar = () => {
  return (
    <div className="w-[260px] border-r border-border h-screen bg-card flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="h-8 w-8 rounded-full bg-dashboard-blue-700 flex items-center justify-center">
            <BarChart3 size={18} className="text-white" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">CollectHub</h2>
        </div>
        
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
            <a href="/">
              <LayoutDashboard size={18} />
              Dashboard
            </a>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
            <a href="/reports">
              <FileText size={18} />
              Reports
            </a>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
            <a href="/providers">
              <Users size={18} />
              Providers
            </a>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
            <a href="/branches">
              <Home size={18} />
              Branches
            </a>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal" asChild>
            <a href="/analytics">
              <PieChart size={18} />
              Analytics
            </a>
          </Button>
        </div>
      </div>
      
      <div className="mt-auto">
        <Separator />
        <div className="p-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal">
            <Settings size={18} />
            Settings
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal">
            <HelpCircle size={18} />
            Help & Support
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2 font-normal text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut size={18} />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
