/**
 * @file index.js
 * @author: cdlichang1
 * @describe:
 * @create: 2019-09-05 20:11
 */
import React from 'react';
import MyCarousel from './component/carousel';
import MyTabs from "./component/tabs";

export default class App extends React.Component{
    render() {
        return (
            <div>
                <MyCarousel/>
                <MyTabs/>
            </div>
        );
    }
}

