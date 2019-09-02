/**
 * @file index.js
 * @author: cdlichang1
 * @describe:
 * @create: 2019-09-02 11:17
 */
import {observable, autorun, computed} from "mobx";

const value = observable.box(0);
const number = observable.box(100);

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

autorun(() => {
    console.log(value.get());
});


value.set(1);
value.set(2);
number.set(101);

// class OrderLine {
//     @observable price = 0;
//     @observable amount = 1;
//
//     @computed get
//     total(){
//         return this.price * this.amount;
//     }
// }