import Card from '../../Card';
import Combination from './CombinationBaseClass';
import {  findTwoPairs } from '../validators';


export default class TwoPairs extends Combination {

  public pairDataWeight: number[];


  constructor(playerHand: Card[], pairDataWeight: number[]) {
    super(playerHand);
    this.pairDataWeight = pairDataWeight;
  }

  public static createCombintationClassIfPossible(playerHand: Card[]): Combination | null {
    const result = findTwoPairs(playerHand.map(({ weight }: Card) => weight));
    if(!result){
      return null;
    }
    if (result.first && result.second) {
      return new TwoPairs(playerHand, [result.first, result.second]);
    }
    
    return null;
  }

  public getWeight(): number {
    return 3;
  }

  public getConflictResolversWeightArray(): number[] {
    const weightsOfAllCard = this.getSortedCardWeights();
    return [...this.pairDataWeight, ...weightsOfAllCard];
  }
}
