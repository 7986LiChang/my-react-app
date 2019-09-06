/**
 * @file index.js
 * @author: cdlichang1
 * @describe: 排行榜轮播图，共3张榜单，隔2秒轮播，可左右切换
 * @create: 2019-09-05 20:44
 */
import React from 'react';
import {Carousel} from '@jdcfe/yep-react';
import './index.scss';

export default class RankCarousel extends React.Component{
    render() {
        return (
            <Carousel className='rank-carousel-part' autoPlay={3000} isInfinite={true} dots={false}>
                <div className='rank-carousel-wrap'>
                    <div className='rank-carousel-title'>
                        <span className='rank-carousel-name'>
                            长羽绒服榜
                        </span>
                        <span className='rank-carousel-total'>
                            3.9W人买过>
                        </span>
                    </div>
                    <div className='rank-carousel-content'>
                        <ul className='clearFix'>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='rank-carousel-wrap'>
                    <div className='rank-carousel-title'>
                        <span className='rank-carousel-name'>
                            长羽绒服榜
                        </span>
                        <span className='rank-carousel-total'>
                            3.9W人买过>
                        </span>
                    </div>
                    <div className='rank-carousel-content'>
                        <ul className='clearFix'>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='rank-carousel-wrap'>
                    <div className='rank-carousel-title'>
                        <span className='rank-carousel-name'>
                            长羽绒服榜
                        </span>
                        <span className='rank-carousel-total'>
                            3.9W人买过>
                        </span>
                    </div>
                    <div className='rank-carousel-content'>
                        <ul className='clearFix'>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                            <li>
                                <div className='rank-carousel-img'>
                                    <img src="//m.360buyimg.com/babel/jfs/t23224/35/1026004507/74414/35929bac/5b4d885bN0cdaa9f4.jpg" alt=""/>
                                    <span className='rank-carousel-purchase'>1.2万人买过</span>
                                </div>
                                <div className='rank-carousel-info'>
                                    <p>小米红米Note7</p>
                                    <span className='rank-carousel-discount'>满199减100 ></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Carousel>
        );
    }
}