import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, Title, Tooltip, Legend);
import './style.css'

const DoughnutChart = ({data}) => {
  // Extracting labels and data from the category distribution
  const labels = data.map(item => item._id);
  const count = data.map(item => item.count);

  // Doughnut chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Category Distribution',
        data: count,
        backgroundColor: [
          '#10439F',
          '#874CCC',
          '#C65BCF',
          
          '#F27BBD',
          '#008DDA',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='doughnut'>
      <h2 style={{marginBottom:'10px'}}>Categories</h2>
      <Doughnut data={chartData}  />
    </div>
  );
};

export default DoughnutChart;
