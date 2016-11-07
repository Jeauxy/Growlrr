import React, {Component} from 'react';

class Growl extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this)
  }

  _handleDelete(e) {
    e.preventDefault();
    console.log("deleted");
    this.props.firebase.database().ref(`/Growlrr/Growls/${this.props.id}`).remove();
  }

  render() {
    return(
      <li>
        Title: {this.props.growl.title}
        <br/>
        Growl: {this.props.growl.growl}
        <br/>
        By: {this.props.growl.username}
        {' '}
        <a href='#' onClick={this._handleDelete}>Delete</a>
      </li>
    )
  }
}

export default Growl;
