import React, { Component } from 'react';
import './Create.css';
import axios from 'axios';
import { web3, createAccount } from '../web3.js';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { acc: [] };
    this.create = this.create.bind(this);
  }
  async create() {
    var acc = web3.eth.accounts.create();

    this.state.acc.push({
      address: acc.address,
      privateKey: acc.privateKey
    })
    this.setState({acc: this.state.acc})
  }

  render() {
    return (
      <div className="Create">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 form-group-lg">
              <button type="button" Value='Send' class="btn btn-primary" onClick={()=>this.create()}>Create</button>
              <form>
                <div class='card-body'>
                  <h5 class="card-title">Account</h5>
                  <p>be aware this will generate a private key</p>
                  {this.state.acc.map((item) => {
                    return (
                      <p>
                        <ul>
                          <label>Address</label>
                          <li>{item.address}</li>
                          <br></br>
                          <label>Private Key</label>
                          <li>{item.privateKey}</li>
                        </ul>
                      </p>
                    );
                  })}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
