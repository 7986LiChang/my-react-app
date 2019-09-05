/**
 * @file index.js
 * @author: cdlichang1
 * @describe: yep-react测试
 * @create: 2019-09-05 18:01
 */
import React from 'react';
import {Carousel} from '@jdcfe/yep-react';
import './index.scss'

export default class MyCarousel extends React.Component{
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