function nodifyString(htmlString, settings) {
    if (typeof htmlString === 'string') {
        var outputAsArray = false
        if (settings && settings.array) {
            outputAsArray = settings.array
        }
    
        var parser = new DOMParser()
        var document = parser.parseFromString(htmlString, 'text/html')
        var nodes = document.childNodes[0].childNodes[1].childNodes
    
        if (outputAsArray) {
            nodes = Array.prototype.slice.call(nodes);
        }
    
        return nodes
    } else {
        return []
    }
}

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = nodifyString;
} else if (typeof define === 'function' && define.amd) {
    define(function () {
        return nodifyString;
    });
} else {
    root.nodifyString = nodifyString;
}