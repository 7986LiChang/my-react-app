/**
 * @file index.js
 * @author: cdlichang1
 * @describe: yep-react测试
 * @create: 2019-09-05 18:01
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Carousel} from '@jdcfe/yep-react';
import './index.css'
const {TabPanel} = Tabs;

class MyTabs extends React.Component{
    render() {
        return (
            <Tabs
                onChange={index => {console.log(index)}}
                distanceToChangeTab={100}
            >
                <TabPanel tab='li1'>
                    <div style={
                        {   height: 150,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ccc'
                        }
                    }>
                        1111部分内容
                    </div>
                </TabPanel>
                <TabPanel tab="yan2">
                    <div style={
                        {   height: 150,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff'
                        }
                    }>
                        2222部分内容
                    </div>
                </TabPanel>
                <TabPanel tab="hua3">
                    <div style={
                        {   height: 150,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#789021'
                        }
                    }>
                        333部分内容
                    </div>
                </TabPanel>
            </Tabs>
        );
    }
}

class MyCarousel extends React.Component{
    render() {
        return (
            <div>
                <Carousel className='carousel' isInfinite={true} renderPage={(active, total) => (
                    <div className='Yep-carousel-demo-page'>
                        {active + 1}/{total}
                    </div>
                )}>
                    <div>
                        <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg"/>
                    </div>
                    <div>
                        <img src="//m.360buyimg.com/babel/jfs/t21421/47/1859879985/100913/f5dd5cb5/5b3caa69N4c7a4999.jpg"/>
                    </div>
                    <div>
                        <img src="//img1.360buyimg.com/pop/jfs/t23260/244/889866376/102314/ef6393ec/5b46cb8cN1804aa98.jpg"/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

class App extends React.Component{
    render() {
        return (
            <div>
                <MyCarousel />
                <MyTabs />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);