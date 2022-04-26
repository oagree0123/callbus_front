import './App.css';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from '../redux/configStore';

function App() {
  return (
    <AppWrap className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route paht="/" exact />
        </Switch>
      </ConnectedRouter>
    </AppWrap>
  );
}

const AppWrap = styled.div``;

export default App;
