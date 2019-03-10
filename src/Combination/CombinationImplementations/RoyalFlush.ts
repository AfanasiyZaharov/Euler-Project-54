import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { isRoyalFlush } from '../validators';

export default class RoyalFlush extends Combination {

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const isRoyalFlushValid = isRoyalFlush(playerHand);
    if (isRoyalFlushValid) {
      return new RoyalFlush(playerHand, );
    }

    return null;
  }

  public getWeight(): number {
    return 10;
  }

  public getConflictResolversWeightArray(): number[] {
    return [999];
  }
}
