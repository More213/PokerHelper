import {cardsDeck} from '../../reducers/cards';

describe('test reducer cards deck', () => {
    it('test SELECT_CARD', () => {
        const action = {
            type: "ERROR_FETCH",
        };
        expect(cardsDeck(undefined, action)).toEqual("Sorry no connection to the server")
    });
    it('test SELECT_CARD', () => {
        const action = {
            type: "CARDS_FETCH",
            cardsDeck: [
                1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,
                41,42,43,44,45,46,47,48,49,50,51,52
            ],
        };
        expect(cardsDeck(undefined, action)).toEqual(action.cardsDeck)
    });
    it('test SELECT_CARD', () => {
        const action = {
            type: "SELECT_CARD",
            putCards: 1,
        };
        const state = [
            1,2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,51,52
        ];
        expect(cardsDeck(state, action)).toHaveLength(51)
    });
    it('test SELECT_CARD state.lenght = 45', () => {
        const action = {
            type: "SELECT_CARD",
            putCards: 1,
        };
        const state = [
            1,2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45
        ];
        expect(cardsDeck(state, action)).toHaveLength(45)
    });
    it('test "DELETE_ONE_CARD"', () => {
        const action = {
            type: "DELETE_ONE_CARD",
            deleteCardOne: 1,
        };
        const state = [
            2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,51,52
        ];
        expect(cardsDeck(state, action)).toEqual([
            ...state,
            action.deleteCardOne,
        ])
    });
    it('test "DELETE_SELECT_CARDS"', () => {
        const action = {
            type: "DELETE_SELECT_CARDS",
            deleteCards: [1,2,3,4,5]
        };
        const state = [
            6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,51,52
        ];
        expect(cardsDeck(state, action)).toEqual([
            ...state,
            ...action.deleteCards,
        ])
    });
    it('test default', () => {
        const action = {
            type: "",
        };
        const state = [
            6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,51,52
        ];
        expect(cardsDeck(state, action)).toEqual(state)
    }) 
});
