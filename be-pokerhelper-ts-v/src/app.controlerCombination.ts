import { Body, Controller, Get, Post } from '@nestjs/common';
import { Card } from './interfaces';
import { DECK } from './src/data/cardDeck';
import { CombinationService } from './src/checkCombs/checkOtherCombs/seniorCombination';

@Controller()
export class AppControllerCombination {
  constructor(private combinationService: CombinationService) {}
  @Get('getDeck')
  sendCards(): string {
    return JSON.stringify(DECK);
  }

  @Post('postCards')
  gimmeCards(@Body() cards: Card[]) {
      return this.combinationService.checkSeniorCombination(cards);
    }
}
