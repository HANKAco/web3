import React from 'react';
import './Transactions.css';

function Transactions() {
  const test = () => {
    console.log('hello')
  }

  return (
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
                <tr>
                  <td class="d-none d-sm-table-cell crop"></td>
                  <td class="d-none d-sm-table-cell"></td>
                  <td class="d-none d-sm-table-cell"></td>
                  <td class="d-none d-sm-table-cell"></td>
                  <td class="d-none d-sm-table-cell"></td>
                  <td class="d-none d-sm-table-cell">Ether</td>
                  <td class="d-none d-sm-table-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
