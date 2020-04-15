/**
 * @file useRef.js
 * @author: cdlichang1
 * @describe: useRef，返回一个可变的ref对象，其.current属性初始化是传入的参数。整个生命周期不变。
 * @create: 2020-04-14 17:55
 */
import React, {useRef} from 'react';

const UseRefTextInputWithFocusButton = () => {
    // 创建ref，获取DOM节点
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>focus useRef</button>
        </div>
    )
};

export {
    UseRefTextInputWithFocusButton
}