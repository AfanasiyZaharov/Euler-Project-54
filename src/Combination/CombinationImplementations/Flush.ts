import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { isFlush } from '../validators';

export default class Flush extends Combination{
  
  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const resultThreeWeight = isFlush(playerHand.map(({ suitLetter }: Card) => suitLetter));
    if (resultThreeWeight) {
      return new Flush(playerHand);
    }
    
    return null;
  }

  public getWeight(): number {
    return 6;
  }

  public getConflictResolversWeightArray(): number[] {
    return this.getSortedCardWeights();
  }
}