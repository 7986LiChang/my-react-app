/**
 * @file index.js
 * @author: cdlichang1
 * @describe:
 * @create: 2019-09-05 20:11
 */
import React from 'react';
import RankCarousel from "./component/rankCarousel";
// import Header from "./component/header";
import MyHook from './component/hook';

export default class App extends React.Component{
    render() {
        return (
            <div>
                {/*<Header />*/}
                {/*<RankCarousel />*/}
                <MyHook />
            </div>
        );
    }
}

