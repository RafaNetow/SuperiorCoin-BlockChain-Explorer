import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import BootstrapTable from 'reactjs-bootstrap-table';
import _ from "lodash";
const products = [];
const baseUrl = 'http://superior-coin.com:8081/api';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currency: {},
      tableData: [{ 
        hieght: '14567',
        txs:'1',
        time:'11:2700 am',
        hash: 'avn12c9s8ds9df8v8v90b0asd09b09asd890asd890',
        age: '200'  
      }],
      tableColumns: [ {name: 'hieght'},
      {name: 'txs'},
      {name: 'time'},
      {name: 'hash'},
      {name: 'age'}
    ]
    };
   this.transaction = this.transaction.bind(this)
  }
  

  componentDidMount() {
    this.transaction(0,100);
    /*
    let transactionPromese = this.transaction(0,100);
    let blocksArray = [];
    transactionPromese.then(function(result) {
      _.forEach(result.data.blocks, function(block){
        blocksArray.push({
          age: block.age,
          hash:block.hash,
          height:block.height,
          time: block.timestamp_utc,
          txs: block.txs.length        
        });
        });  */
 };
 /*
  
  blockForNumber(numberOfBlock){
    fetch(`http://superior-coin.com:8081e/api/block/${numberOfBlock}`, {
      Accept: 'application/json'
    })
      .then(res => res.json())
      .then( (responseJson) => {
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
    });
  }

  Mempool(limit){
    fetch(`http://superior-coin.com:8081/api/mempool?limit=${limit}`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
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

  networkInfo(item){
    fetch(`http://superior-coin.com:8081/api/networkinfo`, {
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then( (responseJson) => {
      console.log(responseJson);
    });
  }

  */
   
 
  transaction (pageNumber, limit) {
  const transactionUrl = `${baseUrl}/transactions?page=${pageNumber}&limit=${limit}`
  const that = this;
    fetch(transactionUrl)
      .then(res => res.json())
      .then((transactionResponse) => {
        const tableData = [];
        _.forEach(transactionResponse.data.blocks, function(block){
          tableData.push({
            age: block.age,
            hash:block.hash,
            hieght:block.height,
            time: block.timestamp_utc,
            txs: block.txs.length        
          });

        that.setState( {tableData })
      });
    });
  }
    
  render() {
    const { tableData } = this.state;
    console.log(tableData);
    return (
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Superior Coin</h1>
        </header>
        <p className="App-intro">
        </p>
        <BootstrapTable columns={this.state.tableColumns} data={tableData} headers={true}/>
      </div>
    );
  }
  


  
}


export default App;
