import { useDroppable } from '@dnd-kit/core';
import styles from './droppableContainer.module.css';
import React from 'react';
import { useXarrow } from 'react-xarrows';

function DroppableBlock({id, children, top, left, right, bottom}) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} className={styles.droppableContainer} style={
      {
        top:top,
        left:left,
        right:right,
        bottom:bottom,
        color: isOver ? 'green' : undefined,
      }} >
      {children}
    </div>
  );
}

export default DroppableBlock
