import React from 'react';
import { breedStore } from '../store';
import { globalReducer } from '../reducers';
import {
  GlobalStateContext,
  GlobalDispatchContext
} from '../context';

class GlobalError extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  componentDidCatch() {
    this.setState({ error: true })
  }

  render() {
    const { error } = this.state;

    if (error) return <div>Ups... something happened, please reload the page</div>

    return this.props.children;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(globalReducer, breedStore);
  return <GlobalError>
    <GlobalStateContext.Provider value={state} >
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  </GlobalError>
}