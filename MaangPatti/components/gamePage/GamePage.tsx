import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';
import { Image } from 'react-native';
import { CardImages, getRandomCards } from '../../constants/cards';

const GamePage: React.FC = () => {
  const [middleCard, setMiddleCard] = useState(getRandomCards());

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleCard(getRandomCards());
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Image 
          source={require('../../assets/cards/1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
      </div>

      <div className={styles.middleSection}>
        <div className={styles.leftColumn}>
          <div className={styles.leftBox}>
          <Image 
          source={require('../../assets/cards/1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
          <div className={styles.leftBox}>
          <Image 
          source={require('../../assets/cards/1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightBox}>
          <Image 
          source={CardImages[middleCard]}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <Image 
          source={require('../../assets/cards/1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
      </div>

    </div>
  );
};

export default GamePage;