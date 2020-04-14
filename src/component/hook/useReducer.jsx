/**
 * @file useReducer.js
 * @author: cdlichang1
 * @describe: useReducer hook，基础hook的变体。useState的替代方案。
 * @create: 2020-04-14 17:02
 */
import React, {useReducer} from 'react';

// useReducer()中初始化state的函数
const init = (initialCount) => {
    return {
        count: initialCount + 2
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
};

const CounterUseReducer = ({initialCount}) => {
    // useReducer接收3个参数，reducer，初始值，init方法。返回处理后的state及与其配套的dispatch
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div>
            useReducer Count: {state.count}
            <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset 重置</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    )
};

export {
    CounterUseReducer
}