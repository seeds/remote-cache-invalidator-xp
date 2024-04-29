# Remote Cache Invalidator

This application is used to set chache headers on pages, and invalidate the cache of a CDN whenever an editor publishes new content on a site.

## Supported CDN services

- Cloudflare
- Fastly

## Setup
### Installation

Install the application from Enonic Market, or build it youself, and add it to your site.

Configure the fields to make the application add cache headers, and purge remote cache.

#### Cloudflare

Api url: https://api.cloudflare.com/client/v4/zones/ZONE_ID/purge_cache" Replace ZONE_ID with your sites [Zone ID](https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)

Auth token: A valid token that has permission to clear cache.

Checking the box "Disable this service" will stop all API calls from Enonic to Cloudflare.

#### Fastly
Api url: https://api.fastly.com/service/SERVICE_ID/purge_all Replace SERVICE_ID with your [Service ID](https://docs.fastly.com/en/guides/about-services)

Auth token: A valid token with at least [Engineer permissions](https://docs.fastly.com/en/guides/configuring-user-roles-and-permissions)

Checking the box "Disable this service" will stop all API calls from Enonic to Fastly.

#### Headers
Optional - Cache-Control hearer: Cache control headers on pages where its not already set, these will not overwrite existing cache control headers.

### Building
```bash
git clone https://github.com/seeds/remote-cache-invalidator-xp.git
cd remote-cache-invalidator-xp
./gradlew clean build
```
The application jar should be in /build/libs as cache-invalidator-X.X.jar

## Changelog
|Date|Version|Notes|
|---------|-----|-----------------------|
|May 2024|1.6.0|Added support for Fastly|
|July 2023|1.5.0|Released to Enonic Market, supporting cloudflare|

## License and credits
The application is licensed under the [GNU Affero General Public License v3.0](https://github.com/seeds/remote-cache-invalidator-xp/blob/main/LICENSE)

Made by [Seeds Consulting](https://seeds.no)