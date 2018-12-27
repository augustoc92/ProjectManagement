import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default App;
