import Card from '../../Card';
import Combination from './CombinationBaseClass';

export default class HighestValue extends Combination {

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination {
    return new HighestValue(playerHand);
  }

  public getWeight(): number {
    return 1;
  }

  public getConflictResolversWeightArray(): number[] {
    return this.getSortedCardWeights();
  }
}
