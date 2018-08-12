var request = require('sync-request');
var asyncRequest = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var fs = require('fs');
var chalk = require('chalk');

const log = console.log;

const domain = 'http://www.htula.com';

//const urlPrefix = 'http://www.htula.com/wuyiniao/list_2_';
//const urlSuffix = '.html';

//const totalPage = 7;

/*遍历srcList.txt,获取单个漫画的所有图片

fs.readFile('srcList.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    let srcList = data.split('\r\n');
    srcList.map((url)=>{
        getManHua(url)
    })
})


function getManHua(url){
    var urlPrefix = url.split('.')[0]+'_'
    var urlSuffix = '.html';
    let res = request('GET', domain+url, {
        'timeout': 10000,
        'retry': true,
        'retryDelay': 5000
    });

    let body = iconv.decode(res.body, 'utf-8');
    let $ = cheerio.load(body);
    let pageHrefList = $('.page11list li a');
    let totalpage = pageHrefList[0].children[0].data.substr(1,2)
    totalpage = new Number(totalpage)
    let title = $('.pic')[0].childNodes[0].data;
    title = title ? title : '未能命名';
    let temp = title.split('之')[1] ? title.split('之')[1] : '未能命名';
    if(typeof temp == 'string' && temp.length > 0 && temp == '未能命名')
        title = temp;
    else{
        temp = title.split('漫画')[1]
        title = typeof temp == 'string' && temp.length > 0 ? temp : title;
    }
    let picUrl = $('.pic a img')[0].attribs.src
    if(!fs.existsSync('./output/'+title))
        fs.mkdirSync('./output/'+title)
    asyncRequest(picUrl).pipe(fs.createWriteStream(__dirname+'/output/'+title+'/1.jpg'))
    // 逐页获取图片
    for(let i =2; i<totalpage; i++){
        let res = request('GET', domain+urlPrefix+i+urlSuffix, {
            'timeout': 10000,
            'retry': true,
            'retryDelay': 5000
        });
        let body = iconv.decode(res.body, 'utf-8');
        let $ = cheerio.load(body);
        let picUrl = $('.pic a img')[0].attribs.src
        asyncRequest(picUrl).pipe(fs.createWriteStream(__dirname+'/output/'+title+'/'+i+'.jpg'))
        
    }
}
*/

/* 获取了所有漫画的地址
for(let i=2; i<7; i++){
    getHrefList(urlPrefix+i+urlSuffix)
}

function getHrefList(href){
    var res = request('GET', href, {
        'timeout': 10000,
        'retry': true,
        'retryDelay': 5000
    });

    var body = iconv.decode(res.body, 'utf8');
    let $ = cheerio.load(body);
    var srcs =  $('.news ul li a')
    
    var titles = $('.news ul li a img')
    titles.map((index, titleNode) => {
        let title = titleNode.attribs.alt;
        let temp = title.split('之')[1];
        if(temp.length > 0)
            title = temp;
        else{
            temp = title.split('漫画')[1]
            title = temp.length > 0 ? temp : title;
        }
        fs.mkdirSync('./output/'+ title);
        
    });
    
    srcs.map((index, srcNode) => {
        fs.writeFileSync('srcList.txt', srcNode.attribs.href+'\r\n',{flag: 'a'}, (err)=>{
            if(err) throw err;
        });
    })
}
*/