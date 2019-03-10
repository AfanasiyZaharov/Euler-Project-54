import Card from '../Card';
import calculateWinner from '../Bid';
import fs from 'fs';
import PATH from 'path';

let winsFirstPlayerCounter = 0;

// create one bid
// with ten cards
const generateBid = (bidDataString: string) => {
  if (bidDataString === '') {
    return;
  }
  const cardsData = bidDataString.split(' ');
  if (cardsData.length !== 10) {
    throw new Error(' parse error');
  }

  const firstPlayerHand = [...cardsData.slice(0, 5)].map((elem: string) => new Card(elem));
  const secondPlayerHand = [...cardsData.slice(5, 10)].map((elem: string) => new Card(elem));
  const winner = calculateWinner(firstPlayerHand, secondPlayerHand);
  if (winner === 'Player 1') {
    winsFirstPlayerCounter += 1;
  }
}

// parse file and then each string 
// is the game bid - call generateBid to calculate bid winner
export default () => {
  const contents = fs.readFileSync(PATH.join(__dirname, '../poker.txt'), 'utf8');
  const arrOfBids = contents.replace('\r', '').split('\n');
  for (let i = 0; i < arrOfBids.length; i++) {
    generateBid(arrOfBids[i]);
  }
  console.log('winsFirstPlayerCounter ', winsFirstPlayerCounter);
}
