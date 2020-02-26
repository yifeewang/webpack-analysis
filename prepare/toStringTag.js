let obj = {}
console.log(Object.prototype.toString.call(obj));      // "[object Object]"
Object.defineProperty(obj, Symbol.toStringTag, {
    value: 'module' //可定义任何自定义值
})
console.log(Object.prototype.toString.call(obj));      // "[object module]"

console.log(Object.prototype.toString.call('foo'));     // "[object String]"
console.log(Object.prototype.toString.call([1, 2]));    // "[object Array]"
console.log(Object.prototype.toString.call(3));         // "[object Number]"
console.log(Object.prototype.toString.call(true));      // "[object Boolean]"
console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"

