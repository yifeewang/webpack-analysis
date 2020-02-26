//表示此对象是一个ES6模块对象
function r(exports) {
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    Object.defineProperty(exports, '__esModule', { enumerable: true, value: true });
  };
  let obj2 = {};
  r(obj2);
  console.log(obj2);