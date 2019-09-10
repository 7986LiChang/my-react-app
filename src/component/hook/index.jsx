/**
 * @file myHook.js
 * @author: cdlichang1
 * @describe: useState Hook 示例
 * @create: 2019-09-10 11:44
 */
import React, {useState} from 'react';

function MyHook() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You click {count} times!</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default MyHook;