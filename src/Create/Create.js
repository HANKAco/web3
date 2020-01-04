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
              <form>
                <div class='card-body'>
                  <h5 class="card-title">Account</h5>
                  <p class='card-text'>be aware this will generate a private key</p>
                  <button type="button" Value='Send' class="btn btn-primary" onClick={()=>this.create()}>Create</button>
                  {this.state.acc.map((item) => {
                    return (
                        <ul class="list-group">
                          <label class="list-group-item list-header">Address</label>
                          <li class="list-group-item">{item.address}</li>
                          <br></br>
                          <label class="list-group-item list-header">Private Key (keep this secure)</label>
                          <li class="list-group-item">{item.privateKey}</li>
                        </ul>
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
