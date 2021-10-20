import { createStore, Reducer } from 'redux';

export const ACTION = {
  TWEET: {
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
  }
};

export const initialState = {
  tweet: ''
}

export const reducer: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION.TWEET.UPDATE:
      return {
        tweet: action.text
      };
    case ACTION.TWEET.DELETE:
      return {
        tweet: ''
      };
    default:
      return state;
  }
}

export default createStore(reducer);
