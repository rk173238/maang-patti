import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';
import { Image } from 'react-native';
import { CardImages, getRandomCards } from '../../constants/cards';
import Top from './Top';
import Bottom from './Bottom';

const GamePage: React.FC = () => {
  const [middleCard, setMiddleCard] = useState(getRandomCards());
  const [topCard,setTopCard] = useState(require('../../assets/cards/1B.svg'))
  const [bottomCard,setBottomCard] = useState(require('../../assets/cards/1B.svg'))

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleCard(getRandomCards());
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      
      <Top/>

      <div className={styles.middleSection}>
        <div className={styles.leftColumn}>
          <div className={styles.leftBox}>
          <Image 
          source={topCard}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
          </div>
          <div className={styles.leftBox}>
          <Image 
          source={bottomCard}
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

      <Bottom></Bottom>

    </div>
  );
};

export default GamePage;