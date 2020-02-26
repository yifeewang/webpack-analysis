// d defineProperty 通过getter的方式增加属性

function d(exports, name, getter) {
    if (!exports.hasOwnProperty(name)) {
        Object.defineProperty(exports, name, { get: getter });
    }
}

let obj = {};
function ageGetter() {
    return 10;
}
d(obj, 'age', ageGetter);
console.log(obj.age);