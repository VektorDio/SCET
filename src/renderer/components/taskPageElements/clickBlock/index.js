import React from 'react';
import styles from './clickBlock.module.css'
const ClickBlock = ({children, id, round, selected, setSelected, label}) => {
  return (
    <div id={id} className={styles.container} style={
      {
        borderRadius: (round) ? "50%" : null,
        border: (selected) ? "8px solid #238015" : "8px solid #111111",
      }}
         onClick={() => setSelected(!selected)}
    >
      {children}
      <div className={styles.label}> {label} </div>
    </div>
  );
};

export default ClickBlock;
