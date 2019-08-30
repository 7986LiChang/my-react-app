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
    if(props.highlight){
        return (
            <button
                className="square"
                onClick={props.onClick}
                style={{color: 'red'}}
            >
                {props.value}
            </button>
        );
    }else{
        return (
            <button
                className="square"
                onClick={props.onClick}
            >
                {props.value}
            </button>
        );
    }
}

function calculateWinner(squares) {
    let lines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ], winnerInfo = {
        winner: null,
        winnerLine: []
    };
    //在Array forEach中无法使用return、break
    lines.some((item, index) => {
        const [a, b, c] = item;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            winnerInfo = {
                winner: squares[a],
                winnerLine: [a, b, c]
            };
            return true;
        }
        return false;
    });
    return winnerInfo;
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                highlight={this.props.winnerLine.includes(i)}
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
            xIsNext: true,
            sort: false
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        //点击落子时，若已有获胜者，或当前方格已有子，则返回
        if(calculateWinner(squares).winner || squares[i]){
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

    toggleSort(){
        this.setState({
            sort: !this.state.sort
        })
    }

    render() {
        let history = this.state.history;
        const current = history[this.state.stepNumber];
        const {winner, winnerLine} = calculateWinner(current.squares);

        if(this.state.sort){
            history = this.state.history.slice();
            history.reverse();
        }

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

        //判断是否是平局，所有格子棋子全部落完，依旧没有胜者
        let isComplete = current.squares.every((item, index) => {return item;});
        if(isComplete && !winner){
            status = `Level the score`;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        winnerLine={winnerLine}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.toggleSort()}>Sort</button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true
        };
        //如果在onClick中直接使用this.handleClick，后面不带()，必须要先进行一次绑定this
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    handleClick(){
        //在setState中使用函数，最好不要使用已有的state来更新状态
        this.setState((state, props) => {
            return {isToggleOn: !state.isToggleOn}
        })
    }

    render() {
        return (
            <div>
                <h4>
                    It is {this.state.date.toLocaleTimeString()}.
                </h4>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

class Welcome extends React.Component{
    render() {
        return (
            <div>
                <h1>
                    Hello, {this.props.name}
                </h1>
                <Clock />
            </div>
        );
    }
}

class App extends React.Component{
    render() {
        return (
            <div>
                <Welcome name='li'/>
            </div>
        );
    }
}

function Greeting(props) {
    return (
        <div>
            {(props.isLoggedIn) ? <h4>Welcome back!</h4> : <h4>Please sign up.</h4>}
        </div>
    );
}

function LoginButton(props) {
    // if(props.isLoggedIn){
    //     return null;
    // }

    return (
        //包裹在闭合div中
        <div>
            {(props.isLoggedIn) ? <button onClick={props.onClick}>Logout</button> : <button onClick={props.onClick}>Login</button>}
        </div>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        isLoggedIn ? (button = <LoginButton
            onClick={this.handleLogoutClick}
            isLoggedIn={this.state.isLoggedIn}
        />) : (button = <LoginButton
            onClick={this.handleLoginClick}
            isLoggedIn={this.state.isLoggedIn}
        />);
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
            </div>
        )
    }
}

class Mailbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unReadMessage: ['todo1: eat', 'todo2: dog', 'todo3: sleep']
        }
    }

    render() {
        const unReadMessage = this.state.unReadMessage;
        let listItems = unReadMessage.map((item, index) =>
                <li key={index}>{item}</li>
        );
        return (
            <div>
                <h1>there</h1>
                {unReadMessage.length &&
                <div>
                    <h2>you have {unReadMessage.length}</h2>
                    <ul>
                        {listItems}
                    </ul>
                </div>
                }
            </div>
        );
    }
}

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '初始',
            favor: ['lime', 'coconut'],
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSelect(event){
        this.setState({
            favor: [event.target.value]
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        alert(`提交的名字是${this.state.value}, 喜欢的风味是${this.state.favor}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    文章：
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    喜欢的风味：
                    <select value={this.state.favor} onChange={this.handleSelect} multiple={true}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <br/>
                <input type="file"/>
                <br/>
                <label>
                    参与：
                    <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    来宾人数：
                    <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value='提交'/>
            </form>
        );
    }
}

ReactDOM.render(
    <div>
        <Game />
        <App />
        <LoginControl />
        <Mailbox />
        <NameForm />
    </div>
    ,
    document.getElementById('root')
);