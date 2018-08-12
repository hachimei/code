var map = require('map-stream');
var vfs = require('vinyl-fs');

var log = (file, cb)=>{
    console.log(file.path);
    cb(null, file);
}

vfs.src('./*')
    .pipe(map(log))
    .pipe(vfs.dest('./output'))