var DragonbonesRuntime = require('../../DragonbonesRuntime/dragonBones'),
    DisplayBridge  = require('../display/DisplayBridge');

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Factory = (function (_super) {
    __extends(Factory, _super);

    function Factory() {
        _super.call(this);
    };

    Factory.prototype._generateArmature = function() {
        var armature = new DragonbonesRuntime.Armature(new PIXI.DisplayObjectContainer());
        return armature;
    };

    Factory.prototype._generateSlot = function() {
        var slot = new DragonbonesRuntime.Slot(new DisplayBridge());
        return slot;
    };

    Factory.prototype._generateDisplay = function(textureAtlas, fullName, pivotX, pivotY) {
        var texture = PIXI.Texture.fromFrame(fullName);

        var image = new PIXI.Sprite(texture);
        image.pivot.x = pivotX;
        image.pivot.y = pivotY;

        return image;
    };

    return Factory;
})(DragonbonesRuntime.factorys.BaseFactory);

module.exports = Factory;