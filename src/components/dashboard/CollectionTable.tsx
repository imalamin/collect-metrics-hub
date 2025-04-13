
import React, { useState } from 'react';
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
import { Search, Download, Printer, FileText, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Collection {
  id: number;
  provider: string;
  branch: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  mode: 'OTC' | 'NPSB' | 'RTGS' | 'PI Apps';
}

const collectionData: Collection[] = [
  { id: 1, provider: 'National Bank Ltd.', branch: 'Central', amount: 5600, date: '2023-04-10', status: 'completed', mode: 'OTC' },
  { id: 2, provider: 'PayQuick Services', branch: 'North', amount: 3200, date: '2023-04-10', status: 'pending', mode: 'NPSB' },
  { id: 3, provider: 'Western Transaction', branch: 'South', amount: 2800, date: '2023-04-09', status: 'completed', mode: 'RTGS' },
  { id: 4, provider: 'Global Payment Systems', branch: 'East', amount: 4100, date: '2023-04-09', status: 'completed', mode: 'PI Apps' },
  { id: 5, provider: 'Fast Remit Agency', branch: 'West', amount: 1900, date: '2023-04-08', status: 'failed', mode: 'OTC' },
  { id: 6, provider: 'City Bank Corp', branch: 'Central', amount: 6300, date: '2023-04-08', status: 'completed', mode: 'NPSB' },
  { id: 7, provider: 'Metro Financial', branch: 'North', amount: 2700, date: '2023-04-07', status: 'completed', mode: 'RTGS' },
  { id: 8, provider: 'Cash Express', branch: 'West', amount: 3500, date: '2023-04-07', status: 'pending', mode: 'PI Apps' },
];

const getModeColor = (mode: Collection['mode']) => {
  switch (mode) {
    case 'OTC':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400';
    case 'NPSB':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    case 'RTGS':
      return 'bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-400';
    case 'PI Apps':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

const getStatusColor = (status: Collection['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'failed':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

const CollectionTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = collectionData.filter(item => 
    item.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.mode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-card space-y-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-medium">Recent Collections</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative flex-1 min-w-[200px] sm:min-w-[240px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search collections..." 
              className="pl-9 h-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
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
      </div>
      
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Mode</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <TableRow key={row.id} className="animate-fade-in">
                  <TableCell className="font-medium">{row.provider}</TableCell>
                  <TableCell>{row.branch}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${getModeColor(row.mode)}`}>
                      {row.mode}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">${row.amount.toLocaleString()}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(row.status)}`}>
                      {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CollectionTable;
