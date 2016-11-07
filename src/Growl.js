import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';

class Growl extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this)
    this._sessionDelete = this._sessionDelete.bind(this)
}
  _sessionDelete() {
    let array = Object.keys(this.props.growl);
      if (this.props.user.uid === array[0]) {
        return <a href='#' onClick={this._handleDelete}>Delete</a>
      } else {
        return
      }
}

  _handleDelete(e) {
    e.preventDefault();
    console.log("deleted");
    this.props.firebase.database().ref(`/growls/${this.props.id}`).remove();
}

  render() {
    return(
    <div className="all-growls">
      <li className="list">
      <span className="delete-link">{this._sessionDelete()}</span>
        Title: {this.props.growl.title}
        <br/>
        <br/>
        By: {this.props.growl.username}
        <br/>
        <br/>
        Growl: {this.props.growl.growl}
        <br/>
        <br/>
      </li>
    </div>
    )
  }
}

export default Growl;
