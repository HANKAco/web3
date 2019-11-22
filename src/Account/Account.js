import React, { Component } from 'react';
import './Account.css';
import axios from 'axios';
import { web3, getBalance_address, createAccount, gasPrice } from '../web3.js';
import { faHome, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Account extends Component {

  render() {
    return (
      <div className="Account">
        <div class='card-body'>
          account
        </div>
      </div>
    );
  }
}
export default Account;
