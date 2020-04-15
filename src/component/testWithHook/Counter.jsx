/**
 * @file Counter.js
 * @author: cdlichang1
 * @describe: 使用了hook的计时器
 * @create: 2020-04-15 20:23
 */
import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        document.title = `click ${count} times`;
    });

    return (
        <div>
            <p>you click {count} times!</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
};

export default Counter;