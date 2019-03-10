import { cardWeights } from '../../Card/consts';

// find, is in number array exists the definited number of equal numbers
// returns this number - its weight
export const getCountOfNumberInArray = (count: number, weights: number[]) => {

  for (let i = 0; i < weights.length; i++) {
    const resultCount = weights.filter((weight: number, index: number) => weight === weights[i] && index !== i).length + 1;
    if (resultCount === count) {
      return weights[i];
    }
  }
}

// check if cards is the one suit
export const isOneSuit = (cardsSuits: string[]) => {
  const suitFirstElem = cardsSuits[0];
  return cardsSuits.every((suit: string) => suit === suitFirstElem);
}

// check if cards became to sequence
// for example: 8 - 9 - T - J - Q - its sequence
// also returns weight of max card in sequence
export const isSequence = (weights: number[], isStartWithTen?: boolean) => {
  const sortedArr = weights.sort((a: number, b: number) => a - b);
  if (isStartWithTen && sortedArr[0] !== cardWeights['T']) {
    return { isSequenceValid: false, maxWeight: null };
  }
  let isSequenceValid = true;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] !== 1) {
      isSequenceValid = false;
      break;
    }
  }
  return { isSequenceValid, maxWeight: sortedArr[sortedArr.length - 1] };
}