import React from 'react';

class PiggyBank extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    this.deposit = this.deposit.bind(this);
  }

  deposit() {
    this.setState({total: this.state.total + 1});
  }

  render() {
    return (
      <div>
        <h1> This {this.props.name}'s PiggyBank</h1>
        <p>You have £{this.state.total}</p>
        <button onClick={this.deposit}> Deposit </button>
      </div>
    )
  }
}
export default PiggyBank;
