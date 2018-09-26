import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer';
import Connect from './Components/Connect'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Connect/>
        <Footer/>
      </div>
    );
  }
}

export default App;
