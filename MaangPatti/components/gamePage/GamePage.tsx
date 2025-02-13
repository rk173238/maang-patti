import React from 'react';
import styles from './GamePage.module.css';

const GamePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        {/* Top section content */}
      </div>

      <div className={styles.middleSection}>
        <div className={styles.leftColumn}>
          <div className={styles.leftBox}></div>
          <div className={styles.leftBox}></div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightBox}></div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        {/* Bottom section content */}
      </div>
    </div>
  );
};

export default GamePage;