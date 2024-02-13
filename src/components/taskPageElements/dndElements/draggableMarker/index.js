import React from 'react';
import styles from './draggableMarker.module.css';
import { useDraggable } from '@dnd-kit/core';
import Xarrow, { useXarrow } from 'react-xarrows';

const DraggableMarker = ({id, start, end, position}) => {
  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: id,
    data: {
      arrayId: parseInt(id),
      start: start,
    }
  });

  const updateXarrow = useXarrow()

  let style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 10,
  } : {
    zIndex: 5,
  };

  style = {...style,
    top: (position === "bottom") && "84%",
    left: (position === "right") && "84%",
    right: (position === "left") && "84%",
    bottom: (position === "top") && "75%",}

  return (
    <>
      {
        <div
          ref={setNodeRef}
          id={id}
          onDrag={updateXarrow}
          className={styles.container}
          style={style}
          {...listeners}
          {...attributes}
        >
        </div>
      }
      { (end || isDragging) &&
        <Xarrow
          start={start}
          end={(isDragging) ? id : end}
          path={'grid'}
          headSize={3}
          zIndex={1}
          //startAnchor={position}
        />
      }
    </>
  );
};

export default DraggableMarker;
