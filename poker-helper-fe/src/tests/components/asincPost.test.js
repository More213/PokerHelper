import React from 'react';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {selectCardsPostData} from "../../actions/selectCardsPost";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test post request', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore()
  });

  it('test post request success', () => {
    const data =  [
      {value: 3, suit: '♦'},
      {value: 4, suit: '♦'},
      {value: 2, suit: '♦'}
      ];
    const payload = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetchMock.mock("http://localhost:3001/postCards", payload);

    const expectedActions = {
      type:"SELECT_CARDS_POST",
      cardsDeck: "Hello",
    };


    const store = mockStore({});

    return store.dispatch(selectCardsPostData(() => {

      expect(store.getActions()).toEqual(expectedActions)
    }))
  });
  it('test post request error', () => {
    fetchMock.mock("http://localhost:3001/postCards", 404);

    const expectedActions = {
      type:"POST_ERROR",
    };
    const store = mockStore({});

    return store.dispatch(selectCardsPostData(() => {

      expect(store.getActions()).toEqual(expectedActions)
    }))
  });
});
