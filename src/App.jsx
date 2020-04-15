/**
 * @file index.js
 * @author: cdlichang1
 * @describe:
 * @create: 2019-09-05 20:11
 */
import React from 'react';
// import RankCarousel from "./component/rankCarousel";
// import Header from "./component/header";
import {MyHook, Counter} from './component/hook/useStateOrUseEffect';
import {CounterUseContext} from './component/hook/useContext';
import {CounterUseReducer} from './component/hook/useReducer';
// import AutoFocusTextInput from './component/refsAndDom/refsInClass';
import UseRefInFunction from "./component/refsAndDom/refsInFunction";
// import RefCallback from './component/refsAndDom/refsCallback';
import RefsCallbackDelivery from './component/refsAndDom/refsCallbackDelivery';
// import {UseRefTextInputWithFocusButton} from './component/hook/useRef';
import {UseImperativeHandle} from './component/hook/useImperativeHandle';

export default class App extends React.Component{
    render() {
        return (
            <div>
                {/*<Header />*/}
                {/*<RankCarousel />*/}
                <MyHook />
                {/*<AutoFocusTextInput />*/}
                <Counter initialCount={1}/>
                <CounterUseContext />
                <CounterUseReducer initialCount={5} />
                <UseRefInFunction />
                {/*<RefCallback />*/}
                <RefsCallbackDelivery />
                {/*<UseRefTextInputWithFocusButton />*/}
                <UseImperativeHandle />
            </div>
        );
    }
}

