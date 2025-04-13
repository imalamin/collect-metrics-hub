
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const metricData = [
  {
    id: 1,
    branch: 'Central',
    total: 587620,
    otc: 247580,
    npsb: 168540,
    rtgs: 99742,
    piapps: 71758,
    trend: 8.7,
  },
  {
    id: 2,
    branch: 'North',
    total: 432180,
    otc: 182454,
    npsb: 124250,
    rtgs: 76850,
    piapps: 48626,
    trend: 5.2,
  },
  {
    id: 3,
    branch: 'South',
    total: 378940,
    otc: 158870,
    npsb: 105780,
    rtgs: 69580,
    piapps: 44710,
    trend: -2.3,
  },
  {
    id: 4,
    branch: 'East',
    total: 325460,
    otc: 136876,
    npsb: 93420,
    rtgs: 58170,
    piapps: 36994,
    trend: 3.8,
  },
  {
    id: 5,
    branch: 'West',
    total: 297880,
    otc: 125210,
    npsb: 85710,
    rtgs: 53280,
    piapps: 33680,
    trend: 1.9,
  },
  {
    id: 6,
    branch: 'Metro',
    total: 398740,
    otc: 167420,
    npsb: 112570,
    rtgs: 72350,
    piapps: 46400,
    trend: 9.5,
  },
];

const AnalyticsMetrics = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl">Detailed Metrics</CardTitle>
        <CardDescription>Comprehensive breakdown by branch and transaction mode</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Branch</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">OTC</TableHead>
              <TableHead className="text-right">NPSB</TableHead>
              <TableHead className="text-right">RTGS</TableHead>
              <TableHead className="text-right">PI Apps</TableHead>
              <TableHead className="text-right">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metricData.map((metric) => (
              <TableRow key={metric.id}>
                <TableCell className="font-medium">{metric.branch}</TableCell>
                <TableCell className="text-right font-semibold">
                  ${metric.total.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">${metric.otc.toLocaleString()}</TableCell>
                <TableCell className="text-right">${metric.npsb.toLocaleString()}</TableCell>
                <TableCell className="text-right">${metric.rtgs.toLocaleString()}</TableCell>
                <TableCell className="text-right">${metric.piapps.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {metric.trend > 0 ? (
                      <>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">
                          <ArrowUpRight size={14} className="mr-1" />
                          {metric.trend}%
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-0">
                          <ArrowDownRight size={14} className="mr-1" />
                          {Math.abs(metric.trend)}%
                        </Badge>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AnalyticsMetrics;
