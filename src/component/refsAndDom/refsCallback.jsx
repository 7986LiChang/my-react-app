/**
 * @file refsCallback.js
 * @author: cdlichang1
 * @describe: 回调Refs。不同于传递createRef()创建的ref属性，传递一个函数
 * @create: 2020-04-15 16:31
 */
import React from 'react';

// 在实例的属性中存储对DOM节点的引用
export default class RefCallback extends React.Component{
    constructor(props){
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            if(this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        // 组件挂载后，自动获得焦点
        this.focusTextInput();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setTextInputRef}/>
                <input type="button" value='focus in 使用refcallback' onClick={this.focusTextInput}/>
            </div>
        );
    }
}
