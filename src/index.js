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
    renderSquare(i) {
        return (
            <Square key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        let rows = [];
        for(let i = 0; i < 3; i++){
            let row = [];
            for(let j = i * 3; j < i * 3 + 3; j++){
                row.push(this.renderSquare(j));
            }
            rows.push(<div className="board-row" key={i}>{row}</div>);
        }
        return (
            <div>
                {rows}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //history记录每一步对应的squares
            history: [{
                squares: Array(9).fill(null),
                lastStep: 'Game start'
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        //点击落子时，若已有获胜者，或当前方格已有子，则返回
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        //记录当前点击位置坐标
        const location = `(${Math.floor(i / 3) + 1}, ${(i % 3) + 1})`;
        const desc = `${squares[i]} moved to ${location}`;
        this.setState({
            history: [...history, {
                squares: squares,
                lastStep: desc
            }],
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        //记录跳转到第几步
        const moves = history.map((step, move) => {
            const desc = step.lastStep;
            if(move ===this.state.stepNumber){
                return (
                    <li key={move}>
                        <button onClick={() => this.jumpTo(move)}>
                            <strong>{desc}</strong>
                        </button>
                    </li>
                )
            }else{
                return (
                    <li key={move}>
                        <button onClick={() => this.jumpTo(move)}>
                            {desc}
                        </button>
                    </li>
                )
            }

        });
        let status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        winner && (status = `Winner: ${winner}`);

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
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