import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './style.css'

const RechartsRadarChart = ({ data, title }) => {
  return (
    <div className='line-chart'>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="_id" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar
            name="Count"
            dataKey="count"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.9}
            
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RechartsRadarChart;
