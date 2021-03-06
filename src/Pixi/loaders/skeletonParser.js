var Resource    = PIXI.loaders.Resource,
    async       = PIXI.utils.async,
    AtlasParser = require('../../loaders/AtlasParser');

function skeletonParser() {
    return function (resource, next) {
        if(resource.url.indexOf('_skeleton.json') < 0) {
            return next();
        }

        var skeletonData = resource.data;
        skeletonParser.skeletons[skeletonData.name] = skeletonData;

        var atlasPath = resource.url.split('_skeleton.json')[0] + '_atlas.json';
        var atlasKey = resource.name + '_atlas';

        var atlasLoader = new PIXI.loaders.Loader();
        atlasLoader.use(AtlasParser());
        atlasLoader.add(skeletonData.name + '_atlas', atlasPath);
        atlasLoader.load((function (loader, res) {
            next();
        }).bind(this));
    }
};

skeletonParser.skeletons = {};

module.exports = skeletonParser;