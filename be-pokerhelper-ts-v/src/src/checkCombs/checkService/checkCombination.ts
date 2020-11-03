import { TransformCards } from '../../transformers/transformCards';
import { TransformFlush } from '../../transformers/transformFlushCards';
import { Injectable } from '@nestjs/common';
import { Card } from '../../../interfaces';
@Injectable()
export class CheckCombination {
  isCorrectData(cards: Card[]): boolean {
    const cardsMin: number = 5;
    const cardsMax: number = 7;
    if (cards.length < cardsMin || cards.length > cardsMax ) {
      return true;
    }
  }

  isHighCard(cards: Card[]): boolean {
    if (cards.length !== 0) {
      return true;
    }
  }

  isPairsCombs(cards: Card[]): boolean {
    const preparedCards = TransformCards.transformCards(cards, 'value');
    if (preparedCards[0].count >= 2) {
      return true;
    }
  }

  isTwoPairsCombs(cards: Card[]): boolean {
    const preparedCards = TransformCards.transformCards(cards, 'value');
    if ( preparedCards.length !== 1 ) {
      if (preparedCards[0].count >= 2 && preparedCards[1].count >= 2) {
        return true;
      }
    }
  }

  isThreeCombs(cards: Card[]): boolean {
    const preparedCards = TransformCards.transformCards(cards, 'value');
    if (preparedCards[0].count >= 3) {
      return true;
    }
  }

  isStraight(cards: Card[]): boolean {
    const cardsSort = cards.sort((a, b) => b.value - a.value);
    const propertyValueArr = cardsSort.map(e => e.value);
    const propertySet = [...new Set(propertyValueArr)];
    for (let i = 0; i < propertySet.length - 4; i++) {
      if (propertySet[i] === propertySet[i + 4] + 4) {
        return true;
      }
    }
  }

  isFlush(cards: Card[]): boolean {
    const preparedCardsSuit = TransformCards.transformCards(cards, 'suit');
    if (preparedCardsSuit[0].count >= 5) {
      return true;
    }
  }

  isFullHouse(cards: Card[]): boolean {
    const preparedCards = TransformCards.transformCards(cards, 'value');
    if ( preparedCards.length !== 1 ) {
      if (preparedCards[0].count >= 3 && preparedCards[1].count >= 2 && preparedCards.length !== 1) {
        return true;
      }
    }
  }

  isFourKindCombs(cards: Card[]): boolean {
    const preparedCards = TransformCards.transformCards(cards, 'value');
    if (preparedCards[0].count >= 4) {
      return true;
    }
  }

  isStraightFlush(cards: Card[]): boolean {
    const flushCards = TransformFlush.transformFlush(cards);
    for (let i = 0; i < flushCards.length - 4; i++) {
      if (flushCards[i].value === flushCards[i + 4].value + 4) {
        return true;
      }
    }
  }

  isRoyalFlush(cards: Card[]): boolean {
    const flushCards = TransformFlush.transformFlush(cards);
    if (flushCards.length >= 5 ) {
      if (flushCards[0].value === flushCards[4].value + 4 && flushCards[0].value === 14) {
        return true;
      }
    }
  }
}
