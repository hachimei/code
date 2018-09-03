/*
    显示对象最基本的操作。
 *      显示对象可以是外部加载的JPG、PNG图片资源，也可以是程序绘制的形状。
 *      所有的显示对象显示均需要添加到显示列表。
*/
class LoadImage extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        let stage: egret.Stage = egret.MainContext.instance.stage
        let width = document.documentElement.clientWidth,
        height = document.documentElement.clientWidth
        stage.scaleMode = egret.StageScaleMode.FIXED_NARROW
        stage.setContentSize(width, height);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        let imgLoader: egret.ImageLoader = new egret.ImageLoader
        imgLoader.once(egret.Event.COMPLETE, this.imgLoaderHandler, this)
        imgLoader.load("resource/saikikusuo.jpg")


    } 

    private _txInfo: egret.TextField
    private _bgInfo: egret.Shape

    private imgLoaderHandler(evt: egret.Event): void{
        let bmd: egret.BitmapData = evt.currentTarget.data
        let texture: egret.Texture = new egret.Texture()
        texture.bitmapData = bmd
        let bird: egret.Bitmap = new egret.Bitmap( texture )
        bird.x = 100
        bird.y = 100
        this.addChild(bird)

        /// 为定位设置基准点(即锚点)
        bird.anchorOffsetX = bmd.width / 2;
        bird.anchorOffsetY = bmd.height / 2;
        bird.x = this.stage.stageWidth * .5;
        bird.y = this.stage.stageHeight * .5;
        let stageWidth = this.stage.stageWidth
        let stageHeight = this.stage.stageHeight
        
        /// 提示信息
        this._txInfo = new egret.TextField;
        this.addChild( this._txInfo );

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
        this.addChildAt( this._bgInfo, this.numChildren - 1 );

        this._bgInfo.x = this._txInfo.x;
        this._bgInfo.y = this._txInfo.y;
        this._bgInfo.graphics.clear();
        this._bgInfo.graphics.beginFill( 0xffffff, 0.5 );
        this._bgInfo.graphics.drawRect( 0, 0, this._txInfo.width, this._txInfo.height );
        this._bgInfo.graphics.endFill();
        
        this.stage.addEventListener( egret.TouchEvent.TOUCH_BEGIN, ( evt:egret.TouchEvent )=>{
            bird.x = evt.localX ;
            bird.y = evt.localY ;
        }, this );
    }

}