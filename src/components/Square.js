import React from 'react';

export default class Square extends React.Component {
  render() {
    const divStyle = this.props.need_highlight
      ? { background: 'rgba(212, 173, 30, 0.3)' }
      : {};
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
        style={divStyle}
      >
        {this.props.value}
      </button>
    );
  }
}
