import { useState } from 'react';
import Card from './Card';
function Container() {
  const [list, setList] = useState([
    {
      text: '卡片1',
      id: 1,
    },
    {
      text: '卡片2',
      id: 1,
    },
    {
      text: '卡片3',
      id: 1,
    },
  ]);
  return (
    <div style={{width:300}}>
      {list.map((item) => (
        <Card key={item.id} text={item.text} />
      ))}
    </div>
  );
}

export default Container;
