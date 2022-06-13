import React, { useContext } from 'react';
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
import { PlayerContext } from '../Context';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CmpGraph() {
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
          text: 'Cmp%',
          font: {
            size: '16'
          }
        },
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestMax: 100,
          title: {
            color: 'red',
            display: true,
            text: 'Cmp%'
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
          label: 'Cmp%',
          data: player.map(item => (Math.round((item.Cmp / item.Att)*100))),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    return (
      <div className='graph'>
        <Line options={options} data={data} />
      </div>
    )
  }

export default CmpGraph;