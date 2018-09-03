var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/*
    显示对象最基本的操作。
 *      显示对象可以是外部加载的JPG、PNG图片资源，也可以是程序绘制的形状。
 *      所有的显示对象显示均需要添加到显示列表。
*/
var LoadImage = (function (_super) {
    __extends(LoadImage, _super);
    function LoadImage() {
        var _this = _super.call(this) || this;
        var stage = egret.MainContext.instance.stage;
        var width = document.documentElement.clientWidth, height = document.documentElement.clientWidth;
        stage.scaleMode = egret.StageScaleMode.FIXED_NARROW;
        stage.setContentSize(width, height);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    LoadImage.prototype.onAddToStage = function (event) {
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, this.imgLoaderHandler, this);
        imgLoader.load("resource/saikikusuo.jpg");
    };
    LoadImage.prototype.imgLoaderHandler = function (evt) {
        var bmd = evt.currentTarget.data;
        var texture = new egret.Texture();
        texture.bitmapData = bmd;
        var bird = new egret.Bitmap(texture);
        bird.x = 100;
        bird.y = 100;
        this.addChild(bird);
        /// 为定位设置基准点(即锚点)
        bird.anchorOffsetX = bmd.width / 2;
        bird.anchorOffsetY = bmd.height / 2;
        bird.x = this.stage.stageWidth * .5;
        bird.y = this.stage.stageHeight * .5;
        var stageWidth = this.stage.stageWidth;
        var stageHeight = this.stage.stageHeight;
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild(this._txInfo);
        this._txInfo.size = 28;
        this._txInfo.x = 50;
        this._txInfo.y = 50;
        this._txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this._txInfo.textColor = 0x000000;
        this._txInfo.type = egret.TextFieldType.DYNAMIC;
        this._txInfo.lineSpacing = 6;
        this._txInfo.multiline = true;
        this._txInfo.text =
            "轻触屏幕调整显示对象位置";
        this._bgInfo = new egret.Shape;
        this.addChildAt(this._bgInfo, this.numChildren - 1);
        this._bgInfo.x = this._txInfo.x;
        this._bgInfo.y = this._txInfo.y;
        this._bgInfo.graphics.clear();
        this._bgInfo.graphics.beginFill(0xffffff, 0.5);
        this._bgInfo.graphics.drawRect(0, 0, this._txInfo.width, this._txInfo.height);
        this._bgInfo.graphics.endFill();
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            bird.x = evt.localX;
            bird.y = evt.localY;
        }, this);
    };
    return LoadImage;
}(egret.DisplayObjectContainer));
__reflect(LoadImage.prototype, "LoadImage");
//# sourceMappingURL=loadImage.js.map