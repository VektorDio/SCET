import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import styles from './droppableContainer.module.css';

function DroppableBlock({
  id,
  children,
  top,
  left,
  right,
  bottom,
  label,
  round,
}) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      className={styles.container}
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      <div className={styles.label}>{label}</div>
      <div
        id={id}
        ref={setNodeRef}
        className={styles.droppableContainer}
        style={{ borderRadius: round ? '50%' : null }}
      >
        {children}
      </div>
    </div>
  );
}

export default DroppableBlock;
