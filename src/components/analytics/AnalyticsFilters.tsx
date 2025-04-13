
import React, { useState } from 'react';
import { Calendar, Filter, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';

const AnalyticsFilters = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <Card className="mb-6 animate-fade-in">
      <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={18} className="text-muted-foreground" />
          <span className="font-medium">Filter Analytics:</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full">
          <Select defaultValue="all">
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              <SelectItem value="central">Central</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Transaction Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modes</SelectItem>
              <SelectItem value="otc">OTC (Over the Counter)</SelectItem>
              <SelectItem value="npsb">NPSB</SelectItem>
              <SelectItem value="rtgs">RTGS</SelectItem>
              <SelectItem value="piapps">PI Apps</SelectItem>
            </SelectContent>
          </Select>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start text-left font-normal bg-background">
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          
          <Button className="gap-2">
            <RefreshCw size={16} />
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsFilters;
