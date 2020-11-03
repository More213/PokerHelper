import { Global, Module } from '@nestjs/common';
import { AppControllerCombination } from './app.controlerCombination';
import { CombinationService } from './src/checkCombs/checkOtherCombs/seniorCombination';
import { CheckCombination } from './src/checkCombs/checkService/checkCombination';

@Global()@Module({
  controllers: [AppControllerCombination],
  providers: [CombinationService, CheckCombination],
})
export class AppModule {}
