import Card from "./Card";

class Player {
  hand: Card[];
  
  constructor() {
    this.hand = [];
  }
  
  drawCard(card: Card) {
    this.hand.push(card);
  }
  
  getHandValue(): number {
    let handValue = 0;
    let aceCount = 0;
    
    for (const card of this.hand) {
      handValue += card.getNumericValue();
      if (card.value === 'A') {
        aceCount++;
      }
    }
    
    // Adjust for aces
    while (handValue > 21 && aceCount > 0) {
      handValue -= 10;
      aceCount--;
    }
    
    return handValue;
  }
}

export default Player;
