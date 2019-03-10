import Card from '../Card';
// import all Combos
import HighestValue from './CombinationImplementations/HighestValue';
import OnePair from './CombinationImplementations/OnePair';
import TwoPairs from './CombinationImplementations/TwoPairs';
import ThreeOfAKind from './CombinationImplementations/ThreeOfAKind';
import Straight from './CombinationImplementations/Straight';
import Flush from './CombinationImplementations/Flush';
import FullHouse from './CombinationImplementations/FullHouse';
import FourOfAKind from './CombinationImplementations/FourOfAKind';
import StraightFlush from './CombinationImplementations/StraightFlush';
import RoyalFlush from './CombinationImplementations/RoyalFlush';


// order to check combos
const baseClassesOrderCheck = [
  RoyalFlush,
  StraightFlush,
  FourOfAKind,
  FullHouse,
  Flush,
  Straight,
  ThreeOfAKind,
  TwoPairs,
  OnePair,
  HighestValue
]

export interface ICombination {
  getWeight: ()=> number;
  getConflictResolversWeightArray: ()=> number[];
};

//check all possible combos
// from combo with biggest weight to lower
// if biggest weight combo exists - stop checking
// and return combo
export default (playerHand: Card[]): ICombination => {
  for (let i = 0; i < baseClassesOrderCheck.length; i++) {
    const Combination = baseClassesOrderCheck[i].createCombintationClassIfPossible(playerHand);
    if(Combination){
      return Combination;
      break;
    } 
  }
  throw new Error('smth went wrong, no combo');
}