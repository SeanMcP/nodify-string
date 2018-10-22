# nodify-string

A utility for converting HTML strings into DOM nodes without innerHTML.

## Why?

`nodify-string` was created to be used in conjunction with [Marked.js](https://marked.js.org/). The library converts markdown into an HTML string. In most scenarios, that HTML string is then added to the DOM using an element's `innerHTML` method. However, there are [possible security risks with using `innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations).

To avoid those risks, `nodify-string` converts an HTML string like the one generated from Marked.js into a `NodeList` or `Array`. The output can then be appended to a parent element using the `appendChild` method.

## Install

Get CDN from [UNPKG](https://unpkg.com):

```html
<script src="https://unpkg.com/nodify-string"></script>
```

Install via npm or yarn:

```sh
npm install --save nodify-string

# or

yarn add nodify-string
```

## Docs

### Basic

Add `nodify-string` to your list of scripts at the bottom of your HTML document. Then call the `nodifyString` function and pass it an HTML string to nodify. Once you have your list, loop over it and append each node to a parent element.

```html
<!-- index.html -->
<body>
    <div id="output"></div>

    <script src="https://unpkg.com/nodify-string"></script>
    <script>
        const target = document.getElementById('output')
        const greeting = '<h1>Hello world!</h1>'
        nodifyString(greeting).forEach(node =>
            target.appendChild(node)
        )
    </script>
</body>
```

### Use with Marked.js

Add both `nodify-string` and Marked.js to your document. Then go through the same process with the output from the `marked` function.

```html
<!-- index.html -->
<body>
    <div id="output"></div>

    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://unpkg.com/nodify-string"></script>
    <script>
        const target = document.getElementById('output')
        const greeting = '# Hello world'
        const htmlString = marked(greeting)
        nodifyString(htmlString).forEach(node =>
            target.appendChild(node)
        )
    </script>
</body>
```

### Settings

An optional second argument passed to the `nodifyString` function is a settings object. As of the current version, there is only one option: `array`.

```js
nodifyString('<h1>Hello!</h1>', {
    array: boolean
    // Returns the nodes in an array
})
```

By default, `nodifyString` will return a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

## License

[MIT](https://github.com/seanmcp/nodify-string/blob/master/license)