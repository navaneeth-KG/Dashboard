import React from 'react';
import { Line } from 'react-chartjs-2';
import './style.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = ({ data }) => {
  const chartData = {
    labels: data.map(item => item._id),
    datasets: [{
      label: 'Alerts by Source IP',
      data: data.map(item => item.count),
      fill: false,
      backgroundColor: 'blue',
      borderColor: '#FC92E3',
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
      }
    }
  };

  return (
    <div className='linechart'>
      <h2>Alerts by Source IP</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChartComponent;
