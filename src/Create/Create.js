import React, { Component } from 'react';
import './Create.css';
import axios from 'axios';
import { web3, createAccount } from '../web3.js';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.create = this.create.bind(this);
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
      <div className="Create">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 form-group-lg">
              <form>
              <div class="form-group">
                <label class="form-check-label">Address</label>
                <input type="text" class="form-control" placeholder="" class='address' ref='address' id='address'/>
              </div>
                <div class="form-group">
                  <button type="button" Value='Send' class="btn btn-primary" onClick={()=>this.create()}>Send</button>
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
