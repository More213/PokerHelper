import { TransformCards } from './transformCards';
import { Card } from '../../interfaces';

export class TransformFlush {
  static transformFlush(cards: Card[]) {
    const newCards = TransformCards.transformCards(cards, 'suit');
    return newCards[0].count >= 5 ? cards.filter(card => card.suit === newCards[0].suit) : [];
  }
}
