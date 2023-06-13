import Card from './Card'

class Deck {
  cards: Card[];
  
  constructor() {
    this.cards = [];
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }
  
  shuffle() {
    this.cards = shuffleArray(this.cards)
  }
  
  drawCard(): Card | undefined {
    return this.cards.pop();
  }
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

export default Deck;
