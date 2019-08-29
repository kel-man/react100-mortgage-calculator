import React from 'react';
import ReactDOM from 'react-dom';
 
function calculate(balance, rate, term){
  //monthly payment = principal*(rate*(1+rate)^#ofpayments)/((1+rate)^#ofpayments)-1)
  //needs to return an html value that will do something useful
  /*balance = 0;
  rate = this.props.rate;
  term = this.props.term;*/

  paymentDue = balance * ( ( rate * ( 1 + rate ) ^ term ) / ( ( 1 + rate ) ^ term ) - 1 );
  return paymentDue;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance : 0,
      rate : 0,
      term : 0
    };
  }

  render() {
    return (
      <div className='container'>
        <form className='form'>
          <input className='balance' type='number' placeholder='Balance: ' />
          <input className='rate' type='number' placeholder='Rate: ' step='0.01'/>
          <select className='term'>
            <option value='15'>15 months</option>
            <option value='30'>30 months</option>
          </select>
          <button className='submit' id='submit' onclick='calculate(balance, rate, term)'>Calculate Payment!</button>
            <div className='output' id='output' >Payment due: </div>
        </form>
      </div>
    ); 
  }
}
