import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { findPair } from '../validators';

export default class OnePair extends Combination {

  public pairDataWeight: number;


  constructor(playerHand: Card[], pairDataWeight: number) {
    super(playerHand);
    this.pairDataWeight = pairDataWeight;
  }

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const resultedPairWeight = findPair(playerHand.map(({ weight }: Card) => weight));
    if (resultedPairWeight) {
      return new OnePair(playerHand, resultedPairWeight);
    }
    
    return null;
  }

  public getWeight(): number {
    return 2;
  }

  public getConflictResolversWeightArray(): number[] {
    const weightsOfAllCard = this.getSortedCardWeights();

    return [this.pairDataWeight, ...weightsOfAllCard];
  }
}