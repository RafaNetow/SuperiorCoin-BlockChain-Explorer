import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Superior Coin</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
  
  blockForNumber(numberOfBlock){
    fetch(`http://superior-coin.com:8081e/api/block/${numberOfBlock}`, {
      Accept: 'application/json'
    })
      .then(res => res.json())
      .then( (responseJson) => {
        console.log(responseJson);
      })
  }

  

  transactions (numerOfPage,limit){
    fetch(`http://superior-coin.com:8081/api/transactions?page=${numerOfPage}&limit=${limit}`, {
      Accept: 'application/json'
    })
      .then(res => res.json())
      .then( (responseJson) => {
        console.log(responseJson);
      })
  }

  InformationOfTransaction(hash){
    fetch(`http://superior-coin.com:8081/api/transaction/${hash}`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  InformationOfTransaction(hash){
    fetch(`http://superior-coin.com:8081/api/transaction/${hash}`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  Mempool(){
    fetch(`http://superior-coin.com:8081/api/mempool/`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  Mempool(limit){
    fetch(`http://superior-coin.com:8081/api/mempool?limit=${limit}`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  SearchForBlockNumberBlockHashOrTxtHash(item){
    fetch(`http://superior-coin.com:8081/api/search/${item}`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  SearchForBlockNumberBlockHashOrTxtHash(item){
    fetch(`http://superior-coin.com:8081/api/search/${item}`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  SearchForBlockNumberBlockHashOrTxtHash(item){
    fetch(`http://superior-coin.com:8081/api/networkinfo`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }


 

  ///api/mempool

  componentDidMount() {
  
    console.log("Testing this");
  }
}


export default App;
