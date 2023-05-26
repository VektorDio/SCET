import React, { useState } from 'react';
import styles from "./hiddenSelect.module.css"
const HiddenSelect = ({options, onClick, text}) => {
  const [display, setDisplay] = useState(false)

  return (
    <>
      {
        (display) ? (
          <div className={styles.container} onContextMenu={() => setDisplay(false)}>
            {options.map((option, index) => (
                <div className={styles.option} onClick={() => {
                  setDisplay(false)
                  onClick(option)

                }}
                     key={index}
                >
                  {option}
                </div>
              )
            )}
          </div>
        ) : (
          <div onClick={() => setDisplay(true)}>{text}</div>
        )
      }
    </>
  );
};

export default HiddenSelect;
