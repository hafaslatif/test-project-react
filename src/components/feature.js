import React from 'react';

export default class Feature extends React.Component {
  render() {
    return (
      <li className ="list-group-item">
        <strong>{this.props.feature.name}</strong>
      </li>
    )
  }
}
