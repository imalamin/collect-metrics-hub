
import React from 'react';

interface ChartLegendProps {
  items: {
    color: string;
    label: string;
  }[];
}

const ChartLegend: React.FC<ChartLegendProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ChartLegend;
