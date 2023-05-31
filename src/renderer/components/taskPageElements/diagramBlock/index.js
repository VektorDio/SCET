import React from 'react';
import styles from './taskDiagram.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LogarithmicScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      type: 'logarithmic',
      min: 0.1,
      max: 100,
      grid:{
        lineWidth: 2,
        color: 'rgb(255,255,255)',
      },
      ticks: {
        beginAtZero: true,
        color: 'rgb(255,255,255)',
      }
    },
    y: {
      min: -20,
      max: 100,
      grid:{
        lineWidth: 2,
        color: 'rgb(255,255,255)',
      },
      ticks: {
        beginAtZero: true,
        color: 'rgb(255,255,255)',
      },
    }
  }
};



const DiagramBlock = ({children, data}) => {

  const datasets = {
    datasets: [
      {
        showLine: true,
        data: data,
        fill: false,
        borderColor: 'rgb(255,0,0)',
        borderWidth: 6,
        backgroundColor: 'rgba(255,0,53,0.5)',
      },
    ],
  };

  return (
    <div className={styles.diagramContainer}>
      <Scatter options={options} data={datasets} />
      <div className={styles.subContainer}>
        {children}
      </div>
    </div>
  );
};

export default DiagramBlock;
