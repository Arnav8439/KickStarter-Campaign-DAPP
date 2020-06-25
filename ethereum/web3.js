import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !=='undefined'){
    // we are in thr browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
}
else{
    // we are on the server or the user is not running the metamask
   const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/86c35159806a4f79a7ea3ac5d4f26ebb'
   );
   web3 = new Web3(provider);
}

export default web3;
