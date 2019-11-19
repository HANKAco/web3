import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Search from './Search/Search';
import Header from './Header/Header';
import Transactions from './Transactions/Transactions';
import Overview from './Overview/Overview';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Search />, document.getElementById('search'));
ReactDOM.render(<Overview />, document.getElementById('overview'));
ReactDOM.render(<Transactions />, document.getElementById('transactions'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
