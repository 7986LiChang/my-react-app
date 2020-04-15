/**
 * @file useDebugValue.js
 * @author: cdlichang1
 * @describe: 在自定义hook中，在react开发者工具中在这个hook旁边显示标签
 * @create: 2020-04-15 17:49
 */
import React, {useRef, useState, useDebugValue} from "react";

// 定义 自定义hook MyOwnClick
const useMwnClick = () => {
    const [isClick, setIsClick] = useState(true);

    useDebugValue(isClick? 'click' : 'initial');

    return isClick;
};

// 自定义函数组件首字母要大写，使用自定义hook
const UseDebugValue = () => {
    const isClick = useMwnClick();

    return (
        <div>{isClick}</div>

    )
};

export {
    UseDebugValue
}

