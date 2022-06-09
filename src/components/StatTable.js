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
    width: 20,
  },
  {
    title: 'Opponent',
    dataIndex: 'opponent',
    key: 'opponent',
    fixed: true,
    width: 20,
  },
  {
    title: 'PsYds/Att',
    dataIndex: 'PsYdsAtt',
    render: (text, record) => (
      <span>{Math.round(record.PsYds / record.Att)}</span>
    ),
    key: 'PsYds/Att',
    fixed: true,
    width: 20,
  },
  {
    title: 'Cmp%',
    dataIndex: 'Cmp%',
    render: (text, record) => (
      <span>{Math.round((record.Cmp / record.Att)*100)} %</span>
    ),
    key: 'Cmp',
    fixed: true,
    width: 20,
  },
];

  return (
    <div className='table-wrapper'>
      <Table className='table' 
        columns={columns} 
        dataSource={player} 
        pagination={false}
        bordered />
    </div>
  )
}

export default StatTable;