import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App = () => (
  <Provider store={store}>
    <h1>fluxWithRedux</h1>
  </Provider>
);

export default App;
