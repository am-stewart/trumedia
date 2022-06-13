import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { PlayerContext } from '../Context';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ScoringGraph() {
  const { player } = useContext(PlayerContext);
  console.log('player from graph', player)

  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Scoring',
          font: {
            size: '16'
          }
        },
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestMax: 15,
          title: {
            color: 'red',
            display: true,
            text: 'Yds/Att'
          }
        },
        x: {
          title: {
            color: 'red',
            display: true,
            text: 'Week'
          }
        }
      }
    };

    const data = {
      labels: player.map(item => (item.week)),
      datasets: [
        {
          label: 'Rushing TDs',
          data: player.map(item => item.RshTD),
          borderColor: 'red',
          backgroundColor: 'red',
        },
        {
          label: 'Passing TDs',
          data: player.map(item => item.PsTD),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235)',
        },
      ],
    };

    return (
      <div className='graph'>
        <Bar options={options} data={data} />
      </div>
    )
  }

export default ScoringGraph;