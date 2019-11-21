import Web3 from 'web3';
import axios from 'axios';
let provider;
if (window.web3 && window.web3.currentProvider) {
  provider = window.web3.currentProvider;
} else {
  console.log('install metamask')
}

export const web3 = new Web3(provider);

export const getBalance_address = (address) => {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(address)
    .then(function(balance) {
      balance = web3.utils.fromWei(balance, 'ether')
      console.log(balance)
    });
  });
};
 export const transaction_history = (address) => {
        axios.get('http://api.etherscan.io/api?module=account&action=txlist&address='+address+'&startblock=0&endblock=99999999&sort=asc&apikey=HDK2UGQ7N2KCMKSI268FKSSAV89T8UWAUC')
        .then((res) => {
          let transaction = [];
          for(var i = 0; i < res.data.result.length; i++){
            console.log(res.data)
            var gas = res.data.result[i].gasPrice;
            var used = res.data.result[i].gasUsed;
            transaction.push({
              time: res.data.result[i].timeStamp,
              block: res.data.result[i].blockNumber,
              hash: res.data.result[i].hash,
              from: res.data.result[i].from,
              to: res.data.result[i].to,
              value: res.data.result[i].value,
              fee: (gas*used)
            })
          }
        });
  }
