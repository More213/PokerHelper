import { Card } from '../../interfaces';

export class TransformCards {
  static transformCards(cards: Card[], prop: string) {
    const cardsSort = cards.sort(( a, b) => b.value - a.value);
    const propertyValueArr = cardsSort.map(e => e[prop]);
    const propertySet = [...new Set(propertyValueArr)];
    return propertySet.map(e => {
      return {
        [prop]: e,
        count: propertyValueArr.filter(a => a === e).length,
      };
    }).sort( ( a, b) => b.count - a.count);
  }
}
