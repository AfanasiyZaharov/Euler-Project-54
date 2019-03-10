import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { findFourOfKind } from '../validators';


export default class FourOfAKing extends Combination{
  
  private fourWeight: number;

  constructor(playerHand: Card[], fourWeight: number){
    super(playerHand);
    this.fourWeight = fourWeight;
  }

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const fourWeight = findFourOfKind(playerHand.map(({ weight }: Card) => weight));
    if (fourWeight) {
      return new FourOfAKing(playerHand, fourWeight);
    }
    
    return null;
  }

  public getWeight(): number {
    return 8;
  }

  public getConflictResolversWeightArray(): number[] {
    return [this.fourWeight, ...this.getSortedCardWeights()];
  }
}