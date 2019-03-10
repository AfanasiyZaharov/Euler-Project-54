import Card from '../../Card';
import Combination from './CombinationBaseClass';
import { findThree } from '../validators';


export default class ThreeOfAKind extends Combination {

  public threeDataWeight: number;


  constructor(playerHand: Card[], pairDataWeight: number) {
    super(playerHand);
    this.threeDataWeight = pairDataWeight;
  }

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const resultThreeWeight = findThree(playerHand.map(({ weight }: Card) => weight));
    if (resultThreeWeight) {
      return new ThreeOfAKind(playerHand, resultThreeWeight);
    }
    
    return null;
  }

  public getWeight(): number {
    return 4;
  }

  public getConflictResolversWeightArray(): number[] {
    const weightsOfAllCard = this.getSortedCardWeights();
    return [this.threeDataWeight, ...weightsOfAllCard];
  }
}