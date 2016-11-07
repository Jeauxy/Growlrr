import React, {Component} from 'react';
import _ from 'lodash';

class Growl extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this)
    this._sessionDelete = this._sessionDelete.bind(this)
  }
  _sessionDelete(id) {
      if (this.props.user.uid === id) {
        return <a href='#' onClick={this._handleDelete}>Delete</a>
      } else {
        return
      }
    }

  _handleDelete(e) {
    e.preventDefault();
    console.log("deleted");
    this.props.firebase.database().ref(`/Growlrr/Growls/${this.props.id}`).remove();
  }

  render() {
    return(

    <div className="all-growls">
      <li className="list">
        Title: {this.props.growl.title}
        <br/>
        Growl: {this.props.growl.growl}
        <br/>
        By: {this.props.growl.username}
        <br/>
        {' '}
        <span className="delete-link">{this._sessionDelete(this.props.growl.user_id)}</span>
      </li>
    </div>
    )
  }
}

export default Growl;
