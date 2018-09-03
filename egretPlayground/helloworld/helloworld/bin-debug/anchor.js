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
锚点是对显示对象进行操作的重要概念，切水果游戏中的水果旋转，是围绕其中心
 *      点旋转的。这个中心点就是我们所谓的锚点。
 *      锚点设置了一个基准点或者说中心点。显示对象的旋转和缩放均以锚点为基准。
*/
var Anchor = (function (_super) {
    __extends(Anchor, _super);
    function Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Anchor;
}(egret.DisplayObjectContainer));
__reflect(Anchor.prototype, "Anchor");
//# sourceMappingURL=anchor.js.map