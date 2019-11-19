import React from 'react';
import './Overview.css';

function Overview() {
  return (
    <div class='container'>
      <div class='overview'>
        <div class='row'>
          <div class="col">
            <div class='card' >
              <div class="card-header">Overview</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id='bal'>Balance: ... Ether</li>
                  <li class="list-group-item" id='val'>Value: $...</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Overview;
