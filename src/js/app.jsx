import React from 'react';
import ReactDOM from 'react-dom';
 
//function calculate(balance, rate, term){
  //monthly payment = principal*(rate*(1+rate)^#ofpayments)/((1+rate)^#ofpayments)-1)
  //needs to return an html value that will do something useful
  /*balance = 0;
  rate = this.props.rate;
  term = this.props.term;*/
  /*balance = this.balance;
  rate = this.rate;
  term = this.term;
  const paymentDue = (balance * ( ( rate * ( 1 + rate ) ^ term ) / ( ( 1 + rate ) ^ term ) - 1 ));
  //#output.innerHTML(paymentDue);
  return <div>{paymentDue}</div>;*/
//}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.balance = "";
    this.handleBalanceClick = (e) => {
      this.balance = e.target.value;
      console.log('I was clicked!');
    }
    this.handleRateClick = (a) => {
      this.rate = a.target.value;
      console.log('Rate was clicked!');
    }
    this.handleSubmit = (i) => {
      this.calculatePayment
      console.log('Submitted!');
    }

  }

  render() {
    return (
      <div className='container'>
        <form className='form'>
          <input className='balance' type='number' placeholder='Balance: ' value={this.balance} 
            onChange={this.handleBalanceClick} />
          <input className='rate' type='number' placeholder='Rate: ' step='0.01' value={this.rate}
            onChange={this.handleRateClick} />
          <select className='term'>
            <option value='15'>15 months</option>
            <option value='30'>30 months</option>
          </select>
          <button className='submit' id='submit' onChange={this.handleSubmit} >Calculate Payment!</button>
            <div className='output' id='output' >Payment due: </div>
        </form>
      </div>
    ); 
  }



}
