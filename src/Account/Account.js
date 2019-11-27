import React, { Component } from 'react';
import './Account.css';
import axios from 'axios';
import { web3, accountList } from '../web3.js';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.account_list = this.account_list.bind(this);
  }

// METAMASK CURRENTLY ONLY GETS THE ACCOUNT LOGGED IN. DOC SAYS OTHERWISE: https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html

account_list () {
  web3.eth.getAccounts()
  .then((res) => {
    this.state.list.push({
      account: res
    })
  this.setState({list: this.state.list})
  });
}

componentDidMount() {
  this.account_list();
}
  render() {
    return (
      <div className="Account">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 form-group-lg">
              <div class='card-body'>
                <h5 class="card-title">metamask accounts</h5>
                {this.state.list.map((item) => {
                  return (
                    <p>
                      <ul>
                        <li>{item.account}</li>
                      </ul>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Account;
