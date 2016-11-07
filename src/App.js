import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    }
  }


  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
  if (user) {
    this.setState({ user })
    // User is signed in.
  } else {
    this.setState({user: {} })
    // No user is signed in.
  }
  });
}


_sessionButton() {
    if (_.isEmpty(this.state.user)) {
      return <LoginButton firebase={firebase}>
        Login
      </LoginButton>
    } else {
      return <LogoutButton firebase={firebase}>
        Logout
      </LogoutButton>
    }
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Growlrr User Auth</h1>
        </div>
          <h2>Welcome {this.state.user.displayName}</h2>
        <div className="login">

          {this._sessionButton()}
        </div>
      </div>
    );
  }
}


export default App;
