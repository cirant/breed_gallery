import React from 'react';
import actions from '../actions';
import {
  GlobalDispatchContext
} from '../context';


export const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_COLUMN: {
      return {
        ...state,
        column: action.value
      }
    }
    case actions.SET_BREED_LIST: {
      return {
        ...state,
        breedsList: action.value
      }
    }
    case actions.SET_GALLERY_LIST: {
      return {
        ...state,
        pictureList: action.value
      }
    }
    default: {
      return state
    }
  }
}

export const useGlobalDispatch = () => {
  const context = React.useContext(GlobalDispatchContext);

  if (context === undefined) throw new Error('[useGlobalDispatch] context undefined');

  return context;
}