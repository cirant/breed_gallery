import React from 'react';
import {
  render
} from '@testing-library/react';
import MainView from '../mainView';
import { breedStore } from '../../store';
import {
  GlobalStateContext,
  GlobalDispatchContext
} from '../../context';

jest.useFakeTimers();

const dispatch = jest.fn();

describe('MainView Component', () => {

  test('TEST component must be mounted', () => {
    const { getByText } = render(
      <GlobalStateContext.Provider value={breedStore} >
        <GlobalDispatchContext.Provider value={dispatch}>
          <MainView />
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    );

    const header = getByText(/Breeds selected/g);
    const text = getByText(/Gallery empty. Please select a breed/g);
    expect(header).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    setTimeout(() => {
      expect(dispatch).toBeCalled();
    }, 1000)
  });

})
