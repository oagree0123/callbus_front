import './App.css';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from '../redux/configStore';
import { Home, PostDetail, PostWrite } from '../pages';
import { useEffect } from 'react';

function App() {
  return (
    <AppWrap className="App">
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/community/list" exact component={Home} />
          <Route path="/community/post/new" exact component={PostWrite} />
          <Route path="/community/post/:post_pk" exact component={PostDetail} />
        </Switch>
      </ConnectedRouter>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
