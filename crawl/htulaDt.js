var request = require('sync-request');
var asyncRequest = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

const log = console.log;

const domain = 'http://www.htula.com';

//onst urlPrefix = 'http://www.htula.com/xieedongtaitu/list_3_';
//const urlSuffix = '.html';

const totalPage = 24;

//遍历dtList.txt,获取单个标题的所有图片

fs.readFile('dtList.txt', 'utf8', (err, data)=>{
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
    let title = $('title')[0].childNodes[0].data;
    if(title.lastIndexOf('-') > 0){
        title = title.substring(title.lastIndexOf('-')+1)
    }
    if(title.indexOf('(') > 0){
        title = title.substring(title.indexOf('('))
    }
    // 去除无效字符
    title = title.replace('/\s+/','');
    title = title.replace(':','')
    let picUrl = $('.pic a img')[0].attribs.src
    
    if(!fs.existsSync(path.normalize('./dt/'+title)))
        fs.mkdirSync(path.normalize('./dt/'+title))
        
    //asyncRequest(picUrl).pipe(fs.createWriteStream(__dirname+'/dt/'+title+'/1.gif'))
    let gifRes = request('GET', picUrl, {
        'timeout': 10000,
        'retry': true,
        'retryDelay': 3000
    });
    fs.writeFileSync(__dirname+'/dt/'+title+'/1.gif', gifRes.body)
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
        //asyncRequest(picUrl).pipe(fs.createWriteStream(__dirname+'/dt/'+title+'/'+i+'.gif'))
        let gifRes = request('GET', picUrl, {
            'timeout': 10000,
            'retry': true,
            'retryDelay': 3000
        });
        fs.writeFileSync(__dirname+'/dt/'+title+'/'+i+'.gif', gifRes.body)
    }
}


/*
 //获取了所有动态图的地址
for(let i=1; i<totalPage; i++){
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
    
    srcs.map((index, srcNode) => {
        fs.writeFileSync('dtList.txt', srcNode.attribs.href+'\r\n',{flag: 'a'}, (err)=>{
            if(err) throw err;
        });
    })
}
*/