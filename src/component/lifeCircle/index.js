/**
 * @file index_lifeCircle.js
 * @author: cdlichang1
 * @describe: react生命周期验证
 * @create: 2019-09-03 14:45
 */

import React from "react";

class SubCounter extends React.Component {
    componentWillMount(){
        console.log('15、componentWillMount子组件挂载之前');
    }

    componentDidMount() {
        console.log('16、componentDidMount子组件挂载完成');
    }

    componentWillReceiveProps() {
        console.log('9、componentWillReceiveProps子组件将要接收到新属性');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('10、shouldComponentUpdate子组件是否需要更新');
        if (newProps.number < 5) return true;
        return false
    }

    componentWillUpdate() {
        console.log('11、componentWillUpdate子组件将要更新');
    }

    componentDidUpdate() {
        console.log('13、componentDidUpdate子组件更新完成');
    }

    componentWillUnmount() {
        console.log('14、componentWillUnmount子组件将卸载');
    }

    render() {
        //子组件接收到父组件新传来的props后触发更新再次render
        console.log('12、render子组件挂载中');
        return (
            <p>{this.props.number}</p>
        )
    }
}

export default class Counter extends React.Component {
    static defaultProps = {
        //1、加载默认属性
        name: 'sls',
        age:23
    };

    constructor() {
        super();
        //2、加载默认状态
        this.state = {number: 0}
    }

    componentWillMount() {
        console.log('3、componentWillMount父组件挂载之前');
    }

    componentDidMount() {
        console.log('5、componentDidMount父组件挂载完成');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('6、shouldComponentUpdate父组件是否需要更新');
        if (newState.number<15) return true;
        return false
    }

    componentWillUpdate() {
        console.log('7、componentWillUpdate父组件将要更新');
    }

    componentDidUpdate() {
        console.log('8、componentDidUpdate父组件更新完成');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    };

    render() {
        //父组件由自身sate改变后更新再次render
        console.log('4、render(父组件挂载)');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
                {this.state.number < 10 ? <SubCounter number={this.state.number}/> : null}
            </div>
        )
    }
}