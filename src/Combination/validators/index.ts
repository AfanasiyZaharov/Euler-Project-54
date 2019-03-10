import { getCountOfNumberInArray, isSequence, isOneSuit } from './utils';

// check if in card array exists 3 equal numbers
export const findThree = (weights: number[]) => {
  return getCountOfNumberInArray(3, weights);
}

// check if in card array exists 2 equal numbers
export const findPair = (weights: number[]) => {
  return getCountOfNumberInArray(2, weights);
}
// check if in card array exists 2 equal numbers and another 2 equal numbers
export const findTwoPairs = (weights: number[]) => {
  const firstPairWeight = getCountOfNumberInArray(2, weights);
  if (!firstPairWeight) {
    return null;
  }
  const newArr = weights.filter((elem) => (elem !== firstPairWeight));
  const secondPairWeight = getCountOfNumberInArray(2, newArr);
  if (secondPairWeight) {
    return {
      first: firstPairWeight,
      second: secondPairWeight
    }
  }
}

// check if in card array exists 3 equal numbers and also 2 equal numbers
export const findFullHouse = (weights: number[]) => {
  const threeWeight = getCountOfNumberInArray(3, weights);
  if (!threeWeight) {
    return null;
  }
  const newArr = weights.filter((elem) => (elem !== threeWeight));
  const pairWeight = getCountOfNumberInArray(2, newArr);
  if (pairWeight) {
    return {
      three: threeWeight,
      pair: pairWeight
    }
  }
}

// check if in card array exists 4 equal numbers
export const findFourOfKind = (weights: number[]) => {
  const fourOfKindWeight = getCountOfNumberInArray(4, weights);
  return fourOfKindWeight || null;
}

// check if in card array 5 cards is in row
export const isStraight = (weights: number[]) => {
  return isSequence(weights).isSequenceValid;
}
// check if all cards has the same suit
export const isFlush = (cardsSuits: string[]) => {
  return isOneSuit(cardsSuits);
}

// check if all cards has the same suit and is in row
export const findStraightFlush = (cards: { weight: number, suitLetter: string }[]): number | null => {
  const { isSequenceValid, maxWeight } = isSequence(cards.map(({ weight }) => weight))
  const isStraightFlush = (isSequenceValid && isOneSuit((cards.map(({ suitLetter }) => suitLetter))));
  if (isStraightFlush) {
    return maxWeight;
  } else {
    return null;
  }
}
// check if all cards has the same suit and is in row, and started from T to A
export const isRoyalFlush = (cards: { weight: number, suitLetter: string }[]): boolean => {
  return (isSequence(cards.map(({ weight }) => weight)).isSequenceValid &&
    isOneSuit((cards.map(({ suitLetter }) => suitLetter))));
}