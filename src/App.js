import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import './style/reset.css';

class App extends Component {
  render() {
    return (
      <div style={{height:'100%', background:'red'}}>
        <HeaderComponent/>
      </div>
    );
  }
}

export default App;
