var request = require('sync-request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var fs = require('fs');

const log = console.log;
const domain = 'http://m.tetexs.com';

getChapters() 
{
    // 爬取目录
    // 第一页 http://m.tetexs.com/html/48760/
    // 第二页 http://m.tetexs.com/html/48760/list2.html
    var pages = fs.readFileSync('./mulu.txt', 'utf8').split('\r\n');
    pages.map((page)=>{
        var res = request('GET', domain+page, {
            'timeout': 10000,
            'retry': true,
            'retryDelay': 5000
        });
        if(res.statusCode === 200){
            var body = iconv.decode(res.body, 'gbk');
        
            var $ = cheerio.load(body);
        
            var chapters = $(".chapter li a")
        
            chapters.map((index, chapter)=>{
                let postUrl = chapter.attribs.href;
                fs.writeFileSync('./chapters.txt',postUrl+'\r\n' ,{flag: 'a'})
            })
        }else{
            log(res.statusCode+'错误')
        }
    })
}

export {getChapters}




