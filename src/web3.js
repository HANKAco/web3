import Web3 from 'web3';
let provider;

if (window.web3 && window.web3.currentProvider) {
  provider = window.web3.currentProvider;
}

window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    console.log('web3 is enabled')
    if (web3.currentProvider.isMetaMask === true) {
      console.log('MetaMask is active')
    } else {
      console.log('MetaMask is not available')
    }
  } else {
    console.log('web3 is not found')
  }
})

export const web3 = new Web3(provider);
  window.addEventListener('load', async () => {
    try {
     await web3.enable();
    } catch (error) {}
});

export const getBalance_address = (address) => {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(address)
    .then(function(balance) {
      balance = web3.utils.fromWei(balance, 'ether')
      console.log(balance)
    });
  });
};

export const createAccount = () => {
  return new Promise((resolve, reject) => {
    let get_accounts = [];
    var private_accounts = [];
    var acc = web3.eth.accounts.create();

    private_accounts.push({
      public: acc.address,
      private: acc.privateKey
    })

    web3.eth.getAccounts()
    .then(function(val) {
      get_accounts.push(val)
    });
  });
};

export const gasPrice = () => {
  return new Promise((resolve, reject) => {
    web3.eth.getGasPrice()
    .then(function(val) {
       var gas = [val]
    });
  });
};

export const sendEther = (from,to,amount,gas) => {
  return new Promise((resolve, reject) => {
    web3.eth.sendTransaction({
      from: from,
      to: to,
      amount: amount,
      gas: gas
    })
  });
};

export const estimate = (from, to, value) => {
  return new Promise((resolve, reject) => {
    web3.eth.estimateGas({
      from: from,
      to: to,
      value: value
    })
    .then(console.log)
  });
};

/* IF METAMASK IS REGISTERED THE CURRENT ACCOUNT ADDRESS WILL BE SET TO THE FROM VALUE */
export const signedin = () => {
  web3.eth.getCoinbase()
  .then(addr => {
    if(addr) {
      document.getElementById('from').disabled = true
      document.getElementById('from').value = addr
    } else {
      document.getElementById('privatelbl').style.display = 'table-cell'
      document.getElementById('private').style.display = 'block'
      console.log('NO METAMASK')
    }
  });
};
