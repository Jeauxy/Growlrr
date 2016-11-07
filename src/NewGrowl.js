import React, { Component } from 'react';
import './App.css';

export default class NewGrowl extends Component{
  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this)
    this._growlLength = this._growlLength.bind(this)
  }

  _growlLength(){
    console.log(this.refs.growl.value.length);
  }

  _handleSubmit(e){
      e.preventDefault();
      let title = this.refs.title.value
      let growl = this.refs.growl.value;
      var growlObj = {
        title,
        growl,
        [this.props.user.uid]: true,
        username: this.props.user.displayName,
        created_at: new Date()
      }
      this.props.firebase.database().ref(`/growls`).push(growlObj).then(()=>{
        this.refs.title.value = "";
        this.refs.growl.value = ""
      }).catch((e)=>{
        // let tooMany = growl.length-141;
        // _tooLong(tooMany);
        alert(`Your growl is ${growl.length - 141} characters too long!`);
        console.log('e',e);
      });

    }

  render(){
    return(

      <div className="New-Growl">
        <h1>Growls!</h1>
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
      </div>
    )

  }
}
