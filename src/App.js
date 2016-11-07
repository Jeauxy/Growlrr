import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './utils/firebase';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import _ from 'lodash';
import NewGrowl from './NewGrowl';
import Growl from './Growl';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: [],
      growls: []
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
  firebase.database().ref('/growls').on('value', snapshot => {
    let growls = snapshot.val();
    this.setState({growls})
  })
}


_sessionButton() {
    if (_.isEmpty(this.state.user)) {
      return <LoginButton class="buttons" firebase={firebase}>
        Login
      </LoginButton>
    } else {
      return <LogoutButton firebase={firebase}>
        Logout
      </LogoutButton>
    }
  }

  _sessionForm() {
      if (_.isEmpty(this.state.user)) {
        return
      } else {
        return <NewGrowl user={this.state.user} firebase={firebase} />
      }
    }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Growlrr User Auth</h1>
        </div>
        <div className="login">
            <h4>Welcome {this.state.user.displayName}</h4>
            {this._sessionButton()}
        </div>
        <div>
          {this._sessionForm()}
        </div>
        <div>
          <ul>
            {_.map(this.state.growls, (growl, id) =>
                <Growl user={this.state.user} id={id} growl={growl} key={id} firebase={firebase} />
            )}
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
