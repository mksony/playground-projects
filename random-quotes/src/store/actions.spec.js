import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as quotes from '../api/quotes';
import { REQUEST_QUOTE, RECEIVE_QUOTE, FAIL_TO_LOAD_QUOTE } from './actionTypes';
import { requestQuote, receiveQuote, failToLoadQuote, loadQuote } from './actions';
import { initialState } from './reducer';

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);
const store = createMockStore(initialState);

beforeEach(() => {
  store.clearActions();
});

describe('requestQuote()', function () {
  it('should dispatch action of type REQUEST_QUOTE', function () {
    const expected = {
      type: REQUEST_QUOTE,
    };

    store.dispatch(requestQuote());
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
})

describe('receiveQuote()', function () {
  it('should dispatch action of type RECEIVE_QUOTE', function () {
    const quote = {
      text: 'Hello World',
      author: 'John Doe',
    };
    const expected = {
      type: RECEIVE_QUOTE,
      ...quote,
    };

    store.dispatch(receiveQuote(quote));
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
});

describe('failToLoadQuote()', function () {
  it('should dispatch action of type FAIL_TO_LOAD_QUOTE', function () {
    const expected = {
      type: FAIL_TO_LOAD_QUOTE,
      errorMessage: 'Something went wrong, please try again.',
    };

    store.dispatch(failToLoadQuote());
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
});

describe('loadQuote()', function () {
  it('should dispatch receive quote on success', function () {
    const quote = {
      text: 'Hello World',
      author: 'John Doe',
    };

    quotes.getRandomQuote = jest.fn(() => {
      return Promise.resolve({
        content: quote.text,
        title: quote.author,
      });
    });

    const expected = [
      {
        type: REQUEST_QUOTE,
      },
      {
      type: RECEIVE_QUOTE,
      ...quote,
      },
    ];

    store.dispatch(loadQuote()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expected);
    });
  });
})