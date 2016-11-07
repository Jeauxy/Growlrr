import React, { Component } from 'react';


export default class LogoutButton extends Component{
  constructor(props){
    super(props);
    this._handleLogout = this._handleLogout.bind(this)
  }

_handleLogout(e){
  e.preventDefault()
  this.props.firebase.auth().signOut()
}

  render(){
    return(<button onClick={this._handleLogout} className="button">{this.props.children}</button>)
  }
}
