function* gen(x){
    var y = yield x + 2;
    console.log(y);
    return y;
}

var g = gen(1);
var a = g.next();
var b = g.next(5)
