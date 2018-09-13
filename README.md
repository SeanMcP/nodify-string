# nodify-string

A utility for converting HTML strings into DOM nodes without innerHTML.

## Why?

`nodify-string` was created to be used in conjunction with [Marked.js](https://marked.js.org/). The library converts markdown into an HTML string. In most scenarios, that HTML string is then added to the DOM using an element's `innerHTML` method. However, there are [possible security risks with using `innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations).

To avoid those risks, `nodify-string` converts an HTML string like the one generated from Marked.js into a `NodeList` or `Array`. The output can then be appended to a parent element using the `appendChild` method.

## Settings

The second argument passed to `nodifyString` is an optional settings object. As of the current version, there is only one option: `array`.

```js
nodifyString('<h1>Hello!</h1>', {
    array: boolean
    // Returns the nodes in an array
})
```

By default, `nodifyString` will return a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

## License

[MIT](https://github.com/seanmcp/nodify-string/blob/master/license)