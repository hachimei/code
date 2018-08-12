var cheerio = require('cheerio');
var chalk = require('chalk');
const log = console.log;
var fs = require('fs');

const file = 'jhxbList.html';

fs.readFile(file, (err, fd) => {
    if (err) {
        if(err.code === 'ENOENT') {
        log(chalk.red(file + '不存在'));
        }
    }else{
        var $ = cheerio.load(fd);
        var qzone = log($('.bds_qzone'))
        log(qzone)
    }
});

// 失败！