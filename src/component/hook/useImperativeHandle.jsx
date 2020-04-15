/**
 * @file useImperativeHandle.js
 * @author: cdlichang1
 * @describe: useImperativeHandle，使用ref时自定义暴露给父组件的实例值。结合forwardRef在函数组件中使用ref
 * @create: 2020-04-15 17:09
 */
import React, {useRef, useImperativeHandle} from 'react';

// forwardRef会返回一个组件。接受渲染函数作为参数，入参包括props和ref。可以将接受的ref属性转发到其组件树中
const MyFancyInput = React.forwardRef((props, ref) => {
    const inputRef = useRef(null);
    // 将focusElement方法暴露给父组件。传入ref和create方法，ref实例上挂载方法
    useImperativeHandle(ref, () => ({
        focusElement: () => {
            inputRef.current.focus();
            console.log('子组件中方法触发')
        }
    }));

    return (
        <input type="text" ref={inputRef}/>
    )
});

const UseImperativeHandle = () => {
    const inputRef = useRef(null);

    const onButtonClick = () => {
        inputRef.current.focusElement();
    };

    return (
        <div>
            <MyFancyInput ref={inputRef}/>
            <button onClick={onButtonClick}>点我useImperativeHandle调用子组件中的方法</button>
        </div>
    )
};

export {
    UseImperativeHandle
}