//module可能是一个commonjs规范， 也可能是es6模块
//es6模块 会经过r处理 有一个_esmodule: true属性

function n(module) {
    var getter = module.__esModule ?
        function () { return module['default']; } :
        function () { return module; };
    d(getter, 'a', getter);
    return getter;
};
let m = { age: 10 };
let getter = n(m);
console.log(getter.a);
let m2 = { default: { age: 20 }, __esModule: true };
let getter2 = n(m2);
console.log(getter2.a);