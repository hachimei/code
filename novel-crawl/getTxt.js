var request = require('sync-request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var fs = require('fs');

const log = console.log;
const domain = 'http://m.tetexs.com';

// 获取标题和文本内容
var urls = fs.readFileSync('./chapters.txt','utf8').split('\r\n')

urls.map((url, index)=>{
    var res = request('GET', domain+url, {
        'timeout': 10000,
        'retry': true,
        'retryDelay': 5000
    });
    if(res.statusCode === 200){
        var body = iconv.decode(res.body, 'gbk');
    
        var $ = cheerio.load(body);
    
        var title = $('#nr_title').text()
    
        var content = $('#txt').text()
        //log(1)
        var fileName = 'tjsl.txt';
        
        fs.writeFileSync(fileName,title+'\r\n', {flag: 'a'})
        fs.writeFileSync(fileName,content+'\r\n', {flag: 'a'})
    }
})
