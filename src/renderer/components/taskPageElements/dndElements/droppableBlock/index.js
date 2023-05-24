import { useDroppable } from '@dnd-kit/core';
import styles from './droppableContainer.module.css';
import React from 'react';

function DroppableBlock({id, children, top, left, right, bottom, label}) {
  const {setNodeRef} = useDroppable({
    id: id,
  });

  return (
    <div className={styles.container}
         style={{
            top:top,
            left:left,
            right:right,
            bottom:bottom,
         }}
    >
      <div className={styles.label}>
        {label}
      </div>
      <div id={id} ref={setNodeRef} className={styles.droppableContainer}  >
        {children}
      </div>
    </div>
  );
}

export default DroppableBlock