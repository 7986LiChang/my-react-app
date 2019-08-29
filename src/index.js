/**
 * @file index.js
 * @author: cdlichang1
 * @describe: 初始化九宫格棋子
 * @create: 2019-08-28 16:02
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

//函数组件Square，只有render方法没有state,onClick左右两侧都没有括号，直接使用传入的变量
function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    let lines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ], winner = null;
    //在Array forEach中无法使用return、break
    lines.some((item, index) => {
        const [a, b, c] = item;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            winner = squares[a];
            return true;
        }
        return false;
    });
    return winner;
}

class Board extends React.Component {
    constructor(props){
        super(props);
        //squares存储所有方格落子状态
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        //点击落子时，若已有获胜者，或当前方格已有子，则返回
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        let status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`,
            winner = calculateWinner(this.state.squares);
        winner && (status = `Winner: ${winner}`);

        return (
            <div>
                <div className="status">{status}</div>
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
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
