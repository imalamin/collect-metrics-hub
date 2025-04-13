
import React, { useState } from 'react';
import { CalendarIcon, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';

const FilterPanel = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [branch, setBranch] = useState<string>('all');
  const [providerType, setProviderType] = useState<string>('all');
  
  return (
    <div className="p-4 bg-card border rounded-lg flex flex-wrap gap-4 mb-6">
      <div className="flex items-center gap-2">
        <Filter size={18} className="text-muted-foreground" />
        <span className="font-medium text-sm">Filters:</span>
      </div>
      
      <div className="flex gap-4 flex-wrap">
        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex gap-2 w-[240px]">
              <CalendarIcon className="h-4 w-4" />
              <span>{date ? format(date, 'PPP') : 'Pick a date'}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
        
        {/* Branch Selector */}
        <Select value={branch} onValueChange={setBranch}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Branches</SelectItem>
            <SelectItem value="central">Central Branch</SelectItem>
            <SelectItem value="north">North Region</SelectItem>
            <SelectItem value="south">South Region</SelectItem>
            <SelectItem value="east">East Region</SelectItem>
            <SelectItem value="west">West Region</SelectItem>
          </SelectContent>
        </Select>
        
        {/* Provider Type Filter */}
        <Select value={providerType} onValueChange={setProviderType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Provider Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Providers</SelectItem>
            <SelectItem value="bank">Bank</SelectItem>
            <SelectItem value="thirdparty">Third Party</SelectItem>
            <SelectItem value="agent">Agent</SelectItem>
          </SelectContent>
        </Select>
        
        <Button variant="outline" className="ml-auto">
          Reset Filters
        </Button>
        
        <Button>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
