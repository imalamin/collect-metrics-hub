
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Download, Printer, FileText } from 'lucide-react';

const collectionData = [
  { id: 1, provider: 'National Bank Ltd.', branch: 'Central', amount: 5600, date: '2023-04-10', status: 'completed' },
  { id: 2, provider: 'PayQuick Services', branch: 'North', amount: 3200, date: '2023-04-10', status: 'pending' },
  { id: 3, provider: 'Western Transaction', branch: 'South', amount: 2800, date: '2023-04-09', status: 'completed' },
  { id: 4, provider: 'Global Payment Systems', branch: 'East', amount: 4100, date: '2023-04-09', status: 'completed' },
  { id: 5, provider: 'Fast Remit Agency', branch: 'West', amount: 1900, date: '2023-04-08', status: 'failed' },
  { id: 6, provider: 'City Bank Corp', branch: 'Central', amount: 6300, date: '2023-04-08', status: 'completed' },
  { id: 7, provider: 'Metro Financial', branch: 'North', amount: 2700, date: '2023-04-07', status: 'completed' },
  { id: 8, provider: 'Cash Express', branch: 'West', amount: 3500, date: '2023-04-07', status: 'pending' },
];

const CollectionTable = () => {
  return (
    <div className="dashboard-card space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Recent Collections</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search collections..."
              className="pl-8 h-9 w-[200px] md:w-[300px]"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden md:inline">Export</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <Printer className="h-4 w-4" />
            <span className="hidden md:inline">Print</span>
          </Button>
          <Button size="sm" className="h-9 gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Report</span>
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collectionData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.provider}</TableCell>
                <TableCell>{row.branch}</TableCell>
                <TableCell className="text-right">${row.amount.toLocaleString()}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : row.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CollectionTable;
