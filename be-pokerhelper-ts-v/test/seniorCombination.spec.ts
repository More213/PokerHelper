import { CheckCombination } from '../src/src/checkCombs/checkService/checkCombination';
import { CombinationService } from '../src/src/checkCombs/checkOtherCombs/seniorCombination';

describe('Check all combinations', () => {
  const serviceMethod = new CheckCombination();
  const service = new CombinationService(serviceMethod);
  const undefinedSetup = [];
  const undefinedSetupSenior = [
    { value: 14, suit: '♥' },
    { value: 14, suit: '♦' },
    { value: 14, suit: '♥' },
    { value: 14, suit: '♦' },
  ];
  const highCardSetup = [
    { value: 12, suit: '♥' },
    { value: 5, suit: '♦' },
    { value: 2, suit: '♥' },
    { value: 10, suit: '♦' },
    { value: 7, suit: '♥' },
    { value: 6, suit: '♦' },
    { value: 3, suit: '♥' },
  ];
  const pairSetup = [
    { value: 14, suit: '♥' },
    { value: 14, suit: '♦' },
    { value: 7, suit: '♥' },
    { value: 12, suit: '♦' },
    { value: 5, suit: '♥' },
    { value: 10, suit: '♦' },
    { value: 3, suit: '♥' },
  ];
  const twoPairSetup = [
    { value: 13, suit: '♥' },
    { value: 13, suit: '♠' },
    { value: 12, suit: '♦' },
    { value: 12, suit: '♠' },
    { value: 10, suit: '♥' },
    { value: 9, suit: '♥' },
    { value: 3, suit: '♥' },
  ];
  const threeSetup = [
    { value: 13, suit: '♣' },
    { value: 13, suit: '♠' },
    { value: 13, suit: '♦' },
    { value: 12, suit: '♣' },
    { value: 11, suit: '♦' },
    { value: 9, suit: '♣' },
    { value: 3, suit: '♣' },
  ];
  const straightSetup = [
    { value: 14, suit: '♥' },
    { value: 13, suit: '♠' },
    { value: 12, suit: '♦' },
    { value: 11, suit: '♠' },
    { value: 10, suit: '♥' },
    { value: 9, suit: '♥' },
    { value: 3, suit: '♥' },
  ];
  const flushSetup = [
    { value: 13, suit: '♣' },
    { value: 13, suit: '♠' },
    { value: 12, suit: '♦' },
    { value: 11, suit: '♣' },
    { value: 11, suit: '♣' },
    { value: 9, suit: '♣' },
    { value: 3, suit: '♣' },
  ];
  const fourSetup = [
    { value: 12, suit: '♥' },
    { value: 12, suit: '♣' },
    { value: 12, suit: '♦' },
    { value: 12, suit: '♠' },
    { value: 8, suit: '♥' },
    { value: 4, suit: '♥' },
    { value: 3, suit: '♥' },
  ];
  const fullHouseSetup = [
    { value: 13, suit: '♣' },
    { value: 13, suit: '♠' },
    { value: 13, suit: '♦' },
    { value: 11, suit: '♠' },
    { value: 11, suit: '♦' },
    { value: 9, suit: '♠' },
    { value: 3, suit: '♥' },
  ];
  const straightFlushSetup = [
    { value: 13, suit: '♥' },
    { value: 13, suit: '♠' },
    { value: 12, suit: '♠' },
    { value: 11, suit: '♠' },
    { value: 10, suit: '♠' },
    { value: 9, suit: '♠' },
    { value: 3, suit: '♥' },
  ];
  const royalFlushSetup = [
    { value: 14, suit: '♠' },
    { value: 13, suit: '♠' },
    { value: 12, suit: '♠' },
    { value: 11, suit: '♠' },
    { value: 9, suit: '♠' },
    { value: 9, suit: '♥' },
    { value: 10, suit: '♠' },
  ];
  test('Royal Flush', () => {
    expect(serviceMethod.isRoyalFlush(royalFlushSetup)).toBeTruthy();
    expect(serviceMethod.isRoyalFlush(straightFlushSetup)).toBeUndefined();
  });

  test('Flush', () => {
    expect(serviceMethod.isFlush(royalFlushSetup)).toBeTruthy();
    expect(serviceMethod.isFlush(flushSetup)).toBeTruthy();
    expect(serviceMethod.isFlush(fourSetup)).toBeUndefined();
  });

  test('Straight', () => {
    expect(serviceMethod.isStraight(straightSetup)).toBeTruthy();
    expect(serviceMethod.isStraight(straightFlushSetup)).toBeTruthy();
    expect(serviceMethod.isStraight(flushSetup)).toBeUndefined();
  });

  test('Two Pair', () => {
    expect(serviceMethod.isTwoPairsCombs(twoPairSetup)).toBeTruthy();
    expect(serviceMethod.isTwoPairsCombs(pairSetup)).toBeUndefined();
  });

  test('Full House', () => {
    expect(serviceMethod.isFullHouse(fullHouseSetup)).toBeTruthy();
    expect(serviceMethod.isFullHouse(twoPairSetup)).toBeUndefined();
    expect(serviceMethod.isFullHouse(threeSetup)).toBeUndefined();
  });

  test('Four of a Kind', () => {
    expect(serviceMethod.isFourKindCombs(fourSetup)).toBeTruthy();
    expect(serviceMethod.isFourKindCombs(fullHouseSetup)).toBeUndefined();
  });

  test('Straight-flush', () => {
    expect(serviceMethod.isStraightFlush(straightFlushSetup)).toBeTruthy();
    expect(serviceMethod.isStraightFlush(royalFlushSetup)).toBeTruthy();
    expect(serviceMethod.isStraightFlush(straightSetup)).toBeUndefined();
  });

  test('Three of a Kind', () => {
    expect(serviceMethod.isThreeCombs(fourSetup)).toBeTruthy();
    expect(serviceMethod.isThreeCombs(threeSetup)).toBeTruthy();
    expect(serviceMethod.isThreeCombs(pairSetup)).toBeUndefined();
  });

  test('Pair', () => {
    expect(serviceMethod.isPairsCombs(twoPairSetup)).toBeTruthy();
    expect(serviceMethod.isPairsCombs(highCardSetup)).toBeUndefined();
  });

  test('High card', () => {
    expect(serviceMethod.isHighCard(highCardSetup)).toBeTruthy();
    expect(serviceMethod.isHighCard(undefinedSetup)).toBeUndefined();
  });

  test('Seniority', () => {
    expect(service.checkSeniorCombination(undefinedSetup)).toEqual('Select 5-7 cards');
    expect(service.checkSeniorCombination(undefinedSetupSenior)).toEqual('Select 5-7 cards');
    expect(service.checkSeniorCombination(highCardSetup)).toEqual('High Card');
    expect(service.checkSeniorCombination(pairSetup)).toEqual('One Pair');
    expect(service.checkSeniorCombination(twoPairSetup)).toEqual('Two Pair');
    expect(service.checkSeniorCombination(threeSetup)).toEqual('Three of a Kind');
    expect(service.checkSeniorCombination(straightSetup)).toEqual('Straight');
    expect(service.checkSeniorCombination(flushSetup)).toEqual('Flush');
    expect(service.checkSeniorCombination(fourSetup)).toEqual('Four of a Kind');
    expect(service.checkSeniorCombination(fullHouseSetup)).toEqual('Full House');
    expect(service.checkSeniorCombination(straightFlushSetup)).toEqual('Straight-flush');
    expect(service.checkSeniorCombination(royalFlushSetup)).toEqual('Royal Flush');
  });
});
