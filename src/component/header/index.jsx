/**
 * @file index.js
 * @author: cdlichang1
 * @describe: 头部京东大赏
 * @create: 2019-09-06 10:47
 */
import React from 'react';
import './index.scss';

export default class Header extends React.Component{
    render() {
        return (
            <div className='rank-head-part'>
                <div className='rank-head-top'>
                    <span className='rank-head-logo'>双十一LOGO</span>
                    <span className='rank-head-title'>京东大赏</span>
                </div>
                <div className='rank-head-bottom'>
                    热卖商品 | 官方数据 | 每小时更新
                </div>
            </div>
        );
    }
}