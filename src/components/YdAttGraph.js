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

function YdAttGraph() {
  const { player } = useContext(PlayerContext);

  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Yards per Attempt',
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
          label: 'Yd/Att',
          data: player.map(item => (Math.round(item.PsYds / item.Att))),
          borderColor: 'red',
          backgroundColor: 'red',
        },
      ],
    };

    return (
      <div className='graph'>
        <Line options={options} data={data} />
      </div>
    )
  }

export default YdAttGraph;