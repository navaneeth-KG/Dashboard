import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './style.css'

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, title }) => {
  const chartData = {
    labels: data.map(item => item._id),
    datasets: [
      {
        label: title,
        data: data.map(item => item.count),
        backgroundColor: '#0079FF',
        borderColor: 'white',
        borderWidth: 0,
        

      },
    ],
  };

  return (
    <div className='barchart'>
      <h2>{title}</h2>
      <Bar data={chartData}  />
    </div>
  );
};

export default BarChart;
