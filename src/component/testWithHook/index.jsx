/**
 * @file index.js
 * @author: cdlichang1
 * @describe: 使用React Dom测试
 * @create: 2020-04-15 20:26
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from "./Counter"

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a counter', () => {
    // 测试首次渲染和 effect
    act(() => {
        ReactDOM.render(<Counter/>, container);
    });
    const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).toBe('YOU CLICK 0 TIMES');
    expect(document.title).toBe('YOU CLICK 0 TIMES');

    // 测试第二次渲染和 effect
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(label.textContent).toBe('YOU CLICK 1 TIMES');
    expect(document.title).toBe('YOU CLICK 1 TIMES');
})