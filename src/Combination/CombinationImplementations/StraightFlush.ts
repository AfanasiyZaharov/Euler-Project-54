import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { findStraightFlush } from '../validators';

export default class StraightFlush extends Combination {
  private straightMaxCardWeight: number

  constructor(playerHand: Card[], straightMaxCardWeight: number){
    super(playerHand);
    this.straightMaxCardWeight = straightMaxCardWeight;
  }


  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const straightMaxCardWeight = findStraightFlush(playerHand);
    if (straightMaxCardWeight) {
      return new StraightFlush(playerHand, straightMaxCardWeight);
    }
    
    return null;
  }

  public getWeight(): number {
    return 9;
  }

  public getConflictResolversWeightArray(): number[] {
    return [this.straightMaxCardWeight];
  }
}
