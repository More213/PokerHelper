import {selectedCards} from '../../reducers/selectCards';

describe('test reducer cards select ', () => {
    it('test DELETE_SELECT_CARDS', () => {
        const action = {
            type: "DELETE_SELECT_CARDS",
        };
        const state = [
            1,2,3,4,5,6,7
        ];
        expect(selectedCards(state, action)).toHaveLength(0)
    });
    it('test DELETE_ONE_CARD', () => {
        const action = {
            type: "DELETE_ONE_CARD",
            deleteCardOne: 4
        };
        const state = [
            1,2,3,4,5,6,7
        ];
        expect(selectedCards(state, action)).toEqual([1,2,3,5,6,7])
    });
    it('test SELECT_CARD', () => {
        const action = {
            type: "SELECT_CARD",
            putCards: 9
        };
        const state = [
            1,2,3,4,5,6,
        ];
        expect(selectedCards(state, action)).toEqual([
            ...state,
            action.putCards
          ])
    });
    it('test SELECT_CARD state.lenght = 7', () => {
        const action = {
            type: "SELECT_CARD",
            putCards: 9
        };
        const state = [
            1,2,3,4,5,6,7
        ];
        expect(selectedCards(state, action)).toHaveLength(7)
    });
    it('test default', () => {
        const action = {
            type: "",
        };
        const state = [];
        expect(selectedCards(undefined, action)).toEqual(state)
    }) 
});
