// components/BarChart.js
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, scores, chartName }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'T 점수',
        data: scores,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      //   x: {
      //     categoryPercentage: 1.0,
      //     barPercentage: 0.5, // Adjust this value to change the width of the bars
      //   },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            if (value === 65 || value === 70) {
              return value;
            }
            return '';
          },
          stepSize: 5,
        },
        grid: {
          color: function (context) {
            if (context.tick.value === 70) {
              return 'rgba(255, 99, 132, 1)'; // Color for 70T
            }
            if (context.tick.value === 65) {
              return 'gold';
            }
            return 'rgba(0, 0, 0, 0.1)';
          },
          lineWidth: function (context) {
            if (context.tick.value === 65 || context.tick.value === 70) {
              return 2; // Line width for 65T and 70T
            }
            return 1;
          },
          drawBorder: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: chartName,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
