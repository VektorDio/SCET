import React from 'react';
import styles from './draggableBlock.module.css';
import { useDraggable } from '@dnd-kit/core';
import { useXarrow } from 'react-xarrows';

const DraggableBlock = ({children, id, round, display}) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });

  const updateXarrow = useXarrow()

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    borderRadius: (round) ? "50%" : null,
    display: display,
    zIndex: 10
  } : {
    zIndex: 5
  };

  return (
    <div
      ref={setNodeRef}
      id={id}
      onDrag={updateXarrow}
      className={styles.container}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default DraggableBlock;
