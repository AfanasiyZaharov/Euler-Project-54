import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { findFullHouse } from '../validators';

export default class FullHouse extends Combination {

  private fullHouseWeights: number[]

  constructor(playerHand: Card[], weightsFullHouse: number[]) {
    super(playerHand);
    this.fullHouseWeights = weightsFullHouse;
  }

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const resultFlushData = findFullHouse(playerHand.map(({ weight }: Card) => weight));
    if (resultFlushData) {
      return new FullHouse(playerHand, [resultFlushData.three, resultFlushData.pair]);
    }

    return null;
  }

  public getWeight(): number {
    return 7;
  }

  public getConflictResolversWeightArray(): number[] {
    return this.fullHouseWeights;
  }
}