
import React from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

const App = () => (
    <Provider store={createStore(reducers)}>
      <Container style={{ flex: 1 }}>
        <Header headerText='TechStack' />
        <LibraryList />
      </Container>
    </Provider>
  );

export default App;
