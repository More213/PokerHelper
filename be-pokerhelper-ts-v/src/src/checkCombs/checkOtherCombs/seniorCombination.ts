import { Card } from '../../../interfaces/';
import { Injectable } from '@nestjs/common';
import { CheckCombination } from '../checkService/checkCombination';

@Injectable()
export class CombinationService {
  constructor(private checkCombs: CheckCombination) {}
  checkSeniorCombination(cards: Card[]): string {
    const combinationObj = {
      'Select 5-7 cards': this.checkCombs.isCorrectData,
      'Royal Flush': this.checkCombs.isRoyalFlush,
      'Straight-flush': this.checkCombs.isStraightFlush,
      'Four of a Kind': this.checkCombs.isFourKindCombs,
      'Full House': this.checkCombs.isFullHouse,
      'Flush': this.checkCombs.isFlush,
      'Straight': this.checkCombs.isStraight,
      'Three of a Kind': this.checkCombs.isThreeCombs,
      'Two Pair': this.checkCombs.isTwoPairsCombs,
      'One Pair': this.checkCombs.isPairsCombs,
      'High Card': this.checkCombs.isHighCard,
    };
    const keys = Object.keys(combinationObj);
    return keys.find(key => {
      return combinationObj[key](cards);
    });
  }
}
