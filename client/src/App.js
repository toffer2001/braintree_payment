import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';

const App = () => (
  <>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Container>
  </>
)

export default App;
