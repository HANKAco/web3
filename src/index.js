import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App/App';
import Account from './Account/Account';
import Send from './Send/Send';
import * as serviceWorker from './serviceWorker';
import { faHome, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const routing = (
  <Router>
    <div>
      <div class='nav'>
        <ul class="nav flex-column sidenav">
          <li class="nav-item">
              <span class="oi oi-grid-four-up"></span>
              <FontAwesomeIcon icon={faHome}/>
              <Link to="/" class="">home</Link>
          </li>
          <li class="nav-item">
              <span class="oi oi-grid-four-up"></span>
              <FontAwesomeIcon icon={faLock}/>
              <Link to="/send" class="">send</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={App} />
      <Route path="/account" component={Account} />
      <Route path="/send" component={Send} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
