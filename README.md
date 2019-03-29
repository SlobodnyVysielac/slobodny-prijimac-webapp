# Slobodny Prijimac Webapp

## SHOUTcast Server Adresses
- [http://78.47.79.190:8006/index.html?sid=1]() status
- [http://78.47.79.190:8006/played.html?sid=1]() played history
- [http://78.47.79.190:8006/7.html]() parsable one line response with data
    - popis response https://medium.com/appseed-io/display-song-title-and-cover-by-utilizing-shoutcast-s-meta-data-fb00011cb086
        - The first number, in our case 254, is the number of current listeners.
        - The second number is the stream status. It is 1 when a source is connected and 0 when there is no source. If there is no source then no client connections occur.
        - The third number, in our case 576, is the maximum number of listeners happened for this stream.
        - The next number (3000) is the maximum number of client connections allowed in total o the server.
        - The fifth number (252) represents the unique client connections across all active streams so if one client is on 2 streams, this will only be counted as one unique client.
        - The sixth number (128) is the current bitrate and,
        - at the end, is the current song’s artist-title.
     - [http://78.47.79.190:8006/currentsong]() just current song
     
## WordPress 
- [https://wordpress.org/plugins/events-manager/]() wp plugin Event Manager
    - [http://wp-events-plugin.com/]()
    - cal import [https://slobodnyvysielac.sk/events.ics]()
    
- [https://slobodnyvysielac.sk/feed/]() XML feed with news


## Spomalenia AAC 24kbs
- AAC 24 ma 2min spomalenie

## Crawler with request and cheerio
http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/

## PWA apple support 
https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7

