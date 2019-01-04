import React, { Component } from 'react';
import NavBar from '../shared/NavBar'
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavBar />
        { this.props.children }
      </div>
    );
  }
}

export default App;
