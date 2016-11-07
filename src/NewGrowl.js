import React, { Component } from 'react';
import './App.css';

export default class NewGrowl extends Component{
  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(e){
      e.preventDefault();
      let user = this.props.user;
      console.log('form submit user: ', user);
      let title = this.refs.title.value
      console.log('form submit title: ',title);
      let growl = this.refs.growl.value;
      console.log('form submit growl: ',growl);
      this.props.firebase.database().ref(`/Growlrr/Growls/`).push({
        title,
        growl,
        user_id: this.props.user.uid,
        username: this.props.user.displayName,
        created_at: new Date(),
      }).then(()=>{
        this.refs.title.value = "";
        this.refs.growl.value = ""
      });

    }

// _handleClick(e){
//   e.preventDefault()
//   let provider = new
//   this.props.firebase.auth.GoogleAuthProvider();
//   this.props.firebase.auth().signInWithPopup(provider)
// }

  render(){
    return(
      <form className="form-group" onSubmit={this._handleSubmit}>
        <div className="form-2">
          <div className="NewTitle">
            <label>Title: </label>
            <input  type="text" ref="title" placeholder="Enter Growl Title Here"/>
          </div>
          <div className="NewGrowl">
            <label>Growl: </label>
            <input type="text" ref="growl" placeholder="Enter New Growl Here"/>
          </div>
          <div className="NewGrowlButton">
            <button className="GrowlButton" type="submit">Growl!</button>
          </div>
        </div>
      </form>
    )

  }
}
