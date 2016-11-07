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
        {this.props.growl.content}
        {' '}
        <a href='#' onClick={this._handleDelete}>Delete</a>
      </li>
    )
  }
}

export default Growl;
