const CLOUDFLARE = require('/lib/cloudflare')
const FASTLY = require('/lib/fastly')

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
    if(appConfig.fastly){
        appConfig.fastly && runFastly(appConfig.fastly)
    }
}

function runCloudflare(cflConfig){
    if(cflConfig['disable-service']) return

    const cflMessage = CLOUDFLARE.execute(cflConfig.url, cflConfig.token)
    log.info(`Cloudflare message(s): ${cflMessage}`)
}

function runFastly(fastlyConfig){
    if(fastlyConfig['disable-service']) return

    const fastlyMessage = FASTLY.execute(fastlyConfig.url, fastlyConfig.token)
    log.info(`Fastly message(s): ${fastlyMessage}`)
}