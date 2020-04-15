/**
 * @file useMemo.js
 * @author: cdlichang1
 * @describe: 返回memoized值。性能优化的手段。
 * @create: 2020-04-14 17:49
 */
import React, {useMemo} from 'react';

const a = '', b = '';
const computeExpensiveValue = (a, b) => {

};

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
