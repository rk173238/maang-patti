import React from 'react';
import styles from './GamePage.module.css';
import { Image } from 'react-native';

const GamePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Image 
          source={require('./1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
      </div>

      <div className={styles.middleSection}>
        <div className={styles.leftColumn}>
          <div className={styles.leftBox}>
          <Image 
          source={require('./1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
          <div className={styles.leftBox}>
          <Image 
          source={require('./1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightBox}>
          <Image 
          source={require('./1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        {/* Bottom section content */}
        <Image 
          source={require('./1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
      </div>
    </div>
  );
};

export default GamePage;