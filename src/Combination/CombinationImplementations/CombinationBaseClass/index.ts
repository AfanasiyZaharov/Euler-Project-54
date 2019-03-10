import Card from '../../../Card';


export default abstract class Combination {

  // all player cards  
  public playerHand: Card[];

  constructor(playerHand: Card[]) {
    this.playerHand = playerHand;
  }

  // get weight of combination
  public abstract getWeight(): number;

  // get array of conflict resolvers
  // each combo has self conflict resolvers array
  // for example - one pair return array [{pairCardsWeight}, ...[allCardsWeights]]
  // if conflict happens, first we check pairCardsWeight, and than - all cards weights from biggest to lowest
  public abstract getConflictResolversWeightArray(): number[]

  protected getSortedCardWeights(): number[] {
    return this.playerHand.sort((a: Card, b: Card) => {
      return b.weight - a.weight;
    }).map(({ weight }: Card) => weight);
  } 
}