/**
 * @file refsCallbackDelivery.js
 * @author: cdlichang1
 * @describe: 在组件之间传递回调形式的refs。可达到目的：在父组件中使用子组件的某些DOM元素。
 * @create: 2020-04-15 16:41
 */
import React from 'react';

const CustomTextInput = (props) => {
    return (
        <div>
            <input ref={props.inputRef}/>
        </div>
    )
};

export default class RefsCallbackDelivery extends React.Component{
    constructor(props) {
        super(props);
        this.inputElement = null;

        this.focusElement = () => {
            if(this.inputElement){
                this.inputElement.focus();
            }
        }
    }

    componentDidMount(){
        // 通过props及ref回调，inputElement被设置为与CustomTextInput中input元素相同的DOM节点。
        // 从而实现在父组件加载后，获取并控制子组件中的DOM节点
        this.focusElement();
    }


    render(){
        return (
            <div>
                <CustomTextInput inputRef={el => this.inputElement = el} />
                <button onClick={this.focusElement}>点击聚焦</button>
            </div>


        )
    }
}