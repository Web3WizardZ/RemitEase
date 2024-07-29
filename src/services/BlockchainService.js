import Web3 from 'web3';
import { abi, address } from './RemittanceContract';

const web3 = new Web3(Web3.givenProvider);

export const getBalance = async (account) => {
  const contract = new web3.eth.Contract(abi, address);
  return await contract.methods.getBalance().call({ from: account });
};

export const deposit = async (account, amount) => {
  const contract = new web3.eth.Contract(abi, address);
  await contract.methods.deposit().send({ from: account, value: web3.utils.toWei(amount, 'ether') });
};

export const withdraw = async (account, amount) => {
  const contract = new web3.eth.Contract(abi, address);
  await contract.methods.withdraw(web3.utils.toWei(amount, 'ether')).send({ from: account });
};
