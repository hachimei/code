class GD {
    public static SW: number;
    public static SH: number;

    public static rows: number = 5; 
    public static cols: number = 4;
    public static gird_side_length: number;

    public static MINES: number = 5;
    public static mineField: Array<any>;

    public static initData(_stage: egret.Sprite){
        GD.SW = _stage.stage.stageWidth;
        GD.SH = _stage.stage.stageHeight;
        GD.gird_side_length = Math.floor((GD.SW - 40)/ GD.cols);

        // 生成一个二维数组
        GD.mineField = new Array();
        for(let i: number = 0; i < GD.rows; i++){
            GD.mineField[i] = new Array();
            for(let j: number = 0; j< GD.cols; j++){
                GD.mineField[i].push(0);
            }
        }

        // 随机生成地雷数据
        let placeMines: number = 0;
        let randomRows,randomCols;
        while(placeMines < GD.MINES){
            randomRows = Math.floor((Math.random() * GD.rows));
            randomCols = Math.floor((Math.random() * GD.cols));
            if(GD.mineField[randomRows][randomCols] === 0){
                GD.mineField[randomRows][randomCols] = 9;
                placeMines++;
            }
        }

        // 设置提示信息
        for(let i = 0; i < GD.rows; i++)
            for(let j = 0; j < GD.cols; j++){
                if(GD.mineField[i][j] === 9){
                    if(j > 0){
                        GD.mineField[i][j-1] += 1;
                    }
                    if(j + 1 < GD.cols){
                        GD.mineField[i][j+1] += 1;
                    }
                    if(i > 0){
                        GD.mineField[i-1][j] += 1;
                    }
                    if(i + 1 < GD.rows){
                        GD.mineField[i+1][j] += 1;
                    }
                    
                }
            }
    }
}