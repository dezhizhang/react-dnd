import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import * as types from './types';

const style = {
  backgroundColor: 'red',
  padding: '5px',
  margin: '5px',
  border: '1px solid gray',
  cursor: 'move',
};

function Card({ text, id, index, moveCard }) {
  const ref = useRef();

  useDrop({
    accept: types.Card,
    collect: () => ({}),
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const { top, bottom } = ref.current.getBoundingClientRect();
      const halfOfHoverHeight = (bottom - top) / 2;
      const { y } = monitor.getClientOffset();
      const hoverClientY = y - top;
      if (
        (dragIndex < hoverIndex && hoverClientY > halfOfHoverHeight) ||
        (dragIndex > hoverIndex && hoverClientY < halfOfHoverHeight)
      ) {
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: types.Card,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.1 : 1;
  drag(ref);

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {text}
    </div>
  );
}

export default Card;
