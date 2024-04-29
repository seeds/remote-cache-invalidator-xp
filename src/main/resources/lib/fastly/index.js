const HTTP_CLIENT = require('/lib/http-client');

module.exports = {
    execute: execute
}

/**
 * Execute cache cleaning of CDN Cloudflare bases on the given inputs
 * @param {string} url complete url of the request.
 * @param {string} token valid access token
 * @returns String with message indicating the state of the operation
 */
function execute(url, token){
    if(!url || !token) return "Parameters invalid !"
    
    const request = getFastlyPurgeCacheRequestObject(url, token)

    try {
        const response = HTTP_CLIENT.request(request)
        return processCloudflareResponse(JSON.parse(response.body))    
    } catch (error) {
        return "An unexpected error happened while calling Fasly's service: " + error
    }    
}

/**
 * Get the object of the POST http request that will be made
 * to invalidate the cache of cloudflare CDN.
 * @param {string} url complete url of the request.
 * @param {string} token valid access token
 */
function getFastlyPurgeCacheRequestObject(url, token){
    return {
        url: url,
        method: 'POST',
        headers: {
            'Fastly-Key': token,
            'Accept': 'application/json'
        }
    }
}

/**
 * Cloudflare http response object: 
 * {"success": true, "errors": [], "messages": [], "result": { "id": "9a98.." } }
 * @param {object} clfResponseObject 
 * @returns string with the messages of the request
 */
function processCloudflareResponse(fastlyResponseObject){
    if(fastlyResponseObject.status && fastlyResponseObject.status == "ok"){
        return `Cache cleaned in Fastly server. Status OK`
    }
    return JSON.stringify(fastlyResponseObject, null, 2)
}