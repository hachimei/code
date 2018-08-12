//var request = require('request');
var request = require('sync-request')
var iconv = require('iconv-lite')

var cheerio = require('cheerio');
var fs = require('fs');
var chalk = require('chalk');
var rmrf = require('rimraf');
const log = console.log;

const url = 'https://www.q690.net/174471/';
const urlPrefix = 'https://www.q690.net'
var arr = [];

/*
rmrf('jhxbList.html', (err)=>{
    if(err){
        log(chalk.red('删除出错了'+err.code))
    }else{
        log(chalk.green('删除成功'))
    }
});

request(url).pipe((fs.createWriteStream('jhxbList.html')));
*/

/*
request(url, (err, res, body)=>{
    if (!err && res.statusCode === 200) {  
        let $ = cheerio.load(body);
        var li = $('ul li.xm6 a');
        log(chalk.green('章节长度'+li.length))
        li.each((index, ele)=>{
            var title = ele.attribs.title ? ele.attribs.title.replace(/（(.+)/g,'') : '';
            var href = urlPrefix + ele.attribs.href;
            var obj = {
                title: title,
                href: href
            };
            arr.push(obj);
            log(chalk.green('title:', title));
            fs.writeFile('temp.txt', href+'\r\n', {flag: 'a'}, (err)=>{
                if(err) throw err;
            });
        });
    }else{
        log(chalk.red('抓取'+url+'失败'))
    }
});
*/


fs.readFile('temp.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    arr = data.split('\r\n');
    arr.map((href, index)=>{
        getNR(href);
    });
});

function getNR(href){
    var res = request('GET', href, {
        'timeout': 10000,
        'retry': true,
        'retryDelay': 10000
    });

    var body = iconv.decode(res.body, 'utf8')
    let $ = cheerio.load(body);
    var nrNodes = $('#nr')[0].children;
    nrNodes.map((nrNode, index)=>{
        if(nrNode.type === 'text'){
            fs.writeFileSync('jhxb.txt', nrNode.data+'\r\n', {flag: 'a'}, (err)=>{
                if(err) throw err;
            });
        }
    });
}

/* 章节不能按顺序排列
function getNR(href){
    request(href, (err, res, body)=>{
        if(!err && res.statusCode === 200){
            let $ = cheerio.load(body);
            var nrNodes = $('#nr')[0].children;
            nrNodes.map((nrNodes, index)=>{
                if(nrNodes.type === 'text'){
                    fs.writeFileSync('jhxb.txt', nrNodes.data+'\r\n', {flag: 'a'}, (err)=>{
                        if(err) throw err;
                    });
                }
            })
            
        }else{
            throw err
        }
    });
}
*/
