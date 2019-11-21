import React, { Component } from 'react';
import './App.css';
import { getBalance_address, transaction_history } from '../web3.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    this.search = this.search.bind(this)
  }

  async search(e) {
      try {
        getBalance_address(e)
      } catch (err) {
        console.log(err)
      }
  }

  async transaction(e) {
      try {
        transaction_history(e)
      } catch (err) {
        console.log(err)
      }
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Address" onBlur={(e)=>this.search(e.target.value),(e)=>this.transaction(e.target.value)}/>
      </div>
    );
  }
}
export default App;
