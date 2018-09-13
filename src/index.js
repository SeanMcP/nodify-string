function nodifyString(htmlString, settings) {
    var outputAsArray = false
    if (settings && settings.hasOwnProperty('array')) {
        outputAsArray = settings.array
    }

    var parser = new DOMParser()
    var document = parser.parseFromString(htmlString, 'text/html')
    var nodes = document.childNodes[0].childNodes[1].childNodes

    if (outputAsArray) {
        nodes = Array.prototype.slice.call(nodes);
    }

    return nodes
}

try {
    module.exports = nodifyString
} catch (error) {
    console.log('nodify-string imported')
}