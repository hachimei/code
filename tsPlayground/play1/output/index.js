"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./array/index");
var log = console.log;
exports.INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
log(exports.INCREMENT_ENTHUSIASM);
var b = 'INCREMENT_ENTHUSIASM';
// let a:INCREMENT_ENTHUSIASM = 'abc';
// a.length
var list = new index_1.ArrayList();
list.addAll([19, 17, 21, 12, 10]);
log(list.toString());
//list.bubbleSort()
// list.insertSort();
list.quickSort();
log(list.toString());
//# sourceMappingURL=index.js.map