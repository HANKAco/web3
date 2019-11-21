import React, { useState } from 'react';
import './Search.css';
import Web3 from 'web3'
import axios from 'axios'
const web3 = new Web3(window.web3.currentProvider);

function Search() {
  const [account, setAccount] = useState({
    info:[]
  });
  const [transaction, setTrans] = useState({
    tx: []
  })
  const search = (address) => {
    web3.eth.getBalance(address)
        .then(function(balance) {
          balance = web3.utils.fromWei(balance, 'ether')
          console.log(balance)
          const bal = account.info = balance;
          // axios.get
          axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=HDK2UGQ7N2KCMKSI268FKSSAV89T8UWAUC')
          .then((res) => {
            const price = res.data.result.ethusd
            const val = account.info = price * balance;
            setAccount({info: [bal,val]});
          })
          document.getElementById('address').value = ''
        });
  }
  const trans = (address) => {
        axios.get('http://api.etherscan.io/api?module=account&action=txlist&address='+address+'&startblock=0&endblock=99999999&sort=asc&apikey=HDK2UGQ7N2KCMKSI268FKSSAV89T8UWAUC')
        .then((res) => {
          let tx = [];
          for(var i = 0; i < res.data.result.length; i++){
            console.log(res.data)
            var gas = transaction.tx = res.data.result[i].gasPrice;
            var used = transaction.tx = res.data.result[i].gasUsed;
            tx.push({
              time: res.data.result[i].timeStamp,
              block: res.data.result[i].blockNumber,
              hash: res.data.result[i].hash,
              from: res.data.result[i].from,
              to: res.data.result[i].to,
              value: res.data.result[i].value,
              fee: (gas*used)
            })
            setTrans({tx: tx});
          }
        });
  }
  return (
    <div class=''>
      <div class='container'>
        <div class='card'>
          <div class='card-body'>
            <div class='search input-group input-group-main'>
              <form class='w-100'>
                <input type='text' id='address' class='form-input' placeholder='Search by address' onBlur={(e)=>search(e.target.value),(e)=>trans(e.target.value)}></input>
                <span id='btn_span'>
                  <input type='submit' class="btn btn-primary form-input p-1" value='Search' id='btn_search'></input>
                </span>
              </form>
            </div>
          </div>
        </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class="col">
              <div class='card'>
                <div class="card-header">Overview</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item" id='bal'>Balance: {account.info[0]}</li>
                      <li class="list-group-item" id='val'>Value: {account.info[1]}</li>
                    </ul>
                  </div>
                </div>
          </div>
        </div>
        <div class='container'>
          <div class='row'>
            <div class="col">
              <div class='card'>
                <div class="card-header">Transactions</div>
                <table class ='table table-hover view'>
                  <thead class='thead-light'>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Block</th>
                      <th scope="col">Txn #</th>
                      <th scope="col">From</th>
                      <th scope="col">To</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Txn Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                      {transaction.tx.map((item) => {
                        return (
                          <tr>
                            <td class="d-none d-sm-table-cell crop">{item.time}</td>
                            <td class="d-none d-sm-table-cell crop">{item.block}</td>
                            <td class="d-none d-sm-table-cell crop">{item.hash}</td>
                            <td class="d-none d-sm-table-cell crop">{item.from}</td>
                            <td class="d-none d-sm-table-cell crop">{item.to}</td>
                            <td class="d-none d-sm-table-cell crop">{item.value} Ether</td>
                            <td class="d-none d-sm-table-cell crop">{item.fee}</td>
                          </tr>
                      );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}


export default Search;
