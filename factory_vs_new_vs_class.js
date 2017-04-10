// factory vs new vs class


// ye old school factory from the way we used to do this
const myData = ()=> {return { a:'a', b:'b'}}
var instance1 = myData();
var instance2 = myData();
instance1.a = 'hello';
console.log(instance2.a); // is still 'a'


// from ye old OOP days
// new creates object from namespace
// convention dictates we capitalize the first letter of the name of the constructor
const MyData = function(){ this.a='a'; this.b='b';}
var instance1 = new MyData;
var instance2 = new MyData;
instance1.a = 'hello';
console.log(instance2.a); // is still 'a'


// ES6 class
// convention dictates we capitalize the first letter of the name of the constructor
class MyData {
    constructor(){this.a='a'; this.b='b';}
    anotherMethod(){console.log('do stuff')}
}
var instance1 = new MyData;
var instance2 = new MyData;
instance1.a = 'hello';
console.log(instance2.a); // is still 'a'

