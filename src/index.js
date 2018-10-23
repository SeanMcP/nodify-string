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

// const nodifyStringJSX = (htmlString) => {
//     const nodes = nodifyString(htmlString, {
//         array: true
//     })
//     return nodes.map((node, i) => {
//         console.log('node', node)
//         console.log('node.tagName', node.tagName)
//         if (node.tagName) {
//             return (
//                 React.createElement(
//                     node.tagName.toLowerCase(), {
//                         id: node.id.slice(0, node.id.length - 1)
//                     },
//                     node.textContent
//                 ))
//         }
//     })
// }

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = nodifyString;
} else if (typeof define === 'function' && define.amd) {
    define(function () {
        return nodifyString;
    });
}