const portalLib = require('/lib/xp/portal');

exports.responseProcessor = function (req, res) {
    let config = portalLib.getSiteConfig();

    if (req.mode == "live" && config.cacheControlHeader) {
        const previousCacheControl = res.headers['cache-control']
        res.headers['Cache-Control'] = previousCacheControl && previousCacheControl !== '' ? previousCacheControl : config.cacheControlHeader;
    }

    return res;
};