import React, { Component } from 'react';
import './Send.css';
import axios from 'axios';
import { web3, getBalance_address, createAccount, gasPrice } from '../web3.js';
import { faHome, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Send extends Component {
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

  async create_acc() {
    try {
      createAccount();
    } catch (err) {
      console.log(err)
    }
  }
  async gas_price() {
    try {
      gasPrice();
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="Send">
        <div class='card-body'>
          send
        </div>
      </div>
    );
  }
}
export default Send;
