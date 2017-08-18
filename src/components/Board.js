import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i, need_highlight) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        need_highlight={need_highlight}
        key={i}
      />
    );
  }

  render() {
    // 配列にpushしていく方法
    //    const squares2 = []
    //    for (let i = 0; i < 3; i++) {
    //      const squares1 = []
    //      for (let i = 0; i < 3; i++) {
    //        squares1.push(this.renderSquare(i))
    //      }
    //      squares2.push(<div className="board-row">{squares1}</div>)
    //    }
    return (
      <div>
        {
          [0, 1, 2].map((row) => {
            return (
              <div className="board-row" key={row}>
                {
                  [0, 1, 2].map((column) => {
                    const index = row * 3 + column;
                    const need_highlight = this.props.winnerLine.includes(index);
                    return this.renderSquare(index, need_highlight);
                  })
                }
              </div>
            )
          })
        }

        {/* 上のやつを省略して簡略化したやつ return と {} を省略している
        {
          [0, 1, 2].map((row) =>
            <div className="board-row" key={row}>
              {
                [0, 1, 2].map((column) =>
                  this.renderSquare(row * 3 + column)
                )
              }
            </div>
          )
        }
        */}

        {/* 羅列
                <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
                </div>
                <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
                </div>
                <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
                </div>
          */}
      </div>
    );
  }
}
