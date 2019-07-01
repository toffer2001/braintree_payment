import React, { Component } from 'react';
import { Header, Segment, Input, Label, Divider, Icon } from 'semantic-ui-react';

class Home extends Component {
  state = { amount: 150.5 };

  render() {
    const { amount } = this.state;

    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>React Payments</Header>
        <Icon name='payment' size='huge' />
        <br />
        <Label color='green'>Payment Amount</Label>
        <br />
        <br />
        <Input value={amount} disabled style={{ fontSize: '18px' }} />
        <Divider />
      </Segment>
    );
  }
}

export default Home;