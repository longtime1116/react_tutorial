import React from 'react';

export default class SortButton extends React.Component {
  render() {
    return (
      <button className="sort-button" onClick={this.props.onClick}>
        Sort
      </button>
    );
  }
}
