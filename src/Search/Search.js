import React from 'react';
import './Search.css';
import Web3 from 'web3'
import axios from 'axios'
const web3 = new Web3(window.web3.currentProvider);

const search = (address) => {
  web3.eth.getBalance(address)
      .then(function(balance) {
        balance = web3.utils.fromWei(balance, 'ether')
        console.log(balance)
        document.getElementById('bal').value = balance
        document.getElementById('address').value = ''
      });
}

function Search() {
  return (
    <div class='search'>
      <div class='container'>
        <div class='card'>
          <div class='card-body'>
            <div class='search input-group input-group-main'>
              <form class='w-100'>
                <input type='text' id='address' class='form-input' placeholder='Search by address' onBlur={(e)=>search(e.target.value)}></input>
                <span id='btn_span'>
                  <input type='submit' class="btn btn-primary form-input p-1" value='Search' id='btn_search'></input>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Search;
