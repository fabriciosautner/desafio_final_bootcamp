import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from 'routes/history';

import './config/reactotron';
import GlobalStyle from 'styles/global';

import Routes from 'routes';
import { Wrapper, Container, Content } from 'styles/components';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Wrapper>
          <GlobalStyle />
          <Container>
            <Content>
              <Routes />
            </Content>
          </Container>
        </Wrapper>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
