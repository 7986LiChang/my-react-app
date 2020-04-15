/**
 * @file useCallback.js
 * @author: cdlichang1
 * @describe: 返回一个memoized回调函数。
 * @create: 2020-04-14 17:29
 */
import React, {useCallback} from 'react';

const a = '', b = '';

const handleSomething = (a, b) => {

} ;

// 会返回回调函数的memoized版本
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
const memoizedCallback = useCallback(
    () => {
        handleSomething(a, b)
    },
    [a, b]
);