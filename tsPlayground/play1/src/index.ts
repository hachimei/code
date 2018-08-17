import {ArrayList} from './array/index'
const log = console.log;

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
log(INCREMENT_ENTHUSIASM)
type a = string;
let b:a = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
// let a:INCREMENT_ENTHUSIASM = 'abc';
// a.length

let list = new ArrayList<number>();
list.addAll([19,17,21,12,10]);
log(list.toString())
//list.bubbleSort()
// list.insertSort();
list.quickSort();
log(list.toString())