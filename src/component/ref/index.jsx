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