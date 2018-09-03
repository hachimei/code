//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        var stage = egret.MainContext.instance.stage;
        var width = document.documentElement.clientWidth, height = document.documentElement.clientWidth;
        stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
        stage.setContentSize(width, height);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (evt) {
        // let imgLoader: egret.ImageLoader = new egret.ImageLoader
        // this.addEventListener(egret.Event.COMPLETE, this.imgLoadHandler, this)
        // imgLoader.load("rescource/saikikusuo.jpg")
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadConfig("resource/default.res.json", "resource").then(function () { return RES.loadGroup("preload"); }, function (err) { return egret.error(err); });
    };
    Main.prototype.onGroupComplete = function () {
        this.bm = new egret.Bitmap();
        this.bm.texture = RES.getRes("saikikusuo_jpg");
        this.addChild(this.bm);
        // 设置图片的中心为其锚点
        this.bm.anchorOffsetX = this.bm.width / 2;
        this.bm.anchorOffsetY = this.bm.height / 2;
        // 设置图片的初始位置
        this.bm.x = this.stage.stageWidth / 2;
        this.bm.y = this.stage.stageHeight / 2;
        this.txInfo = new egret.TextField();
        this.addChild(this.txInfo);
        this.txInfo.size = 28;
        this.txInfo.x = 50;
        this.txInfo.y = 50;
        this.txInfo.textAlign = egret.HorizontalAlign.LEFT;
        this.txInfo.textColor = 0x000000;
        this.txInfo.type = egret.TextFieldType.DYNAMIC;
        this.txInfo.lineSpacing = 6;
        this.txInfo.multiline = true;
        this.launchAnimations();
    };
    Main.prototype.launchAnimations = function () {
        var _this = this;
        this.iAniMode = AniModes.ANIM_ROT;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.iAniMode = (_this.iAniMode + 1) % 3;
        }, this);
        this.nScaleBase = 0;
        /// 根据当前模式调整旋转度数或缩放正弦基数形成相应动画
        this.addEventListener(egret.Event.ENTER_FRAME, function (evt) {
            switch (_this.iAniMode) {
                case AniModes.ANIM_ROT:
                    _this.bm.rotation += Main.STEP_ROT;
                    break;
                case AniModes.ANIM_SCALE:
                    _this.bm.scaleX = _this.bm.scaleY = 0.5 + 0.5 * Math.abs(Math.sin(_this.nScaleBase += Main.STEP_SCALE));
            }
            _this.txInfo.text =
                "旋转角度:" + _this.bm.rotation
                    + "\n缩放比例:" + _this.bm.scaleX.toFixed(2)
                    + "\n\n轻触进入" + (["缩放", "静止", "旋转"][_this.iAniMode]) + "模式";
        }, this);
    };
    /// 旋转及缩放步长设定
    Main.STEP_ROT = 3;
    Main.STEP_SCALE = .03;
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var AniModes = (function () {
    function AniModes() {
    }
    AniModes.ANIM_ROT = 0;
    AniModes.ANIM_SCALE = 1;
    return AniModes;
}());
__reflect(AniModes.prototype, "AniModes");
//# sourceMappingURL=Main.js.map