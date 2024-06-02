import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './style.css';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => `Severity ${item._id}`),
    datasets: [
      {
        data: data.map(item => item.count),
        backgroundColor: ['#23049D','#FF79CD', '#FFDF6B'],
        borderColor: ['#23049D','#FF79CD', '#FFDF6B'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="severity">
      <h2>Severity Distribution</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
