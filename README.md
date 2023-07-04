# Remote Cache Invalidator

This application is used to invalidate the cache of a CDN whenever an editor publishes new content on a site.

## Setup
### Installation

Install the application and add it to your site, and configure the fields.

Api url: https://api.cloudflare.com/client/v4/zones/ZONE_ID/purge_cache" Replace ZONE_ID with your sites [Zone ID](https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)

Auth token: A valid token that has permission to clear cache.

Checking the box "Disable this service" will stop all API calls from Enonic to Cloudflare

Optional - Cache-Control hearer: Cache control headers on pages where its not already set

### Building
```bash
git clone https://github.com/seeds/remote-cache-invalidator-xp.git
cd remote-cache-invalidator-xp
./gradlew clean build
```
The application jar should be in /build/libs as cache-invalidator-X.X.jar

## Supported CDN services

- Cloudflare

## License and credits
The application is licensed under the [MIT license](https://github.com/seeds/remote-cache-invalidator/blob/master/LICENSE.txt)

Made by [Seeds Consulting](https://seeds.no)