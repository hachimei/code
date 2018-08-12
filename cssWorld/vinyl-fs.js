/*
    vinyl-fs是对nodejs的fs模块的封装，简化成vfs.src()和vfs.dest()；即源文件和target文件夹；
    搭配map-stream可实时打印信息
*/

var map = require('map-stream');
var vfs = require('vinyl-fs');

var log = (file, cb)=>{
    console.log(file.path);
    cb(null, file);
}

vfs.src('./*')
    .pipe(map(log))
    .pipe(vfs.dest('./output'))