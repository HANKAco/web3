import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import { web3, Balance, createAccount, gasPrice } from '../web3.js';
import { faHome, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], tx: [] };

    this.search = this.search.bind(this)
    this.transaction_history = this.transaction_history.bind(this)
  }

  transaction_history (address) {
    try {
      axios.get('http://api.etherscan.io/api?module=account&action=txlist&address='+address+'&startblock=0&endblock=99999999&sort=asc&apikey=HDK2UGQ7N2KCMKSI268FKSSAV89T8UWAUC')
      .then((res) => {
        for(var i = 0; i < res.data.result.length; i++){
          var gas = res.data.result[i].gasPrice;
          var used = res.data.result[i].gasUsed;
          var date = new Date(res.data.result[i].timeStamp*1000);
          var string_fee = (gas*used).toString();
          var fee = web3.utils.fromWei(string_fee, 'ether');
          this.state.tx.push({
            // convert from utc time
            time: date.toDateString(),
            block: res.data.result[i].blockNumber,
            hash: res.data.result[i].hash,
            from: res.data.result[i].from,
            to: res.data.result[i].to,
            value: res.data.result[i].value,
            fee: fee
          })
        }
        this.setState({tx: this.state.tx})
      });
    } catch (err){
        console.log(err)
    }
  }

  async search(e) {
    try {
      Balance(e)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const { showing } = this.state;
    return (
      <div className="App">
        <div class='card-body'>
          <input type="text" placeholder="Search by address" class='search' onBlur={(e)=>{this.transaction_history(e.target.value);}}/>
        </div>
        <div class='zzzz'>
        <div class='card-body'>
          <div class='table-responsive mb-2 mb-md-0'>
            <table class ='table table-hover txTable' align="center">
              <thead class='thead-light'>
                <tr>
                  <th scope="col" class='date'>Date</th>
                  <th scope="col" class='date'>Block</th>
                  <th scope="col" class='date'>Txn #</th>
                  <th scope="col" class='date'>From</th>
                  <th scope="col" class='date'>To</th>
                  <th scope="col" class='date'>Amount</th>
                  <th scope="col" class='date'>Txn Fee</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.tx.map((item) => {
                    return (
                      <tr>
                        <td class="d-none d-sm-table-cell time1">{item.time}</td>
                        <td class="d-none d-sm-table-cell time">{item.block}</td>
                        <td class="d-none d-sm-table-cell time"><a class="hash-tag text-truncate" href="/">{item.hash}</a></td>
                        <td class="d-none d-sm-table-cell time"><a class="hash-tag text-truncate" href="/">{item.from}</a></td>
                        <td class="d-none d-sm-table-cell time"><a class="hash-tag text-truncate" href="/">{item.to}</a></td>
                        <td class="d-none d-sm-table-cell time">{item.value} Ether</td>
                        <td class="d-none d-sm-table-cell time">{item.fee}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default App;
