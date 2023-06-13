import Deck from './Deck'
import Player from './Player';

class BlackjackGame {
  deck: Deck;
  player: Player;
  dealer: Player;
  
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Player();
  }
  
  startGame() {
    this.deck.shuffle();
    
    // Deal initial cards
    this.player.drawCard(this.deck.drawCard()!);
    this.dealer.drawCard(this.deck.drawCard()!);
    this.player.drawCard(this.deck.drawCard()!);
    this.dealer.drawCard(this.deck.drawCard()!);
    
    this.playPlayerTurn();
  }
  
  playPlayerTurn() {
    console.log('Player hand:', this.player.hand);
    console.log('Dealer hand:', this.dealer.hand[0]);
    
    // Implement player's turn logic here
  }
  
  playDealerTurn() {
    console.log('Dealer hand:', this.dealer.hand);
    
    // Implement dealer's turn logic here
  }
}

export default BlackjackGame;
