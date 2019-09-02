/**
 * @file index.js
 * @author: cdlichang1
 * @describe:
 * @create: 2019-09-02 11:17
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {observable, autorun, computed, action, configure} from "mobx";
import {observer} from 'mobx-react';

const value = observable.box(0);
const number = observable.box(100);

autorun(() => {
    console.log(value.get());
});

value.set(1);
value.set(2);
number.set(101);

const map = observable.map({key: "value"});
map.set("key", "new value");
console.log(map);

const list = observable([1, 2, 4]);
list[2] = 3;
console.log(list);

const person = observable({
    firstName: 'Clive Staples',
    lastName: 'Lewis'
});
person.firstName = "C.S.";
console.log(person);

class OrderLine {
    @observable price = 2;
    @observable amount = 15;

    @computed get total(){
        return this.price * this.amount;
    }
}

let orderLine = new OrderLine();
//total函数直接调用获取结果
console.log("price" + orderLine.price + "total" + orderLine.total);

const num = observable.box(10);
const plus = computed(() => num.get() > 0);
 autorun(() => {
     console.log(plus.get());
 });

 num.set(-19);
 num.set(-1);
 num.set(1);

 const price = observable.box(199);
 const storage = observable.box(15);

 const allPrice = computed(() => price.get() * storage.get());
 console.log(`计算${allPrice}`);

 configure({enforceActions: "always"});
 class Store {
     @observable number = 0;
     @action add = () => {
         this.number++;
     }
 }
 const newStore = new Store();
 newStore.add();
 console.log(newStore.number);

 //由MyState进行状态管理
 class MyState {
     @observable num1 = 0;
     @observable num2 = 100;

     @action addNum1 = () => {
         this.num1++;
     };
     @action addNum2 = () => {
         this.num2++;
     };
     @computed get total(){
         return this.num1 + this.num2;
     }
 }
 //实例化的state状态管理作为props传入子组件
 const newState = new MyState();

 //使用observer修饰无状态组件
 const AllNum = observer((props) => <div>num1 + num2 = {props.store.total}</div>);

 const Main = observer((props) => (
     <div>
         <p>num1 = {props.store.num1}</p>
         <p>num2 = {props.store.num2}</p>
         <div>
             <button onClick={props.store.addNum1}>num1 + 1</button>
             <button onClick={props.store.addNum2}>num2 + 1</button>
         </div>
     </div>
 ));

 @observer
 class App extends React.Component{
     render() {
         return (
             <div>
                 <Main store={newState}/>
                 <AllNum store={newState}/>
             </div>
         );
     }
 }


 ReactDOM.render(
     <App />,
     document.getElementById('root')
 );