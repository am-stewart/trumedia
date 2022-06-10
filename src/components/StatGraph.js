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

function StatGraph() {
  const { player } = useContext(PlayerContext);
  console.log('player from graph', player)

  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Stat Graph',
        },
      },
    };

    const data = {
      labels: player.map(item => item.week),
      datasets: [
        {
          label: 'Att',
          data: player.map(item => item.Att),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Cmp',
          data: player.map(item => item.Cmp),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    return (
      <div className='graph-wrapper'>
        <Line options={options} data={data} />
      </div>
    )
  }

export default StatGraph;