import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainView from './containers/mainView';
import { GlobalProvider } from './providers';


function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalProvider>
        <MainView />
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
