const CLOUDFLARE = require('/lib/cloudflare')

/**
 * *******************************************************
 * EVERY CACHE CLEANING FUNCTION SHOULD GET EXECUTED HERE
 * IF THE ONLY NECESSARY INFORMATION IS THE APP CONFIG.
 * THE MAIN.JS IS CALLING RUN, SO EVERYTHING WE CALL
 * HERE WILL BE EXECUTED ALSO
 * *******************************************************
 * @param {Object} appConfig Get the configurations set in site.xml
 */
exports.run = function(appConfig) {
    if(appConfig.cloudflare){
        appConfig.cloudflare && runCloudflare(appConfig.cloudflare)
    }
}

function runCloudflare(cflConfig){
    if(cflConfig['disable-service']) return

    const cflMessage = CLOUDFLARE.execute(cflConfig.url, cflConfig.token)
    log.info(`Cloudflare message(s): ${cflMessage}`)
}