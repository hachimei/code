var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GD = (function () {
    function GD() {
    }
    GD.initData = function (_stage) {
        GD.SW = _stage.stage.stageWidth;
        GD.SH = _stage.stage.stageHeight;
        GD.gird_side_length = Math.floor((GD.SW - 40) / GD.cols);
        // 生成一个二维数组
        GD.mineField = new Array();
        for (var i = 0; i < GD.rows; i++) {
            GD.mineField[i] = new Array();
            for (var j = 0; j < GD.cols; j++) {
                GD.mineField[i].push(0);
            }
        }
        // 随机生成地雷数据
        var placeMines = 0;
        var randomRows, randomCols;
        while (placeMines < GD.MINES) {
            randomRows = Math.floor((Math.random() * GD.rows));
            randomCols = Math.floor((Math.random() * GD.cols));
            if (GD.mineField[randomRows][randomCols] === 0) {
                GD.mineField[randomRows][randomCols] = 9;
                placeMines++;
            }
        }
        // 设置提示信息
        for (var i = 0; i < GD.rows; i++)
            for (var j = 0; j < GD.cols; j++) {
                if (GD.mineField[i][j] === 9) {
                    if (j > 0) {
                        GD.mineField[i][j - 1] += 1;
                    }
                    if (j + 1 < GD.cols) {
                        GD.mineField[i][j + 1] += 1;
                    }
                    if (i > 0) {
                        GD.mineField[i - 1][j] += 1;
                    }
                    if (i + 1 < GD.rows) {
                        GD.mineField[i + 1][j] += 1;
                    }
                }
            }
    };
    GD.rows = 5;
    GD.cols = 4;
    GD.MINES = 5;
    return GD;
}());
__reflect(GD.prototype, "GD");
//# sourceMappingURL=GD.js.map