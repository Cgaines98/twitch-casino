class Card {
  suit: string;
  value: string;
  
  constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }
  
  getNumericValue(): number {
    if (this.value === 'A') {
      return 11;
    } else if (['K', 'Q', 'J'].includes(this.value)) {
      return 10;
    } else {
      return parseInt(this.value);
    }
  }
}

export default Card;
