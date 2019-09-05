/**
 * @file index.js
 * @author: cdlichang1
 * @describe: yep-react测试
 * @create: 2019-09-05 18:01
 */
import React from 'react';
import {Tabs} from '@jdcfe/yep-react';
import './index.scss'
const {TabPanel} = Tabs;

export default class MyTabs extends React.Component{
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