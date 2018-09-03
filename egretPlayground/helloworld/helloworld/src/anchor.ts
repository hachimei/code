/*
锚点是对显示对象进行操作的重要概念，切水果游戏中的水果旋转，是围绕其中心
 *      点旋转的。这个中心点就是我们所谓的锚点。
 *      锚点设置了一个基准点或者说中心点。显示对象的旋转和缩放均以锚点为基准。
*/
class Anchor extends egret.DisplayObjectContainer{
        /// 旋转及缩放步长设定
    private static STEP_ROT:number = 3;
    private static STEP_SCALE:number = .03;
    
    public constructor() {
        super();
        let stage: egret.Stage = egret.MainContext.instance.stage
        let width = document.documentElement.clientWidth,
        height = document.documentElement.clientWidth
        stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH
        stage.setContentSize(width, height);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private bm: egret.Bitmap
    private txInfo: egret.TextField

    private onAddToStage(evt: egret.Event): void{
        // let imgLoader: egret.ImageLoader = new egret.ImageLoader
        // this.addEventListener(egret.Event.COMPLETE, this.imgLoadHandler, this)
        // imgLoader.load("rescource/saikikusuo.jpg")
        
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this)
        RES.loadConfig("resource/default.res.json", "resource").then(
            () => RES.loadGroup("preload"),
            (err) => egret.error(err)
        )
        
    }

    private onGroupComplete(): void{
        this.bm = new egret.Bitmap()
        this.bm.texture = RES.getRes("saikikusuo_jpg")
        this.addChild(this.bm)

        // 设置图片的中心为其锚点
        this.bm.anchorOffsetX = this.bm.width / 2
        this.bm.anchorOffsetY = this.bm.height / 2
         // 设置图片的初始位置
        this.bm.x = this.stage.stageWidth / 2
        this.bm.y = this.stage.stageHeight / 2

        this.txInfo = new egret.TextField()
        this.addChild(this.txInfo)

        this.txInfo.size = 28
        this.txInfo.x = 50
        this.txInfo.y = 50
        this.txInfo.textAlign = egret.HorizontalAlign.LEFT
        this.txInfo.textColor = 0x000000
        this.txInfo.type = egret.TextFieldType.DYNAMIC
        this.txInfo.lineSpacing = 6
        this.txInfo.multiline = true

        this.launchAnimations()
    }

    /// 用于记录当前的模式， 模式切换同触摸舞台触发
    private iAniMode: number
    private nScaleBase: number

    private launchAnimations(): void{
        this.iAniMode = AniModes.ANIM_ROT
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        this.iAniMode = (this.iAniMode + 1) % 3
        }, this)

        this.nScaleBase = 0

        /// 根据当前模式调整旋转度数或缩放正弦基数形成相应动画
        this.addEventListener(egret.Event.ENTER_FRAME, (evt: egret.Event) => {
            switch(this.iAniMode){
                case AniModes.ANIM_ROT:
                    // this.bm.rotation += Main.STEP_ROT
                    this.bm.rotation += Anchor.STEP_ROT
                    break;
                case AniModes.ANIM_SCALE:
                    this.bm.scaleX = this.bm.scaleY = 0.5 + 0.5 * Math.abs( Math.sin(this.nScaleBase += Anchor.STEP_SCALE) )
                }
            this.txInfo.text = 
                  "旋转角度:" + this.bm.rotation 
                +"\n缩放比例:" + this.bm.scaleX.toFixed(2)
                +"\n\n轻触进入" +(["缩放","静止","旋转"][this.iAniMode])+ "模式";

        }, this)
    }

}

class AniModes{
    public static ANIM_ROT: number = 0
    public static ANIM_SCALE: number = 1
}
