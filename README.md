# nodify-string

A utility for converting HTML strings into DOM nodes without innerHTML.

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