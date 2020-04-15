/**
 * @file index.js
 * @author: cdlichang1
 * @describe: react 的 refs 实践
 * @create: 2019-09-10 15:16
 */
import React from 'react';

class AutoFocusTextInput extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        // ref属性属于自定义组件，其current值为组件的挂载实例。
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput}/>
        );
    }
}

class CustomTextInput extends React.Component{
    constructor(props){
        super(props);
        //创建ref
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput(){
        // ref属性属于html元素。为DOM元素添加ref。.current属性就对应DOM元素
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput}/>
                <input type="button"
                       value='聚焦到input元素'
                       onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default AutoFocusTextInput;