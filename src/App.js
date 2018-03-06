import React, { Component } from 'react';
import logo from './logo.svg';
import './Components/Home/Home.css';
import { Link } from 'react-router-dom';
import Shelf from './Components/Shelf/Shelf';
import router from "./router";
import Topic from './topic';
import Home from './Components/Home/Home';
import Bin from './Components/Bin/Bin';
import Inventory from './Components/Add-inv/Inventory';

class App extends Component {
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;