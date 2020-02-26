(function (modules) {
    debugger
    let installedMoudles = {}
    function _webpack_require_(moduleId) {
        if(installedMoudles[moduleId]){
            return installedMoudles[moduleId].exports
        }
        var module = installedMoudles[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        }
        modules[moduleId].call(module.exports, module, module.exports, _webpack_require_)
        module.l = true
        return module.exports
    }
    return _webpack_require_("./src/index.js")
})({
    "./src/a.js":
    (function(module, exports) {
    
    eval("module.exports = 'hello webpack'\n\n//# sourceURL=webpack:///./src/a.js?");
    
    }),
    "./src/index.js":
    (function(module, exports, __webpack_require__) {
    
    eval("const a = __webpack_require__(/*! ./a */ \"./src/a.js\")\r\n\r\nconsole.log(a);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");
    
    })
      })