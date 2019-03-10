import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { isStraight } from '../validators';

export default class Straight extends Combination {

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const resultThreeWeight = isStraight(playerHand.map(({ weight }: Card) => weight));
    if (resultThreeWeight) {
      return new Straight(playerHand);
    }
    
    return null;
  }

  public getWeight(): number {
    return 5;
  }

  public getConflictResolversWeightArray(): number[] {
    return this.getSortedCardWeights();
  }
}
