import { cardWeights } from './consts';

const getCardValueWeight = (cardValue: string): number => {
  if (!isNaN(Number(cardValue))) {
    return Number(cardValue);
  } else {
    if(cardWeights[cardValue]){
      return cardWeights[cardValue];
    }
  }
  throw new Error(`smth went wrong in getCardValueWeight, cardValue = ${cardValue}`);
}

export default class Card {

  public valueLetter = '';
  public weight: number;
  public suitLetter = '';

  constructor(cardLetter: string) {
    this.valueLetter = cardLetter[0];
    this.suitLetter = cardLetter[1];
    this.weight = getCardValueWeight(this.valueLetter);
  }

}