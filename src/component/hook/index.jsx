/**
 * @file myHook.js
 * @author: cdlichang1
 * @describe: useState Hook 示例
 * @create: 2019-09-10 11:44
 */
import React, {useState, useEffect} from 'react';

function MyHook() {
    // 变相使用 state : count 和 setCount，并将count初始值设置为 0
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [todo, setTodo] = useState([{text: 'learn hooks'}]);

    // 每次render渲染后都会执行，包括第1次。传入空数组表示只执行1次。
    useEffect(() => {
        document.title = `you click ${count} times`
    }, []);

    return (
        <div>
            <p>You click {count} times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br/>
            <label>爱吃的水果：</label>
            <input value={fruit} onChange={(event) => setFruit(event.target.value)}/>
            <br/>
            <label>待完成事项：</label>
            <input value={todo[0].text} onChange={(event) => setTodo(event.target.value)}/>
        </div>
    );
}

const Counter = ({initialCount}) => {
    // 从函数组件props中传入
    // 内部使用state
    const [count, setCount] = useState(initialCount);

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    )
};


export{
    MyHook,
    Counter
} ;