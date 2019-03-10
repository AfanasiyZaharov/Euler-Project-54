import Card from '../Card';
import getCombination, { ICombination } from '../Combination';

export default (firstPlayerHand: Card[], secondPlayerHand: Card[]) => {
  const winner = compareCombinations([getCombination(firstPlayerHand), getCombination(secondPlayerHand)]);
  console.log(`winner is ${winner}`);
  return winner;
}

const compareCombinations = (combinations: ICombination[]): string => {
  //check by combo weight

  type ComboReduceComparision = {
    weight: number,
    conflictWeight: number[],
    index: number,
  };

  const resultCompareData = combinations.reduce((accum: ComboReduceComparision, combo: ICombination, index: number) => {
    const comboWeight = combo.getWeight();
    const comboConflictWeight = combo.getConflictResolversWeightArray();
    console.log(` weights  ${accum.weight}, ${comboWeight}`);
    if (comboWeight > accum.weight) {
      return { weight: comboWeight, conflictWeight: comboConflictWeight, index };
    } else if (comboWeight === accum.weight) {
      console.log(`here , ${comboWeight}  ${accum.conflictWeight}, ${comboConflictWeight}`);
      if (isSecondArrayGreater(accum.conflictWeight, comboConflictWeight)) {
        return { weight: comboWeight, conflictWeight: comboConflictWeight, index };
      }
    }

    return { ...accum };

  }, { weight: 0, conflictWeight: [], index: -1 });


  // console.log('winner data', resultCompareData);

  return `Player ${resultCompareData.index + 1}`;
}

const isSecondArrayGreater = (arr: number[], arr2: number[]): boolean => {
  if (arr.length !== arr2.length) {
    throw new Error('went wrong, compareConflictArrays, arrs length different');
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr2[i]) {
      return true;
    } else if (arr[i] > arr2[i]) {
      return false;
    } else {
      continue;
    }
  }
  throw new Error('unexpected draw');
}