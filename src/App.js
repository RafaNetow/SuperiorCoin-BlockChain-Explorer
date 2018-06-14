import React, { Component } from 'react';
import logo from './sup-logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import _ from "lodash";
const products = [];
const baseUrl = 'http://superior-coin.com:8081/api';
const blockArray = [];

class App extends Component {

  constructor() {

    super();
    this.state = {
      currentPage: 0,
      currency: {},
      tableData: [],
      tableColumns: [{ dataField: 'hieght', text: 'Height', filter: textFilter() },
      { dataField: 'size', text: 'Size' },
      { dataField: 'txs', text: 'Tx' },
      { dataField: 'time', text: 'Timestamp' },
      { dataField: 'hash', text: 'Hash Block', filter: textFilter() }

      ]
    };
    this.transaction = this.transaction.bind(this)
    this.movePage = this.movePage.bind(this)
 
  }


  componentDidMount() {
    this.transaction(0, 500);


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

 
  transaction(pageNumber, limit) {
    const transactionUrl = `${baseUrl}/transactions?page=${pageNumber}&limit=${limit}`
    const that = this;
    return new Promise((resolve, reject) => {
    fetch(transactionUrl)
      .then(res => res.json())
      .then((transactionResponse) => {
        console.log(transactionResponse)
        const tableData = [];
        _.forEach(transactionResponse.data.blocks, function (block) {
          tableData.push({
            size: (block.size / 1024.0).toFixed(2) + " Kb",
            hash: block.hash,
            hieght: block.height,
            time: block.timestamp_utc,
            txs: block.txs.length
          });

          that.setState({ tableData })
          return resolve()
        });
      }).catch(function(error) {
        return reject(error)
      });;
    });
  }

  movePage(e){
    console.log(e.target.value);
    
    const currentPage = parseInt(e.target.value) + this.state.currentPage;
    
    this.transaction(currentPage,100);

    this.setState ({ currentPage});
    


  }
  /* columns={this.state.tableColumns} 
        data={tableData} */

  render() {
    const { tableData } = this.state;
    return (

      <div className="App">
        <div className="container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to BlockChain Explorer</h1>
          </header>
    
          <BootstrapTable classes=" table-responsive  " keyField='hash' data={this.state.tableData} columns={this.state.tableColumns} filter={filterFactory()} />
        
          
          {this.state.currentPage >0 ?(
              <button type="button" value="-1"className="btn btn-info btn-sm" onClick = {this.movePage}>Back</button>
          ): ( <div> </div>)} 
          <label>{this.state.currentPage}</label>
           <button type="button" className="btn btn-info btn-sm" value="1" onClick ={this.movePage}>Next</button>

        </div>
      </div>
    );
  }




}


export default App;
