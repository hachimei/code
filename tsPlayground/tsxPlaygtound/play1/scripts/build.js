const shell = require('shelljs');

shell.rm('-rf','dist')
if(shell.exec("webpack --config webpack.common.config.js").code !== 0){
    shell.exit(1);
}else{
    shell.exit(0);
}

