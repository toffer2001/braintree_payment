import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

// this.props.location.state.amount
const PaymentSuccess = ({ location: { state } }) => {
  if(state && state.transactionId)
    return(
      <Segment basic textAlign='center'>
        <Header>Thank you for your Purchase</Header>
        <p>You have been charged: { state.amount } </p>
        <p>Your Transaction id: { state.transactionId } </p>
        <Link to='/'>Start Over</Link>
      </Segment>
    )
  else
    return(
      <Redirect to='/' />
    )
}

export default PaymentSuccess;