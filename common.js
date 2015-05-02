var parseURL = function(url){
    var temp =  document.createElement('a');
    temp.href = url;
    var result = {
        "port": temp.port,
        "protocol": temp.protocol.replace(':',''),
        "hash": temp.hash.replace('#',''),
        "host": temp.host,
        "href": temp.href,
        "hostname": temp.hostname,
        "pathname": temp.pathname,
        "search": temp.search,
        "query": {}
    }
    var seg = result.search.replace(/^\?/,'').split('&'),
        leng = seg.length,
        i = 0,
        target;
    for(;i<leng;i++){
        if(!seg[i])continue;
        target = seg[i].split('=');
        result.query[target[0]] = target[1];
    }
    temp = null;
    return result;
}