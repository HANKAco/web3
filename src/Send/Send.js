import React, { Component } from 'react';
import './Send.css';
import axios from 'axios';
import { web3, getBalance_address, createAccount, gasPrice, sendEther, signedin, estimate } from '../web3.js';
import { faHome, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Send extends Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.send_eth = this.send_eth.bind(this);
    this.from_addr = this.from_addr.bind(this);
    this.create = this.create.bind(this);
  }

  async send_eth(from,to,amount,gas) {
    try {
      sendEther(from,to,amount,gas);
    } catch (err) {
      console.log(err)
    }
  }

  async from_addr() {
    try {
      signedin();
    } catch (err) {
      console.log(err)
    }
  }

  async create() {
    try {
      createAccount();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    this.create();
    return (
      <div className="Send">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 form-group-lg">
              <form>
              <div class="form-group">
                <label class="form-check-label">From</label>
                <input type="text" class="form-control" placeholder="" class='from' ref='from' id='from'/>
              </div>
              <div class="form-group">
                <label class="form-check-label" id='privatelbl'>Private Key</label>
                <input type="text" class="form-control" placeholder="" class='private' ref='private' id='private'/>
              </div>
                <div class="form-group">
                  <label class="form-check-label">To</label>
                  <input type="text" class="form-control" placeholder="" class='to' ref='to'/>
                </div>
                <div class="form-group">
                  <label class="form-check-label">Amount</label>
                  <input type="text" class="form-control" placeholder="" class='amount' ref='amount'/>
                </div>
                <div class="form-group">
                  <label class="form-check-label">Total:</label>
                </div>
                <div class="form-group">
                  <button type="button" Value='Send' class="btn btn-primary" onClick={()=>this.send_eth(this.refs.from.value,this.refs.to.value,web3.utils.toWei(this.refs.amount.value, "ether"),this.refs.gas.value)}>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Send;
