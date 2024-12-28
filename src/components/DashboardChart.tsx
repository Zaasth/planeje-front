import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Resumo dos último 6 meses',
    },
  },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

const data = {
  labels,
  datasets: [
    {
      label: 'Entrada',
      data: [5000, 5200, 5400, 5300, 5600, 5800],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
    },
    {
      label: 'Saída',
      data: [3200, 3400, 3100, 3600, 3300, 3500],
      borderColor: 'rgb(239, 68, 68)',
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
    },
  ],
};

const DashboardChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line options={options} data={data} />
    </div>
  );
};

export default DashboardChart;