import { useState } from 'react';
import Card from './Card';
function Container() {
  const [cards, setCards] = useState([
    {
      text: '卡片1',
      id: "card1",
    },
    {
      text: '卡片2',
      id: "card2",
    },
    {
      text: '卡片3',
      id: "card3",
    },
  ]);

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    const cloneCards = [...cards];
    cloneCards.splice(dragIndex, 1);
    cloneCards.splice(hoverIndex, 0, dragCard);
    setCards(cloneCards);
  };
  return (
    <div style={{ width: 300 }}>
      {cards.map((item, index) => (
        <Card
          moveCard={moveCard}
          key={item.id}
          text={item.text}
          id={item.id}
          index={index}
        />
      ))}
    </div>
  );
}

export default Container;
