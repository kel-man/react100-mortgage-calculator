import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: "",
      payment: "",
      term: "15",
      rate: ""
    };
      
      this.handleBalanceClick = this.handleBalanceClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRateClick = this.handleRateClick.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
  }
    
  handleSubmit(e) {
    e.preventDefault();
    var rate = Number(this.state.rate)/100/12;
    var balance = Number(this.state.balance);
    var term = Number(this.state.term)*12;
    var paymentDue = Number((balance*((rate*Math.pow((1+rate ),term ))/(Math.pow(1+rate,term)-1)))).toFixed(2);
    this.setState({payment: paymentDue});
  }

  handleRateClick(e) {
    this.setState({ 
      rate: (e.target.value)
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
        <h3>Mortgage Calculator</h3>
        <form className='form'  onSubmit={this.handleSubmit}>
          <input className='balance' name='balance' type='number' placeholder='Balance: ' value={this.state.balance} 
            onChange={this.handleBalanceClick} />
          <input className='rate' name='rate' type='number' placeholder='Rate: ' step='0.01' value={this.state.rate}
            onChange={this.handleRateClick} />
          <select className='term' name='term' onChange={this.handleSelect} type='number' value={this.state.term}>
            <option value='15'>15 years</option>
            <option value='30'>30 years</option>
          </select>
          <button type='submit' name='submit' className='submit' id='submit'>Calculate Payment!</button>
        </form>
          <div className='output' id='output' name='output'>Payment Due: {this.state.payment}</div>
      </div>
    ); 
  }



}

export default App;
