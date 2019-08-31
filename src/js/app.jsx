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
  //#output.innerHTML(paymentDue);
  return <div>{paymentDue}</div>;*/
  //}
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        balance: "",
        payment: "",
        term: "",
        rate: ""
      };
      
      this.handleBalanceClick = this.handleBalanceClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRateClick = this.handleRateClick.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSubmit(e) {
      e.preventDefault();
      var rate = Number(this.state.rate)/12;
      var balance = Number(this.state.balance);
      var term = Number(this.state.term);
      var paymentDue = (
        balance * (
          (rate * Math.pow(( 1 + rate ) , term )) / (Math.pow(  1 + rate , term ) - 1 )));
      this.setState({payment: paymentDue});
      console.log(this.state);
  }

  handleRateClick(e) {
    this.setState({ 
      rate: e.target.value
    });
  }

  handleBalanceClick(e) {
    this.setState({
      balance: e.target.value
    });
  }

  handleSelect(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <div className='container'>
        <form className='form'  onSubmit={this.handleSubmit}>
          <input className='balance' type='number' placeholder='Balance: ' value={this.state.balance} 
            onChange={this.handleBalanceClick} />
          <input className='rate' type='number' placeholder='Rate: ' step='0.01' value={this.state.rate}
            onChange={this.handleRateClick} />
          <select className='term' onChange={this.handleSelect} type='number' value={this.state.term}>
            <option value='15'>15 months</option>
            <option value='30'>30 months</option>
          </select>
          <button type='submit' className='submit' id='submit'  >Calculate Payment!</button>
        </form>
          <div className='output' id='output' >Payment Due: {this.state.payment}</div>
      </div>
    ); 
  }



}


export default App;