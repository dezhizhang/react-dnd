import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import * as types from './types';

const style = {
  backgroundColor: 'red',
  padding: '5px',
  margin: '5px',
  border: '1px solid gray',
  cursor: 'move',
};

function Card({ text, id, index }) {
  const ref = useRef();
  const [{ isDragging },drag] = useDrag({
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
