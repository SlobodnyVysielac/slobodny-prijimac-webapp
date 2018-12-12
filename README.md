# Slobodny Prijimac Webapp

## SHOUTcast Stream Status
- `/played.html?sid=1`
- `/7.html`  
  - `/index` status
  - `/currentsong` 1 song
  - popis response https://medium.com/appseed-io/display-song-title-and-cover-by-utilizing-shoutcast-s-meta-data-fb00011cb086
    - The first number, in our case 254, is the number of current listeners.
    - The second number is the stream status. It is 1 when a source is connected and 0 when there is no source. If there is no source then no client connections occur.
    - The third number, in our case 576, is the maximum number of listeners happened for this stream.
    - The next number (3000) is the maximum number of client connections allowed in total o the server.
    - The fifth number (252) represents the unique client connections across all active streams so if one client is on 2 streams, this will only be counted as one unique client.
    - The sixth number (128) is the current bitrate and,
    - at the end, is the current song’s artist-title.


## Spomalenia AAC 24kbs
- AAC 24 ma 2min spomalenie

## Crawler with request and cheerio
http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/

## fetch docs 
https://github.github.io/fetch/

## PWA apple support 
https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7

