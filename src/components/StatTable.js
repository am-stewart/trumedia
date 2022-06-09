import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { PlayerContext } from '../Context';

const StatTable = () => {
  const { player } = useContext(PlayerContext)
  console.log('player', player)

const columns = [
  {
    title: 'Week',
    dataIndex: 'week',
    key: 'week',
    fixed: true,
    width: 50,
  },
  {
    title: 'Opponent',
    dataIndex: 'opponent',
    key: 'opponent',
    fixed: true,
    width: 50,
  },
  {
    title: 'PsYds',
    dataIndex: 'PsYdsAtt',
    render: (text, record) => (
      <span>{Math.round(record.PsYds / record.Att)}</span>
    ),
    key: 'PsYds/Att',
    fixed: true,
    width: 50,
  },
  {
    title: 'Cmp%',
    dataIndex: 'Cmp%',
    render: (text, record) => (
      <span>{Math.round((record.Cmp / record.Att)*100)} %</span>
    ),
    key: 'Cmp',
    fixed: true,
    width: 50,
  },
];

  return (
    <div className='table-wrapper'>
      <Table className='table' 
        columns={columns} 
        dataSource={player} 
        pagination={false}
        scroll={{
          // x: 500,
          y: 500,
        }}
        bordered />
    </div>
  )
}

export default StatTable;