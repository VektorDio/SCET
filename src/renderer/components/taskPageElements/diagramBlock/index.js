import React from 'react';
import styles from './taskDiagram.module.css';
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
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid:{
        color: 'rgb(255,255,255)',
      },
      ticks: {
        color: 'rgb(255,255,255)',
      }
    },
    y: {
      grid:{
        color: 'rgb(255,255,255)',
      },
      ticks: {
        color: 'rgb(255,255,255)',
      }
    }
  }
};

const labels = [0,1,2,3,4,5];

const data = {
  labels,
  datasets: [
    {
      data: [0,0,0,4,4,4],
      fill: false,
      borderColor: 'rgb(255,0,0)',
      backgroundColor: 'rgba(255,0,53,0.5)',
    },
  ],
};

const DiagramBlock = ({data}) => {
  return (
    <div className={styles.diagramContainer}>
      <Line options={options} data={data} />
    </div>
  );
};

export default DiagramBlock;
