import React from 'react';
import styles from './matrix.module.css';

function MatrixBlock({ array, setArray }) {
  return (
    <div
      className={styles.container}
      style={{ gridTemplateColumns: `repeat(${array[0].length}, 1fr)` }}
    >
      {array.map((row, y) => {
        return row.map((e, x) => (
          <input
            className={styles.block}
            onChange={(e) => setArray(e.target.value, x, y)}
            type="text"
            key={`${x}${y}`}
            value={array[y][x]}
            maxLength={3}
          />
        ));
      })}
    </div>
  );
}

export default MatrixBlock;
