import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {
  componentDidMount(){
    this.props.getIP()
  }
  render() {
    const styles={
      cat:{
        fontSize: "16vw",
        textAlign:"center",
        marginTop: "10%",
      },
      title:{
        fontSize:"3.5vw",
        textAlign: "center",
        marginTop: 20
      }
    }
    return (
      <div>
        <h1 style={styles.title}>Your IP adress is: </h1>
        <h1 style={styles.cat}>{this.props.ip}</h1>
      </div>
    );
  }
}

export default withData(App);