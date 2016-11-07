import React, { Component } from 'react';


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
      var growlObj = {
        title,
        growl,
        [this.props.user.uid]: true,
        username: this.props.user.displayName
      }
      console.log('growlObj', growlObj);
      this.props.firebase.database().ref(`/growls`).push(growlObj).then(()=>{
        this.refs.title.value = "";
        this.refs.growl.value = ""
      }).catch((e)=>{
        alert('Too Long');
        console.log('e',e);
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
      <form onSubmit={this._handleSubmit}>
        <label>Title: </label>
        <input className="NewGrowl" type="text" ref="title"/>
        <br/>
        <label>Growl: </label>
        <input className="NewGrowl" type="text" ref="growl"/>
        <br/>
        <input className="NewGrowl" type="submit" value="Growl!" />
      </form>
    )

  }
}
