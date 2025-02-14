import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';
import { Image } from 'react-native';
const Top = () => {


    return (
        <div className={styles.topSection}>
        <Image 
          source={require('../../assets/cards/1B.svg')}
          style={{ width: 100, height: 140 }}
          resizeMode="contain"
        />
      </div>
    )
}

export default Top;