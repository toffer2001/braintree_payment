import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import PaymentSuccess from './components/shared/PaymentSuccess';

const App = () => (
  <>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/payment_success' component={PaymentSuccess} />
      </Switch>
    </Container>
  </>
)

export default App;