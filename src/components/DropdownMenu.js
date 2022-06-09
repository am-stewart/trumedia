import React, { useContext } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import Player from './Player';
import { PlayersContext } from '../Context';

// const menu = (
//   <Menu
//     items={[
//       {
//         key: '1',
//         label: 'Blake Bortles',
//         icon: <img src={'https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png'} />
//       },
//       {
//         key: '2',
//         label: 'Derek Carr',
//         icon: <img src={'https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR358797.png'} />
//       },
//       {
//         key: '3',
//         label: 'Baker Mayfield',
//         icon: <img src={'https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAY483453.png'}/>
//       },
//     ]}
//   />
// );

const menu = (
  <Menu
    items={[
      {
        key: '',
        label: '',
        icon: <img src={''} alt={''}/>
      },
    ]}
  />
);

const DropdownMenu = () => {
  const { players } = useContext(PlayersContext);

  return (
  <Dropdown overlay={menu}>
      <Space>
        Choose a Player...
        {players.map(player => (
          <div key={player.playerId}>
          {player.fullName},
          <img src={player.playerImage} alt={player.fullName} />
          </div>
        ))}
        <DownOutlined />
      </Space>
  </Dropdown>
  );
};

export default DropdownMenu;