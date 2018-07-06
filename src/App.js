import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.jpg';
import './App.css';
import Form from './form/Form';

import { addStationFrom } from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="National Express logo" />
        </header>
        <main className="main">
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
