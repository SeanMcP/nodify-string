export default nodifyString = (htmlString) => {
    const byLine = htmlString.split('\n')

    return byLine.reduce((acc, line) => {
        if (line.length) {
            const tagMatch = line.match(/\<(\w+)(?:\s*|\>)?/g)[0]
            const tag = tagMatch.slice(1, tagMatch.length - 1)
    
            const textMatch = line.match(/\>(.*?)\</g)[0]
            const text = textMatch.slice(1, textMatch.length - 1)
    
            const element = document.createElement(tag)
            const textNode = document.createTextNode(text)
            element.appendChild(textNode)

            acc.push(element)
        }

        return acc
    }, [])
}