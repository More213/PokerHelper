import React from 'react';
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getNews} from "../../actions/cardDeck";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('test asinc respons', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore()
  });

  it('creates NEWS_GET_SUCCESS when fetching news has been done', () => {
    fetchMock.mock("http://localhost:3001/getDeck", {
      headers: { 'content-type': 'application/json' },
      body: { data: [
          {value: 3, suit: '♦'},
          {value: 4, suit: '♦'},
          {value: 2, suit: '♦'}], status: 'ok' },
    });

    const expectedActions = {
      type:"CARDS_FETCH",
      cardsDeck: [
        {value: 3, suit: '♦'},
        {value: 4, suit: '♦'},
        {value: 2, suit: '♦'},],
    };


    const store = mockStore({});

    return store.dispatch(getNews(() => {

      expect(store.getActions()).toEqual(expectedActions)
    }))
  });
  it('creates NEWS_GET_SUCCESS when fetching news has been done', () => {
    fetchMock.mock("http://localhost:3001/getDeck", 500);

    const expectedActions = {
      type:"ERROR_FETCH",
    };
    const store = mockStore({});

    return store.dispatch(getNews(() => {

      expect(store.getActions()).toEqual(expectedActions)
    }))
  });
});
