/**
 * @file index.js
 * @author: cdlichang1
 * @describe: react + mobx TodoList应用
 * @create: 2019-09-03 09:58
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {observable, computed, configure, action} from "mobx";
import {inject, observer, Provider} from "mobx-react";
import {Tabs} from '@jdcfe/yep-react';
import './index.css';
const {TabPanel} = Tabs;

//开启严格模式，只有在action中才能修改观测量state的值
configure({enforceActions: 'always'});
//定义数据结构
class TodoData {
    @observable todos = [
        {
            id: 1,
            title: 'todo #1',
            finished: false
        },
        {
            id: 2,
            title: 'todo #2',
            finished: false
        },
        {
            id: 3,
            title: 'todo #3',
            finished: false
        }
    ];

    @observable todoHisLen = 3;

    //添加todo
    @action addTodo(title){
        this.todoHisLen++;
        this.todos.push({
            id: this.todoHisLen,
            title: title,
            finished: false
        });
    }

    //完成todo
    @action finishTodo(todo){
        todo.finished = !todo.finished;
    }

    @action deleteTodo(todo){
        this.todos.remove(todo);
    }

    //返回计算未完成的数量
    @computed get unfinishedTodoCount(){
        return this.todos.filter(todo => !todo.finished).length;
    }
}

//静态构建
@inject('todoList')
@observer
class TodoListView extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    {this.props.todoList.todos.map(todo =>
                        <TodoView todo={todo} key={todo.id}/>
                    )}
                </ul>
                未完成任务数：{this.props.todoList.unfinishedTodoCount}
            </div>
        );
    }
}

@inject('todoList')
@observer
class TodoView extends React.Component{
    render() {
        let todo = this.props.todo;
        //注意在onChange中应该是执行一个函数
        return (
            <li>
                <label>
                    <input type="checkbox"
                           checked={todo.finished}
                           onChange={() => {this.props.todoList.finishTodo(todo)}}
                    />
                    {todo.title}
                </label>
                <button onClick={() => {this.props.todoList.deleteTodo(todo)}}>删除</button>
            </li>
        );
    }

}

@inject('todoList')
@observer
class ToDoAdd extends React.Component{
    //将input中的输入值设为内部state，并转为可观测的量
    @observable value = '';

    //定义修改、添加的动作
    @action change = (e) => {
        this.value = e.target.value;
    };

    @action add = (e) => {
        if(!this.value){
            alert('任务名称不能为空');
            return;
        }
        this.props.todoList.addTodo(this.value);
        this.value = '';
    };
    render() {
        return (
            <div className='todo-add'>
                <input type="text" className='todo-add-input' onChange={this.change} value={this.value}/>
                <button onClick={this.add}>添加</button>
            </div>
        );
    }
}

class ToDoApp extends React.Component{
    render() {
        return (
            <div>
                <TodoListView />
            </div>
        );
    }
}

//初始化数据结构state管理
const todoList = new TodoData();

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

//在Provider中写入todoList作为store，然后在各子组件中通过inject引入
class App extends React.Component{
    render() {
        return (
            <Provider todoList={todoList}>
                <ToDoAdd />
                <ToDoApp />
                <MyTabs />
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);