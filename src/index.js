import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from './Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
    <Container />
  </DndProvider>
);