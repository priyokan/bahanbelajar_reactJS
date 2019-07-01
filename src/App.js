import React, { Component } from 'react';
import Navbuat from  './component/navbar'
import TableCobe from './component/table'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbuat/>
        <TableCobe/>
      </div>
    );
  }
}

export default App;
