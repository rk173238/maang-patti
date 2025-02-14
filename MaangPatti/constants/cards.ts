export const CardImages = {
  // Special cards
  '1B': require('../assets/cards/1B.svg'),
  '1J': require('../assets/cards/1J.svg'),
  
  // Regular cards (2-10, J, Q, K for each suit)
  '2C': require('../assets/cards/2C.svg'),
  '2D': require('../assets/cards/2D.svg'),
  '2H': require('../assets/cards/2H.svg'),
  '2S': require('../assets/cards/2S.svg'),
  
  '3C': require('../assets/cards/3C.svg'),
  '3D': require('../assets/cards/3D.svg'),
  '3H': require('../assets/cards/3H.svg'),
  '3S': require('../assets/cards/3S.svg'),
  
  '4C': require('../assets/cards/4C.svg'),
  '4D': require('../assets/cards/4D.svg'),
  '4H': require('../assets/cards/4H.svg'),
  '4S': require('../assets/cards/4S.svg'),
  
  '5C': require('../assets/cards/5C.svg'),
  '5D': require('../assets/cards/5D.svg'),
  '5H': require('../assets/cards/5H.svg'),
  '5S': require('../assets/cards/5S.svg'),
  
  '6C': require('../assets/cards/6C.svg'),
  '6D': require('../assets/cards/6D.svg'),
  '6H': require('../assets/cards/6H.svg'),
  '6S': require('../assets/cards/6S.svg'),
  
  '7C': require('../assets/cards/7C.svg'),
  '7D': require('../assets/cards/7D.svg'),
  '7H': require('../assets/cards/7H.svg'),
  '7S': require('../assets/cards/7S.svg'),
  
  '8C': require('../assets/cards/8C.svg'),
  '8D': require('../assets/cards/8D.svg'),
  '8H': require('../assets/cards/8H.svg'),
  '8S': require('../assets/cards/8S.svg'),
  
  '9C': require('../assets/cards/9C.svg'),
  '9D': require('../assets/cards/9D.svg'),
  '9H': require('../assets/cards/9H.svg'),
  '9S': require('../assets/cards/9S.svg'),
  
  '10C': require('../assets/cards/TC.svg'),
  '10D': require('../assets/cards/TD.svg'),
  '10H': require('../assets/cards/TH.svg'),
  '10S': require('../assets/cards/TS.svg'),
  
  'JC': require('../assets/cards/JC.svg'),
  'JD': require('../assets/cards/JD.svg'),
  'JH': require('../assets/cards/JH.svg'),
  'JS': require('../assets/cards/JS.svg'),
  
  'QC': require('../assets/cards/QC.svg'),
  'QD': require('../assets/cards/QD.svg'),
  'QH': require('../assets/cards/QH.svg'),
  'QS': require('../assets/cards/QS.svg'),
  
  'KC': require('../assets/cards/KC.svg'),
  'KD': require('../assets/cards/KD.svg'),
  'KH': require('../assets/cards/KH.svg'),
  'KS': require('../assets/cards/KS.svg'),
};

export type CardKey = keyof typeof CardImages;

export const getRandomCards = (): CardKey => {
  const allCards = Object.keys(CardImages) as CardKey[];
  const shuffled = [...allCards].sort(() => Math.random() - 0.5);
  return shuffled[0];
};