import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class BraintreeDrop extends Component {
  state = { 
    loaded: false, 
    token: '',
    redirect: false,
    transactionId: '', 
  }

  componentDidMount() {
    axios.get('/api/braintree_token')
      .then( res => {
        this.setState({ token: res.data, loaded: true })
      })
      .catch( err => {
        console.log(err)
      })
  }

  handlePayment = (payload) => {
    const { amount } = this.props;

    axios.post('/api/payment', { amount, ...payload })
      .then( res => {
        this.setState({ transactionId: res.data, redirect: true })
      })
      .catch( err => {
        console.log('payment not made')
        window.location.reload()
      })
  }

  render() {
    const { loaded, token, transactionId, redirect } = this.state;
    const { amount } = this.props
    if(redirect) 
      return (
        <Redirect to={{
            pathname: '/payment_success',
            state: { amount, transactionId }
          }}
        />
      )
    if(loaded)
      return(
        <Segment basic textAlign='center'>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePayment}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      )
    else 
      return (
        <Dimmer active>
          <Loader>
            Loading Payment, please wait...
          </Loader>
        </Dimmer>
      )
  }
}

export default BraintreeDrop;