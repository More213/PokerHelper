import {nameCombs} from '../../reducers/selectCardsPost';

describe('test reducer cards deck', () => {
    it('test nameCombs SELECT_CARD', () => {
        const action = {
            type: "SELECT_CARDS_POST",
            nameCombs: "hello",
        };

        expect(nameCombs( undefined, action)).toEqual("hello")
    });
    it('test nameCombs DELETE_SELECT_CARDS', () => {
        const action = {
            type: "DELETE_SELECT_CARDS",
        };
        const state = "hello";
        expect(nameCombs(state, action)).toEqual("Select 5-7 cards")
    }) ;
    
    it('test default', () => {
        const action = {
            type: "",
        };
        const state = "Select 5-7 cards";
        expect(nameCombs(undefined, action)).toEqual(state)
    })
    it('test error', () => {
        const action = {
            type: "POST_ERROR",
        };
        const state = "Sorry there was an error";
        expect(nameCombs(undefined, action)).toEqual(state)
    })
});
